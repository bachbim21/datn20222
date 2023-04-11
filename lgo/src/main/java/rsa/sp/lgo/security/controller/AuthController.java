package rsa.sp.lgo.security.controller;


import com.fasterxml.jackson.annotation.JsonProperty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
//import rsa.sp.lgo.security.jwt.JwtTokenProvider;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.model.Role;
import rsa.sp.lgo.model.User;
import rsa.sp.lgo.repository.RoleRepository;
import rsa.sp.lgo.repository.UserRepository;
import rsa.sp.lgo.security.entity.LoginRequest;
import rsa.sp.lgo.security.entity.SignupRequest;
import rsa.sp.lgo.security.entity.MessageResponse;
import rsa.sp.lgo.security.service.AuthService;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private AuthService authService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<JWTToken> token(@RequestBody LoginRequest login) {
        String token = this.authService.token(login.getEmail(), login.getPassword(), login.getRememberMe());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(Constants.AUTH_HEADER_STRING, "Bearer " + token);
        JWTToken jwtToken = new JWTToken(token);
        return new ResponseEntity<JWTToken>(jwtToken, httpHeaders, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already exits!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getEmail(), signUpRequest.getBirthDay(), signUpRequest.getAvatar(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        logger.info(String.valueOf(strRoles));

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(Constants.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "ADMIN":
                        Role adminRole = roleRepository.findByName(Constants.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(Constants.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRole(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    /**
     * Object to return as body in JWT Authentication.
     */
    static class JWTToken {

        private String token;

        JWTToken(String token) {
            this.token = token;
        }

        @JsonProperty("token")
        String getIdToken() {
            return token;
        }

        void setIdToken(String token) {
            this.token = token;
        }
    }
}

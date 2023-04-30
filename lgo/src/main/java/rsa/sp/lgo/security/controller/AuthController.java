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
import rsa.sp.lgo.core.SecurityUtils;
import rsa.sp.lgo.core.error.EmailAlreadyExitsException;
import rsa.sp.lgo.core.error.RoleNotFoundException;
import rsa.sp.lgo.models.Role;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.repository.RoleRepository;
import rsa.sp.lgo.repository.UserRepository;
import rsa.sp.lgo.security.model.LoginRequest;
import rsa.sp.lgo.security.model.SignupRequest;
import rsa.sp.lgo.security.model.MessageResponse;
import rsa.sp.lgo.security.service.AuthService;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
public class AuthController  {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private AuthService authService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<JWTToken> token(@RequestBody LoginRequest login) {
        String token = this.authService.token(login.getEmail(), login.getPassword(), login.getRemember());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(Constants.AUTH_HEADER_STRING, "Bearer " + token);
        JWTToken jwtToken = new JWTToken(token);
        return new ResponseEntity<JWTToken>(jwtToken, httpHeaders, HttpStatus.OK);
    }

    @RequestMapping(path = "/signup", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new EmailAlreadyExitsException());
        }

        // Create new user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getEmail(), signUpRequest.getBirthDay(), signUpRequest.getAvatar(),
                signUpRequest.getPassword());

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        logger.info(String.valueOf(strRoles));

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(Constants.ROLE_USER)
                    .orElseThrow(() -> new RoleNotFoundException());
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case Constants.ROLE_ADMIN:
                        Role adminRole = roleRepository.findByName(Constants.ROLE_ADMIN)
                                .orElseThrow(() -> new RoleNotFoundException());
                        roles.add(adminRole);
                        break;
                    default:
                        new  RoleNotFoundException();
                }
            });
        }

        user.setRole(roles);
        beforeCreate(user);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
    private void beforeCreate(User user) {
        user.setCreated(System.currentTimeMillis());
        user.setUpdated(System.currentTimeMillis());

        if(user.getCreatedBy() == null) {
            String currentUsername = SecurityUtils.getCurrentUserLogin();
            user.setCreatedBy(currentUsername);
            user.setUpdatedBy(currentUsername);
        }
        if(user.getActive() == null) {
            user.setActive(true);
        }
    }

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

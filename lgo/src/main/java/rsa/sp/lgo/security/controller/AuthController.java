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


}

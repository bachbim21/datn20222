package rsa.sp.lgo.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.security.model.JWTToken;
import rsa.sp.lgo.security.model.LoginRequest;
import rsa.sp.lgo.security.model.SignupRequest;
import rsa.sp.lgo.service.UserService;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.Set;


@RestController
@RequestMapping("/api/user")
public class UserController extends CrudApiEndpoint<User, Long> {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private UserService userService;

    public UserController(UserService service) {
        super(service);
        this.userService = service;
        this.baseUrl = "/api/user";
    }
    @RequestMapping(value = "/share", method = RequestMethod.GET)
    private Set<String> getShareUser(@Param("userId") Long userId, @Param("nodeId") Long nodeId) {
        return userService.getShareUser(userId, nodeId);
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity token(@RequestBody LoginRequest login) {
        return userService.login(login);
    }

    @RequestMapping(path = "/signup", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        return userService.signup(signUpRequest);
    }
    @RequestMapping(path = "/forget-password", method = RequestMethod.GET)
    public ResponseEntity forgetPassword(@RequestParam("email") String email) throws MessagingException, UnsupportedEncodingException {
        return userService.forgetPassword(email);
    }
    @RequestMapping(path = "/reset-password", method = RequestMethod.POST)
    public ResponseEntity resetPassword(@RequestBody User user) {
        return userService.resetPassword(user);
    }

}

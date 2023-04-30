package rsa.sp.lgo.controllers;


import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.service.UserService;


@RestController
@RequestMapping("/api/user")
public class UserController extends CrudApiEndpoint<User, Long> {
    private UserService userService;

    public UserController(UserService service) {
        super(service);
        this.userService = service;
        this.baseUrl = "/api/user";
    }

}

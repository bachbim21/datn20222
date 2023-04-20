package rsa.sp.lgo.endpoints;


import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.model.User;
import rsa.sp.lgo.service.ElementService;
import rsa.sp.lgo.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserEndpoint extends CrudApiEndpoint<User, Long> {
    private UserService userService;

    public UserEndpoint(UserService service) {
        super(service);
        this.userService = service;
        this.baseUrl = "/api/user";
    }

}

package rsa.sp.lgo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TestController {
    @RequestMapping(path = "/1", method = RequestMethod.GET)
    public List<String> test() {
        List<String> result = new ArrayList<>();
        for(int i = 0; i < 5; i++) {
            result.add("test " + i);
        }
        return result;
    }
}

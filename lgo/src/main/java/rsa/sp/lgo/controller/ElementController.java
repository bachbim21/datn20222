package rsa.sp.lgo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.model.Element;
import rsa.sp.lgo.repository.ElementRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/element")
public class ElementController {
    @Autowired
    ElementRepository elementRepository;
    @GetMapping("")
    public List<Element> getAll() {
        return elementRepository.findAllByActiveTrue();
    }
}

package rsa.sp.lgo.controllers;

import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.models.Element;
import rsa.sp.lgo.repository.ElementRepository;
import rsa.sp.lgo.service.ElementService;

@RestController
@RequestMapping("/api/element")
public class ElementController extends CrudApiEndpoint<Element, Long> {

    private  ElementRepository elementRepository;
    private ElementService elementService;
    public ElementController(ElementService service) {
        super(service);
        this.elementService = service;
        this.baseUrl = "/api/element";
    }
//    @GetMapping("")
//    public List<Element> getAll() {
//        return elementRepository.findAllByActiveTrue();
//    }
}

package rsa.sp.lgo.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.model.Element;
import rsa.sp.lgo.repository.ElementRepository;
import rsa.sp.lgo.service.ElementService;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/element")
public class ElementEndpoint extends CrudApiEndpoint<Element, Long> {

    private  ElementRepository elementRepository;
    private ElementService elementService;
    public ElementEndpoint(ElementService service) {
        super(service);
        this.elementService = service;
        this.baseUrl = "/api/element";
    }
//    @GetMapping("")
//    public List<Element> getAll() {
//        return elementRepository.findAllByActiveTrue();
//    }
}

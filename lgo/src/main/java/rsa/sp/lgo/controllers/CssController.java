package rsa.sp.lgo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.models.Css;
import rsa.sp.lgo.service.CssService;

@RestController
@RequestMapping("/api/css")
public class CssController extends CrudApiEndpoint<Css, Long> {
    @Autowired
    private CssService cssService;

    public CssController(CssService service) {
        super(service);
        this.cssService = service;
        this.baseUrl = "/api/css";
    }

}

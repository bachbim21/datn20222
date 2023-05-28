package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.models.Css;
import rsa.sp.lgo.repository.CssRepository;

@Service
public class CssService extends CrudService<Css, Long> {

    @Autowired
    private CssRepository cssRepository;
    public CssService(CssRepository repository){
        this.repository = this.cssRepository = repository;
    }
}

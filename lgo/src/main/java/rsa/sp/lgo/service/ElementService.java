package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.model.Element;
import rsa.sp.lgo.repository.ElementRepository;


@Service
public class ElementService extends CrudService<Element, Long> {
    @Autowired
    private ElementRepository elementRepository;
    public ElementService(ElementRepository repository){
        this.repository = this.elementRepository = repository;
    }
}

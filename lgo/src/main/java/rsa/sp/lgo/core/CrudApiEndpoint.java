package rsa.sp.lgo.core;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;

public abstract class CrudApiEndpoint <T extends AbstractEntity, ID extends Serializable> {
    private static Logger logger = LoggerFactory.getLogger(CrudApiEndpoint.class);

    protected CrudService<T,ID> service;

    protected String baseUrl;

    public CrudApiEndpoint(CrudService service) {
        this.service = service;
    }

}

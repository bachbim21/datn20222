package rsa.sp.lgo.core;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;

@Transactional
public class CrudService <T extends AbstractEntity, ID extends Serializable> {
    private static Logger logger = LoggerFactory.getLogger(CrudService.class);
    protected CustomJpaRepository<T, ID> repository;


}

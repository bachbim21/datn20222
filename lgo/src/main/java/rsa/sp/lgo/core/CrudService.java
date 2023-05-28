package rsa.sp.lgo.core;

import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.RSQLParserException;
import cz.jirutka.rsql.parser.ast.Node;
import org.apache.commons.lang3.SerializationUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import rsa.sp.lgo.core.error.Status;
import rsa.sp.lgo.core.rsql.CustomRsqlVisitor;

import javax.persistence.EntityNotFoundException;
import java.io.Serializable;
import java.util.Iterator;
import java.util.List;
import java.util.function.Function;

@Transactional
public class CrudService <T extends AbstractEntity, ID extends Serializable> {
    private static Logger logger = LoggerFactory.getLogger(CrudService.class);
    protected CustomJpaRepository<T, ID> repository;

    public ResponseEntity get(ID id) {
        T t = repository.findById(id).orElse(null);
        if(!checkGet(t))
            return ResponseEntity.badRequest()
                .body(new ResponseObject("Bạn không có quyền truy cập tài nguyên", 405));
        return ResponseEntity.ok().body(t);
    }
    public Boolean checkGet(T t) {
        return true;
    }

    public T simpleGet(ID id) {
        return repository.findById(id).orElse(null);
    }

    public List<T> findAll() {;
        return repository.findAll();
    }

    public Page<T> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public List<T> search(String query) {
        if(StringUtils.isEmpty(query)){
            return repository.findAll();
        }
        Node rootNode = new RSQLParser().parse(query);
        Specification<T> spec = rootNode.accept(new CustomRsqlVisitor<T>());
        return repository.findAll(spec);
    }

    public Page<T> search(String query, Pageable pageable) {
        return searchByQuery(query, pageable);
    }

    public Page<T> searchByQuery(String query, Pageable pageable){
        logger.info("{} query:{}",this.getClass().getSimpleName(),query);
        if(StringUtils.isEmpty(query)){
            return repository.findAll(pageable);
        }
        try {
            Node rootNode = new RSQLParser().parse(query);
            Specification<T> spec = rootNode.accept(new CustomRsqlVisitor<T>());
            return repository.findAll(spec, pageable);
        } catch(RSQLParserException pe) {
            pe.printStackTrace();
            logger.error("{} SEARCH FAIL: {}",this.getClass().getSimpleName(),query);
            return emptyPage();
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("{} SEARCH FAIL: {}",this.getClass().getSimpleName(),query);
            return emptyPage();
        }
    }

    public ResponseEntity create(T entity) {
        beforeCreate(entity);
        repository.save(entity);
        afterCreate(entity);
        return ResponseEntity.status(HttpStatus.CREATED).body(entity);
    }

    public List<T> create(List<T> entities) {
        if(entities !=null && entities.size() > 0){
            for(T t: entities){
                beforeCreate(t);
            }
            repository.saveAll(entities);
            for(T t: entities){
                afterCreate(t);
            }
        }

        return entities;
    }

    public ResponseEntity update(ID id, T entity) {
        beforeUpdate(entity);
        T old = (T) SerializationUtils.clone(simpleGet(id));
        if(entity.getCreated() == null) entity.setCreated(old.getCreated());
        if(entity.getCreatedBy() == null) entity.setCreatedBy(old.getCreatedBy());
        if(old == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(entity);
        }
        repository.save(entity);
        afterUpdate(old,entity);
        return ResponseEntity.status(HttpStatus.CREATED).body(entity);
    }

    public List<T> saveMany(List<T> entities){
        for (T entity : entities){
            beforeCreate(entity);
        }
        repository.saveAll(entities);
        return entities;
    }

    public List<T> updateMany(List<T> entities){
        for (T entity : entities){
            beforeUpdate(entity);
        }
        repository.saveAll(entities);
        return entities;
    }

    public void delete(T entity) {

        if(entity.getCreatedBy() !=null && entity.getCreatedBy().equals("system")){
            throw new EntityNotFoundException("Can not remove system object");
        }
        beforeDelete(entity);
        repository.delete(entity);
        afterDelete(entity);
    }

    public void deleteById(ID id) {
        T entity = simpleGet(id);
        if(entity.getCreatedBy().equals("system")){
            throw new EntityNotFoundException("Can not remove system object");
        }
        delete(entity);
    }

    protected void beforeCreate(T entity) {

        entity.setCreated(System.currentTimeMillis());
        entity.setUpdated(System.currentTimeMillis());

        if(entity.getCreatedBy() == null) {
            String currentUsername = SecurityUtils.getCurrentUserLogin();
            entity.setCreatedBy(currentUsername);
            entity.setUpdatedBy(currentUsername);
        }
        if(entity.getActive() == null) {
            entity.setActive(true);
        }

    }
    protected void afterCreate(T entity) {

    }
    protected void beforeUpdate(T entity) {
        entity.setUpdated(System.currentTimeMillis());
        entity.setUpdatedBy(SecurityUtils.getCurrentUserLogin());
        if(entity.getActive() == null) {
            entity.setActive(true);
        }
    }
    protected void afterUpdate(T old, T updated) {

    }
    protected void beforeDelete(T entity) {

    }
    protected void afterDelete(T entity) {

    }
    public Page<T> emptyPage() {
        return new Page<T>() {
            @Override
            public Iterator<T> iterator() {
                return null;
            }

            @Override
            public int getTotalPages() {
                return 0;
            }

            @Override
            public long getTotalElements() {
                return 0;
            }

            @Override
            public int getNumber() {
                return 0;
            }

            @Override
            public int getSize() {
                return 0;
            }

            @Override
            public int getNumberOfElements() {
                return 0;
            }

            @Override
            public List<T> getContent() {
                return null;
            }

            @Override
            public boolean hasContent() {
                return false;
            }

            @Override
            public Sort getSort() {
                return null;
            }

            @Override
            public boolean isFirst() {
                return false;
            }

            @Override
            public boolean isLast() {
                return false;
            }

            @Override
            public boolean hasNext() {
                return false;
            }

            @Override
            public boolean hasPrevious() {
                return false;
            }

            @Override
            public Pageable nextPageable() {
                return null;
            }

            @Override
            public Pageable previousPageable() {
                return null;
            }

            @Override
            public <U> Page<U> map(Function<? super T, ? extends U> converter) {
                return null;
            }
        };
    }

    public void activate(ID id) {
        T t = repository.findById(id).orElse(null);
        t.setActive(true);
        update(id, t);
    }

    public void deactivate(ID id) {
        T t = repository.findById(id).orElse(null);
        t.setActive(false);
        update(id, t);
    }
}

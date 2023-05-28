package rsa.sp.lgo.core;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

public abstract class CrudApiEndpoint <T extends AbstractEntity, ID extends Serializable> {
    private static Logger logger = LoggerFactory.getLogger(CrudApiEndpoint.class);

    protected CrudService<T,ID> service;

    protected String baseUrl;

    public CrudApiEndpoint(CrudService service) {
        this.service = service;
    }
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<T>> list(Pageable pageable) {
        Page<T> page = service.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page,baseUrl);
        return new ResponseEntity<>(page.getContent(),headers, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity create(@RequestBody T entity) {
        logger.info("Call Create API by {}", SecurityUtils.getCurrentUserLogin());
        return service.create(entity);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public ResponseEntity update(@PathVariable(value = "id") ID id, @RequestBody T entity) {
        logger.info("Call Update API by {}",SecurityUtils.getCurrentUserLogin());
        return service.update(id,entity);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable(value = "id") ID id) {
        logger.info("Call delete API by {}",SecurityUtils.getCurrentUserLogin());
        service.deleteById(id);
        logger.info("Finish delete API by {}",SecurityUtils.getCurrentUserLogin());
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public ResponseEntity get(@PathVariable(value = "id") ID id) {
        return service.get(id);
    }

    @RequestMapping(path="/search", method = RequestMethod.GET)
    public ResponseEntity<List<T>>  get(@RequestParam("query") String query, @PageableDefault(size = 20) Pageable pageable) {
        try{
            Page<T> page = service.search(query, pageable);
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page,baseUrl);
            return new ResponseEntity<>(page.getContent(),headers, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}

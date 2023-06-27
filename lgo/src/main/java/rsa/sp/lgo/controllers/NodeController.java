package rsa.sp.lgo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.service.NodeService;

import java.util.List;


@RestController
@RequestMapping("/api/node")
public class NodeController extends CrudApiEndpoint<Node, Long> {
    private static final Logger logger = LoggerFactory.getLogger(NodeController.class);

    private NodeService nodeService;
    public NodeController(NodeService service) {
        super(service);
        this.nodeService = service;
        this.baseUrl = "/api/node";
    }

    @RequestMapping(value = "/project/{id}", method = RequestMethod.GET)
    public ResponseEntity getRecentProject(@PathVariable("id") Long userId) {
        return nodeService.getRecentProject(userId);
    }
    @RequestMapping(value = "/project", method = RequestMethod.GET)
    public Page<Node> getAllInformation(@RequestParam("userId") Long userId, Pageable pageable) {
        return nodeService.getList(userId, pageable);
    }
    @RequestMapping(value = "/share", method = RequestMethod.GET)
    public Page<Node> getProjectShare(@RequestParam("userId") Long userId, Pageable pageable) {
        return nodeService.getShare(userId,pageable);
    }

}

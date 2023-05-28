package rsa.sp.lgo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    @RequestMapping(value = "/project", method = RequestMethod.GET)
    public List<Node> getAll(@RequestParam("id") Long userId) {

        return nodeService.getNodeParent(userId);
    }


}

package rsa.sp.lgo.endpoints;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.model.Node;
import rsa.sp.lgo.service.NodeService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/node")
public class NodeEndpoint extends CrudApiEndpoint<Node, Long> {
    private static final Logger logger = LoggerFactory.getLogger(NodeEndpoint.class);

    private NodeService nodeService;
    public NodeEndpoint(NodeService service) {
        super(service);
        this.nodeService = service;
        this.baseUrl = "/api/node";
    }

//    @RequestMapping(value = "", method = RequestMethod.GET)
//    public List<Node> getAll(@RequestParam("id") Long userId) {
//
//        return nodeService.getNodeParent(userId);
//    }

//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public Optional<Node> getOne(@PathVariable("id") Long id) {
//
//        return nodeService.getOne(id);
//    }
//
//    @RequestMapping(value = "", method = RequestMethod.POST)
//    public Node create(@RequestBody Node node) {
//        return nodeService.create(node);
//    }
//    @RequestMapping(value = "", method = RequestMethod.PUT)
//    public Node update(@RequestBody Node node) {
//        return nodeService.update(node);
//    }

}

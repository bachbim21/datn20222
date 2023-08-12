package rsa.sp.lgo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.core.SecurityUtils;
import rsa.sp.lgo.core.utils.GeneralEntity;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.service.NodeService;
import rsa.sp.lgo.service.ZipService;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/api/node")
public class NodeController extends CrudApiEndpoint<Node, Long> {
    private static final Logger logger = LoggerFactory.getLogger(NodeController.class);

    private NodeService nodeService;
    @Autowired
    private ZipService zipService;
    public NodeController(NodeService service) {
        super(service);
        this.nodeService = service;
        this.baseUrl = "/api/node";
    }

    @RequestMapping(value = "/project/{id}", method = RequestMethod.GET)
    public ResponseEntity getRecentProject(@PathVariable("id") Long userId) {
        logger.info("Get project recent by {}", SecurityUtils.getCurrentUserLogin());
        return nodeService.getRecentProject(userId);
    }
    @RequestMapping(value = "/project", method = RequestMethod.GET)
    public Page<Node> getAllInformation(@RequestParam("userId") Long userId, Pageable pageable) {
        logger.info("Get list project by {}", SecurityUtils.getCurrentUserLogin());
        return nodeService.getList(userId, pageable);
    }
    @RequestMapping(value = "/share", method = RequestMethod.GET)
    public Page<Node> getProjectShare(@RequestParam("userId") Long userId, Pageable pageable) {
        logger.info("Get share project by {}", SecurityUtils.getCurrentUserLogin());
        return nodeService.getShare(userId,pageable);
    }
    @RequestMapping(value = "/create-zip/{id}", method = RequestMethod.GET)
    public GeneralEntity createZip(@PathVariable("id") Long id) throws IOException {
        logger.info("Create ZIP project by {}", SecurityUtils.getCurrentUserLogin());
        return zipService.exportDirectoryAsZip(id);
    }
    @RequestMapping(value = "/root/{id}" , method = RequestMethod.GET)
    public ResponseEntity getRootNode(@PathVariable("id") Long id) {
        logger.info("Get root node by {}", SecurityUtils.getCurrentUserLogin());
        return nodeService.getInforRootNode(id);
    }
    @RequestMapping(value="/file/{id}", method = RequestMethod.GET)
    public GeneralEntity downFile(@PathVariable("id") Long id) {
        logger.info("Download file node by {}", SecurityUtils.getCurrentUserLogin());
        return zipService.DownloadFile(id);
    }
}

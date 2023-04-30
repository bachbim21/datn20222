package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.models.Tech;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.repository.ShareRepository;
import rsa.sp.lgo.repository.TechRepository;

import java.util.HashSet;
import java.util.List;


@Service
public class NodeService extends CrudService<Node, Long> {
    @Autowired
    private NodeRepository nodeRepository;
    @Autowired
    private TechRepository techRepository;
    @Autowired
    private ShareRepository shareRepository;
    @Autowired
    private ShareService shareService;

    public NodeService(NodeRepository repository){
        this.repository = this.nodeRepository = repository;
    }

    @Transactional
    public List<Node> getNodeParent(Long userId) {
        return nodeRepository.findAllByUserId(userId);
    }

    @Override
    protected void beforeCreate(Node node) {
        super.beforeCreate(node);
        Tech tech = techRepository.findByHtmlFrameWorkAndCssFrameWork(node.getTech().getHtmlFrameWork(), node.getTech().getCssFrameWork());
        node.getTech().setId(tech.getId());
    }

    @Override
    protected void afterCreate(Node created) {
        super.afterCreate(created);
        if(created.getParentId() == null) {
            Share share = new Share(Constants.PRIVATE_PROJECT, new HashSet<>(),created.getUser(), created);

            shareService.create(share);
        }
    }

}

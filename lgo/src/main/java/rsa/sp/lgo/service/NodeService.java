package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.model.Node;
import rsa.sp.lgo.repository.NodeRepository;

import java.util.List;


@Service
public class NodeService extends CrudService<Node, Long> {
    @Autowired
    private NodeRepository nodeRepository;

    public NodeService(NodeRepository repository){
        this.repository = this.nodeRepository = repository;
    }

    @Transactional
    public List<Node> getNodeParent(Long userId) {
        return nodeRepository.findAllByUserId(userId);
    }

}

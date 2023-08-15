package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.core.SecurityUtils;
import rsa.sp.lgo.core.error.BadRequestException;
import rsa.sp.lgo.core.error.InvalidTokenException;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.models.Tech;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.repository.ShareRepository;
import rsa.sp.lgo.repository.TechRepository;
import rsa.sp.lgo.repository.UserRepository;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


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
    private final UserRepository userRepository;

    public NodeService(NodeRepository repository,
                       UserRepository userRepository){
        this.repository = this.nodeRepository = repository;
        this.userRepository = userRepository;
    }
    private Boolean checkGetCustom(Long useId) {
        if(SecurityUtils.getCurrentUserId() != useId)  throw new InvalidTokenException("Token Invalid", "error","tokenInvalid");
        return true;
    }

    @Transactional
    public ResponseEntity getRecentProject(Long userId) {
        checkGetCustom(userId);
        return ResponseEntity.ok(nodeRepository.findAllByUserId(userId));
    }

    @Override
    protected void beforeCreate(Node node) {
        super.beforeCreate(node);
        if(nodeRepository.existsByNameAndUserAndParentId(node.getName(), node.getUser(), node.getParentId())) throw  new BadRequestException("Not Allow", "error","notAllow");
        if(node.getTech() != null) {
            Tech tech = techRepository.findByHtmlFrameWorkAndCssFrameWork(node.getTech().getHtmlFrameWork(), node.getTech().getCssFrameWork());
            node.getTech().setId(tech.getId());
        }
        node.setNumberIndex(0);
        node.setNumberChild(0);
        if(node.getParentId()==  null ||  node.getParentId()== 0) {
            node.setKeyTree("0");
        }else {
            Node parent = nodeRepository.findById(node.getParentId()).get();
            String key = parent.getKeyTree() + "-" + (parent.getNumberIndex() + 1);
            node.setKeyTree(key);
        }
    }

    @Override
    protected void afterCreate(Node created) {
        super.afterCreate(created);
        if(created.getParentId() != 0) {
            Node parent = nodeRepository.findById(created.getParentId()).get();
            parent.setNumberIndex(parent.getNumberIndex() + 1);
            parent.setNumberChild(parent.getNumberChild() + 1);
            nodeRepository.save(parent);
        }
    }
    @Override
    protected void beforeUpdate(Node node) {
        if(node.getUser().getId() != SecurityUtils.getCurrentUserId()) throw new BadRequestException("Invalid Token","error","notHavePrivilege");
        if(!node.getFile()) {
            super.beforeUpdate(node);
            return;
        }
        Document doc = Jsoup.parse(node.getCode());
        Element container = doc.getElementById(Constants.ROOT_ID);
        String style = container.attr("style");
        String updatedStyle = updateStyleAttribute(style, "transform", "scale(1)");
        container.attr("style", updatedStyle);
        node.setCode(container.outerHtml());
        super.beforeUpdate(node);
    }
    public static String updateStyleAttribute(String style, String attributeName, String attributeValue) {
        StringBuilder sb = new StringBuilder();
        String[] attributes = style.split(";");

        boolean attributeUpdated = false;

        for (String attribute : attributes) {
            String trimmedAttribute = attribute.trim();

            if (trimmedAttribute.startsWith(attributeName + ":")) {
                sb.append(attributeName).append(":").append(attributeValue).append(";");
                attributeUpdated = true;
            } else {
                sb.append(trimmedAttribute).append(";");
            }
        }

        if (!attributeUpdated) {
            sb.append(attributeName).append(":").append(attributeValue).append(";");
        }

        return sb.toString();
    }

    @Override
    public Boolean checkGet(Node o) {
        Long userID = SecurityUtils.getCurrentUserId();
        if(o == null) return false;
        Share share = shareRepository.findByNode(o);
        if(userID != o.getUser().getId() && share !=null && !share.getListReceiverIds().contains(userID)) {
            return false;
        }
        return true;
    }


    @Override
    public ResponseEntity get(Long aLong) {
        Node node = simpleGet(aLong);
        if(node.getParentId()==0 && !checkGet(node)) throw new BadRequestException("Not Allow","error","notAllow");
        setReference(node);
        return super.get(aLong);
    }

    public void setReference(Node node){
        if(node.getNumberChild() > 0) {
            node.setChildren(nodeRepository.findAllByParentId(node.getId()));
            for (Node child: node.getChildren()) {
                get(child.getId());
            }
        }else node.setChildren(new ArrayList<>());
    }
    @Override
    public void beforeDelete(Node node) {
        if(node.getUser().getId() != SecurityUtils.getCurrentUserId()) throw new BadRequestException("invalidToken");
        if(node.getTech() != null) {
            Share share = shareService.simpleGet(node.getId());
            if(share != null) {
                shareService.deleteById(share.getId());
            }
        }
        /**
         *  Cập nhật lại number children của node cha
         */
        if(node.getParentId() == 0) {
            Node parent = simpleGet(node.getParentId());
            if(parent== null) return;
            parent.setNumberChild(parent.getNumberChild() - 1);
            beforeUpdate(parent);
            nodeRepository.save(parent);
        }
        deleteChild(node);
    }
    private void deleteChild(Node parent) {
        List<Node> children = nodeRepository.findAllByParentId(parent.getId());
        if(children.size() == 0) return;
        for (Node child: children) {
            if(child.getNumberChild() == 0) {
                nodeRepository.delete(child);
            }else  {
                deleteChild(child);
            }
        }
    }
    public Page<Node> getList(Long id, Pageable pageable) {
        User current = userRepository.findById(id).get();
        Page<Node> result = nodeRepository.findAllByParentIdAndUser(0L,current, pageable);
        for (Node item:  result) {
            setReference(item);
        }
        return result;
    }
    public Page<Node> getShare(Long id, Pageable pageable) {
        List<Share> shares = shareRepository.findAllByListReceiverContaining(id);
        Set<Long> nodeIds = shares.stream().map(Share::getNode).map(Node::getId).collect(Collectors.toSet());
        Page<Node> result = nodeRepository.findAllByIdIn(nodeIds, pageable);
        for (Node item:  result) {
            setReference(item);
        }
        return result;
    }
    public ResponseEntity getInforRootNode(Long id) {
        Node root = simpleGet(id);
        if(checkGet(root)) {
            return ResponseEntity.ok(root);
        }else {
            throw new BadRequestException("Not Allow","error","notAllow");
        }
    }
}

package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.core.SecurityUtils;
import rsa.sp.lgo.core.error.BadRequestException;
import rsa.sp.lgo.core.error.DuplicateFiledException;
import rsa.sp.lgo.core.utils.GeneralEntity;
import rsa.sp.lgo.core.utils.ZipUtils;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.models.Tech;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.repository.ShareRepository;
import rsa.sp.lgo.repository.TechRepository;
import rsa.sp.lgo.repository.UserRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashSet;
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
        if(SecurityUtils.getCurrentUserId() != useId) return false;
        return true;
    }

    @Transactional
    public ResponseEntity getRecentProject(Long userId) {
        if(!checkGetCustom(userId)) return ResponseEntity.badRequest().body("error.token");
        return ResponseEntity.ok(nodeRepository.findAllByUserId(userId));
    }

    @Override
    protected void beforeCreate(Node node) {
        super.beforeCreate(node);
        if(nodeRepository.existsByNameAndUserAndParentId(node.getName(), node.getUser(), node.getParentId())) throw new DuplicateFiledException("Tên đã tồn tại");
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
            super.update(parent.getId(),parent);
        }
    }
    @Override
    protected void beforeUpdate(Node node) {
        if(node.getUser().getId() != SecurityUtils.getCurrentUserId()) throw new BadRequestException("Not privileges");
        super.beforeUpdate(node);
    }

    @Override
    public Boolean checkGet(Node o) {
        Long userID = SecurityUtils.getCurrentUserId();
        if(userID != o.getUser().getId()) {
            return false;
        }
        return true;
    }


    @Override
    public ResponseEntity get(Long aLong) {
        Node node = simpleGet(aLong);
        setReference(node);
        return super.get(aLong);
    }

    private void setReference(Node node){
        if(node.getNumberChild() > 0) {
            node.setChildren(nodeRepository.findAllByParentId(node.getId()));
            for (Node child: node.getChildren()) {
                get(child.getId());
            }
        }else node.setChildren(new ArrayList<>());
    }
    @Override
    public void beforeDelete(Node node) {
        if(node.getUser().getId() != SecurityUtils.getCurrentUserId()) throw new BadRequestException("Not privileges");
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

    public GeneralEntity exportDirectoryAsZip(Node rootNode) throws IOException {
        if (rootNode == null) {
            return null;
        }
        String directoryName = "export/project/" + rootNode.getName() + System.currentTimeMillis();
        String zipFileName = directoryName + ".zip";
        String zipFilePath = System.getProperty("user.dir") + "/" + zipFileName;
        zipFilePath = zipFilePath.replaceAll("\\\\", "/");

        // Tạo thư mục tạm thời để chứa cây thư mục
        Path tempDirectory = Files.createTempDirectory("temp");

        // Tạo cây thư mục trong thư mục tạm thời
        createDirectoryStructure(rootNode, tempDirectory);

        // Di chuyển cây thư mục vào thư mục đích
        Path destinationDirectory = tempDirectory.resolve(directoryName);
        Files.move(tempDirectory, destinationDirectory);

        // Nén thư mục đích thành tệp tin zip
        ZipUtils.createZipFile(destinationDirectory, zipFilePath);

        return new GeneralEntity(zipFileName, zipFilePath);
    }

    private void createDirectoryStructure(Node node, Path parentDirectory) throws IOException {
        Path currentDirectory = Files.createDirectory(parentDirectory.resolve(node.getName()));

        for (Node child : node.getChildren()) {
            if (child.getFile()) {
                // Tạo tệp tin HTML
                Path filePath = currentDirectory.resolve(child.getName() + ".html");
                Files.write(filePath, child.getCode().getBytes());
            } else {
                // Đệ quy tạo thư mục cho các node con
                createDirectoryStructure(child, currentDirectory);
            }
        }
    }
}

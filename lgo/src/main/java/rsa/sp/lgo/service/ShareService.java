package rsa.sp.lgo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.repository.ShareRepository;
import rsa.sp.lgo.repository.UserRepository;
import rsa.sp.lgo.utils.StringUtils;

import java.util.Set;

@Service
public class ShareService extends CrudService<Share, Long> {
    private static Logger logger = LoggerFactory.getLogger(ShareService.class);
    @Autowired
    private ShareRepository shareRepository;
    @Autowired
    private NodeRepository nodeRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    public ShareService(ShareRepository repository,
                        UserRepository userRepository) {
        this.repository = this.shareRepository = repository;
        this.userRepository = userRepository;
    }
    public ResponseEntity createShare(Long userId, Long nodeId, Set<String> list) {
        User user = userService.simpleGet(userId);
        Node node = nodeRepository.findById(nodeId).get();
        Share share = shareRepository.findByUserAndNode(user, node);
        Set<Long> listId = userRepository.getListId(list);
        if(share == null) {
            share = new Share(Constants.PRIVATE_PROJECT, listId, user, node);
            super.afterCreate(share);
        }else {
            Set<Long> oldUserId = share.getListReceiverIds();
            oldUserId.addAll(listId);
            share.setListReceiverIds(oldUserId);
            super.update(share.getId(), share);
        }
        shareRepository.save(share);

        return ResponseEntity.ok(share);
    }
}

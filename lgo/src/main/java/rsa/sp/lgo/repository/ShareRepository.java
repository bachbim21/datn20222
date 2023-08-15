package rsa.sp.lgo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.models.User;

import java.util.List;
import java.util.Set;

@Repository
public interface ShareRepository extends CustomJpaRepository<Share, Long> {
    Share findByUserAndNode(User user, Node node);
    List<Share> findAllByListReceiverContaining(Long id);
    Share findByNode(Node node);
}

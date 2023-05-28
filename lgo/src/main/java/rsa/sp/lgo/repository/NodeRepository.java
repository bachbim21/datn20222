package rsa.sp.lgo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface NodeRepository extends CustomJpaRepository<Node, Long> {
    @Query(value = "SELECT * FROM nodes n WHERE n.user_id = ?1 AND n.parent_id = 0", nativeQuery = true)
    List<Node> findAllByUserId(Long id);
    Boolean existsByNameAndUserAndParentId(String name, User user, Long id);
    List<Node> findAllByParentId(Long id);
}

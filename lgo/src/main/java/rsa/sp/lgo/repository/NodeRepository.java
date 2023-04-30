package rsa.sp.lgo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Node;

import java.util.List;

@Repository
public interface NodeRepository extends CustomJpaRepository<Node, Long> {
    @Query(value = "SELECT * FROM nodes n WHERE n.user_id = ?1 AND n.parent_id IS NULL", nativeQuery = true)
    List<Node> findAllByUserId(Long id);

}

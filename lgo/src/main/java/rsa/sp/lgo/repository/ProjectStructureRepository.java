package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.model.Node;

@Repository
public interface ProjectStructureRepository extends CustomJpaRepository<Node, Long> {

}

package rsa.sp.lgo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.models.chart.Sql;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface NodeRepository extends CustomJpaRepository<Node, Long> {
    @Query(value = "SELECT * FROM nodes n WHERE n.user_id = ?1 AND n.parent_id = 0 order by updated desc limit 4", nativeQuery = true)
    List<Node> findAllByUserId(Long id);
    Page<Node> findAllByParentIdAndUser(Long parentId, User user, Pageable pageable);
    Boolean existsByNameAndUserAndParentId(String name, User user, Long id);
    List<Node> findAllByParentId(Long id);
    Page<Node> findAllByIdIn(Set<Long> ids, Pageable pageable);
    @Query(nativeQuery = true, value = Sql.CHART_NODE_PIE)
    Object  getPie();
    @Query(nativeQuery = true, value = Sql.CHART_NODE_BAR)
    BigDecimal getChartBar(@Param("first") Long first, @Param("last") Long last);
}

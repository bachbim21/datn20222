package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Tech;

@Repository
public interface TechRepository extends CustomJpaRepository<Tech, Long> {
    Tech findByHtmlFrameWorkAndCssFrameWork(String html, String css);
}

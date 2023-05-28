package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Css;

@Repository
public interface CssRepository extends CustomJpaRepository<Css, Long> {
}

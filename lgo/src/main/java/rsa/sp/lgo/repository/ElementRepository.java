package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Element;

import java.util.List;

@Repository
public interface ElementRepository extends CustomJpaRepository<Element, Long> {
    List<Element> findAllByActiveTrue();
}

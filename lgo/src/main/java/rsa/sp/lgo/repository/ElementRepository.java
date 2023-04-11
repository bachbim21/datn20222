package rsa.sp.lgo.repository;

import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.model.Element;

import java.util.List;

public interface ElementRepository extends CustomJpaRepository<Element, Long> {
    List<Element> findAllByActiveTrue();
}

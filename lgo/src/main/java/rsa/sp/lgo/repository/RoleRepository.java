package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Role;

import java.util.Optional;

@Repository
public interface RoleRepository extends CustomJpaRepository<Role, Long> {
  Optional<Role> findByName(String name);
}

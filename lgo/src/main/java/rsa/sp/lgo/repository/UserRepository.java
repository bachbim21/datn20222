package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.core.CustomJpaRepository;


@Repository
public interface UserRepository extends CustomJpaRepository<User, Long> {
    User findByEmail(String email);
    Boolean existsByEmail(String email);
    User findFirstByJwtToken(String token);
}

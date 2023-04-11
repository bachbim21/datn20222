package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.model.User;
import rsa.sp.lgo.core.CustomJpaRepository;

import java.util.Optional;

@Repository
public interface UserRepository extends CustomJpaRepository<User, Long> {
    User findByEmail(String email);
    Boolean existsByEmail(String email);
    User findFirstByJwtToken(String token);
}

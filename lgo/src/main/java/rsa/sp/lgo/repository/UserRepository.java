package rsa.sp.lgo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.core.CustomJpaRepository;

import java.util.List;
import java.util.Set;


@Repository
public interface UserRepository extends CustomJpaRepository<User, Long> {
    User findByEmail(String email);
    Boolean existsByEmail(String email);
    User findFirstByJwtToken(String token);
    @Query(nativeQuery = true, value = "SELECT id FROM users WHERE email IN :listEmails")
    Set<Long> getListId(@Param("listEmails") Set<String> listEmails);
    @Query(nativeQuery = true, value = "SELECT email FROM users WHERE id IN :ids")
    Set<String> getEmailByIds(@Param("ids") Set<Long> ids);
    User findByEmailAndForgotPasswordToken(String email, String token);
}

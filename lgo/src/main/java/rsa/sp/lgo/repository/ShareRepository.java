package rsa.sp.lgo.repository;

import org.springframework.stereotype.Repository;
import rsa.sp.lgo.core.CustomJpaRepository;
import rsa.sp.lgo.models.Share;

@Repository
public interface ShareRepository extends CustomJpaRepository<Share, Long> {

}

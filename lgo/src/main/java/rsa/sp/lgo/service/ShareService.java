package rsa.sp.lgo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.repository.ShareRepository;

@Service
public class ShareService extends CrudService<Share, Long> {
    private static Logger logger = LoggerFactory.getLogger(ShareService.class);
    @Autowired
    private ShareRepository shareRepository;

    public ShareService(ShareRepository repository) {
        this.repository = this.shareRepository = repository;
    }
}

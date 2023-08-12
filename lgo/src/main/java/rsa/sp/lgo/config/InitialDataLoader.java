package rsa.sp.lgo.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import rsa.sp.lgo.core.utils.Common;

import javax.transaction.Transactional;


@Component
public class InitialDataLoader implements
        ApplicationListener<ContextRefreshedEvent> {

    private static final Logger log = LoggerFactory.getLogger(InitialDataLoader.class);
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
        createDirectory();
    }

    private void createDirectory(){
        String resource =System.getProperty("user.dir");
        Common.createDirectory(resource +"/export/");
        Common.createDirectory(resource +"/export/project/");
        Common.createDirectory(resource +"/export/node/");
    }

}

//package rsa.sp.lgo.config;
//
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.env.Environment;
//
//import org.springframework.web.WebApplicationInitializer;
//import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
//import org.springframework.web.servlet.DispatcherServlet;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//
//import javax.servlet.ServletContext;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRegistration;
//import java.nio.file.Paths;
//
//@Configuration
//@EnableWebMvc
//public class WebConfigurer implements WebApplicationInitializer {
//
//    private final Logger log = LoggerFactory.getLogger(WebConfigurer.class);
//
//    private final Environment env;
//
//    public WebConfigurer(Environment env) {
//        this.env = env;
//    }
//
//    @Override
//    public void onStartup(ServletContext servletContext) throws ServletException {
//        if (env.getActiveProfiles().length != 0) {
//            log.info("Web application configuration, using profiles: {}", (Object[]) env.getActiveProfiles());
//        }
//        AnnotationConfigWebApplicationContext dispatcherContext = new AnnotationConfigWebApplicationContext();
//        dispatcherContext.register(WebMvcConfig.class);
//
//        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcher", new DispatcherServlet(dispatcherContext));
//        dispatcher.setLoadOnStartup(1);
//        dispatcher.addMapping("/");
//        log.info("Web application fully configured");
//    }
//
//    private String resolvePathPrefix() {
//        String fullExecutablePath = this.getClass().getResource("").getPath();
//        String rootPath = Paths.get(".").toUri().normalize().getPath();
//        String extractedPath = fullExecutablePath.replace(rootPath, "");
//        int extractionEndIndex = extractedPath.indexOf("target/");
//        if(extractionEndIndex <= 0) {
//            return "";
//        }
//        return extractedPath.substring(0, extractionEndIndex);
//    }
//
//
//}

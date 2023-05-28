package rsa.sp.lgo.core;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import rsa.sp.lgo.security.UserPrincipal;

public class SecurityUtils {

    public SecurityUtils() {
    }
    public static String getCurrentUserLogin() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String userName = null;
        if (authentication != null) {
            if (authentication.getPrincipal() instanceof UserDetails) {
                UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
                userName = springSecurityUser.getUsername();
            } else if (authentication.getPrincipal() instanceof String) {
                userName = (String) authentication.getPrincipal();
            }
        }
        return userName;
    }
    public static Long getCurrentUserId() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        Long id = null;
        if (authentication != null) {
            if (authentication.getPrincipal() instanceof UserPrincipal) {
                UserPrincipal springSecurityUser = (UserPrincipal) authentication.getPrincipal();
                id = springSecurityUser.getUserId();
            }
        }
        return id;
    }

}

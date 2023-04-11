package rsa.sp.lgo.security;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class UserPrincipal extends org.springframework.security.core.userdetails.User{
    private Long userId;

    public UserPrincipal(String email, String password, Collection<? extends GrantedAuthority> authorities, Long userId) {
        super(email, password, authorities);
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}

package rsa.sp.lgo.security.model;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class SignupRequest {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String name;

    private Set<String> roles;

    public SignupRequest() {
    }

    public SignupRequest(String email, String password, String name, Long birthDay, String avatar) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> role) {
        this.roles = roles;
    }
}

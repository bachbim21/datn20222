package rsa.sp.lgo.security.entity;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class SignupRequest {
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String name;
    private Long birthDay;
    private String avatar;

    private Set<String> roles;

    public SignupRequest() {
    }

    public SignupRequest(String email, String password, String name, Long birthDay, String avatar) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.birthDay = birthDay;
        this.avatar = avatar;
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

    public Long getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Long birthDay) {
        this.birthDay = birthDay;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> role) {
        this.roles = roles;
    }
}

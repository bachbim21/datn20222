package rsa.sp.lgo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import rsa.sp.lgo.core.IdEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User extends IdEntity {
    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private String name;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @Transient
    @JsonProperty
    private Set<String> authorities;
    @Size(min = 4, max = 255)
    @Column(length = 255, unique = true)
    private String email;
    private Long birthDay;
    private String avatar;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String jwtToken;
    @Column(name="forgot_password_token")
    private String forgotPasswordToken;
    @Column(name="forgot_password_token_created")
    private Long forgotPasswordTokenCreated;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_role", joinColumns = {
            @JoinColumn(name = "user_id")},inverseJoinColumns = {
            @JoinColumn(name = "role_id")}
            )
    private Set<Role> role;

    public User(String name, String email, Long birthDay, String avatar, String password) {
        this.name = name;
        setEncryptedPassword(password);
        this.email = email;
        this.birthDay = birthDay;
        this.avatar = avatar;
    }

    public User() {
        this.role = new HashSet<Role>();
        this.authorities = new HashSet<>();
    }
    public User(Long id,String name){
        this.setId(id);
        this.setName(name);
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getForgotPasswordToken() {
        return forgotPasswordToken;
    }

    public void setForgotPasswordToken(String forgotPasswordToken) {
        this.forgotPasswordToken = forgotPasswordToken;
    }

    public Long getForgotPasswordTokenCreated() {
        return forgotPasswordTokenCreated;
    }

    public void setForgotPasswordTokenCreated(Long forgotPasswordTokenCreated) {
        this.forgotPasswordTokenCreated = forgotPasswordTokenCreated;
    }

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }
    @JsonIgnore
    public void setEncryptedPassword(String password) {
        this.password = passwordEncoder.encode(password);
    }


    public Boolean authenticate(String password) {
        return passwordEncoder.matches(password,this.password);
    }
}

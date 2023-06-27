package rsa.sp.lgo.security.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JWTToken {
    private String token;

    public JWTToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

package rsa.sp.lgo.security.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.Constants;

import rsa.sp.lgo.core.error.BadRequestException;
import rsa.sp.lgo.models.Role;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
@Transactional
public class AuthService {
    private static Logger logger = LoggerFactory.getLogger(AuthService.class);
    @Autowired
    private UserRepository userRepository;
    private long tokenValidityInMilliseconds;
    private long tokenValidityInMillisecondsForRememberMe;

    public AuthService() {
        this.tokenValidityInMilliseconds = Constants.ONE_DAY;
        this.tokenValidityInMillisecondsForRememberMe = Constants.ONE_MONTH_30;
    }

    public String token(String email, String password, Boolean rememberMe) {
        logger.info("Generate token for user: {}", email);
        User user;
        user = authenticate(email, password);
        logger.info("Validate user", email);

        Date validity;
        long now = (new Date()).getTime();
        if (rememberMe) {
            validity = new Date(now + this.tokenValidityInMillisecondsForRememberMe);
        } else {
            validity = new Date(now + this.tokenValidityInMilliseconds);
        }

        String token = Jwts.builder()
                .setSubject(user.getEmail())
                .setExpiration(validity)
                .claim(Constants.JWT_SCOPE, getAuthorities(user))
                .claim(Constants.JWT_USER_ID, user.getId())
                .signWith(SignatureAlgorithm.HS512, Constants.JWT_SECRET)
                .compact();
        logger.info("Token generated for user {}, token: {}", email, token);

        //update jwtToken for user in database
        user.setJwtToken(token);
        userRepository.save(user);

        return token;
    }

    public List<String> getAuthorities(User user) {
        List<String> authorities = new ArrayList<>();
        for (Role role : user.getRole()) {
            authorities.add(role.getName());
        }
        return authorities;
    }

    public User authenticate(String email, String password) {
        User user = userRepository.findByEmail(email);
        logger.info("user :" + user);
        if (user == null) {
            throw new BadRequestException("User not found", "error", "emailNotFound");
        } else if (user.authenticate(password)) {
            throw new BadRequestException("Password not match", "error", "loginError");
        } else if (user != null && user.getActive() != null && user.getActive() && user.authenticate(password)) {
            return user;
        } else if (user.getActive() == null || !user.getActive()) {
            throw new BadRequestException("User not active", "error", "accountNotActive");
        }

        return user;
    }

    public String tokenResetPassword(User user) {
        logger.info("Generate token forget-password for user: {}", user.getEmail());
        Date validity;
        long now = (new Date()).getTime();
        validity = new Date(now + Constants.TIME_FORGET_PASSWORD);

        String token = Jwts.builder()
                .setSubject(user.getEmail())
                .setExpiration(validity)
                .claim(Constants.JWT_SCOPE, getAuthorities(user))
                .claim(Constants.JWT_USER_ID, user.getId())
                .signWith(SignatureAlgorithm.HS512, Constants.JWT_SECRET)
                .compact();
        logger.info("Token forget-password generated for user {}, token: {}", user.getEmail(), token);

        //update jwtToken for user in database
        user.setForgotPasswordToken(token);
        user.setForgotPasswordTokenCreated(now);
        userRepository.save(user);

        return token;
    }


}

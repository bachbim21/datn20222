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
import rsa.sp.lgo.service.UserService;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
@Transactional
public class AuthService {
    private static Logger logger = LoggerFactory.getLogger(AuthService.class);
    @Autowired
    private UserService userService;
    private long tokenValidityInMilliseconds;
    private long tokenValidityInMillisecondsForRememberMe;

    public AuthService(UserService userService) {
        this.userService = userService;
        this.tokenValidityInMilliseconds = Constants.ONE_DAY;
        this.tokenValidityInMillisecondsForRememberMe = Constants.ONE_MONTH_30;
    }
    public String token(String email, String password, Boolean rememberMe) {
        logger.info("Generate token for user: {}", email);
        User user = userService.authenticate(email, password);
        logger.info("Validate user", email);
        if(user == null) {
            throw new BadRequestException("User not found");
        }

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
                .claim(Constants.JWT_SCOPE,getAuthorities(user))
                .claim(Constants.JWT_USER_ID, user.getId())
                .signWith(SignatureAlgorithm.HS512, Constants.JWT_SECRET)
                .compact();
        logger.info("Token generated for user {}, token: {}", email, token);

        //update jwtToken for user in database
        user.setJwtToken(token);
        userService.simpleUpdate(user);

        return token;
    }
    public List<String> getAuthorities(User user) {
        List<String> authorities = new ArrayList<>();
        for(Role role : user.getRole()) {
            authorities.add(role.getName());
        }
        return authorities;
    }

}

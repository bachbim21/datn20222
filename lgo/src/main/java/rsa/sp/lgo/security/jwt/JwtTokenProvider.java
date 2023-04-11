package rsa.sp.lgo.security.jwt;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.model.Role;
import rsa.sp.lgo.model.User;
import rsa.sp.lgo.security.UserPrincipal;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class JwtTokenProvider {
    private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

//    public String generateToken(Authentication authentication) {
//        UserPrincipal userDetails = (UserPrincipal) authentication.getPrincipal();
//        Date now = new Date();
//        Date expiryDate = new Date(now.getTime() + Constants.ONE_DAY);
//        String token  =   Jwts.builder()
//                            .setSubject(userDetails.getUser().getEmail())
//                            .claim(Constants.JWT_SCOPE,getAuthorities(userDetails))
//                            .claim(Constants.JWT_USER_ID, userDetails.getUser().getId())
//                            .setIssuedAt(now)
//                            .setExpiration(expiryDate)
//                            .signWith(SignatureAlgorithm.HS256, Constants.JWT_SECRET)
//                            .compact();
//        return  token;
//    }

    public String getEmailFromJwt(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(Constants.JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String authToken) throws IOException {
        try {
            Jwts.parser().setSigningKey(Constants.JWT_SECRET).parseClaimsJws(authToken).getBody();;
            return true;
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.info("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        } catch (SignatureException ex) {
            logger.error("JWT signature does not match locally computed signature");
        }
        return false;
    }
}

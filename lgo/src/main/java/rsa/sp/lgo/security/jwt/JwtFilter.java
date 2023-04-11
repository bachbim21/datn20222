package rsa.sp.lgo.security.jwt;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.exceptions.BadRequestAlertException;
import rsa.sp.lgo.model.User;
import rsa.sp.lgo.repository.UserRepository;
import rsa.sp.lgo.security.UserPrincipal;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class JwtFilter extends GenericFilterBean {
    private static Logger logger = LoggerFactory.getLogger(JwtFilter.class);
    @Autowired
    private UserRepository userRepository;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest)servletRequest;
        String authorization = request.getHeader(Constants.AUTH_HEADER_STRING);
        if(authorization != null && authorization.startsWith(Constants.AUTH_TOKEN_PREFIX)) {
            String token = authorization.substring(Constants.AUTH_TOKEN_PREFIX.length());


            User user = userRepository.findFirstByJwtToken(token);
            if(user == null || user.getActive()== null || !user.getActive()){
                throw new BadRequestAlertException("Invalid JWT signature.", "auth", "Invalid JWT signature.");

            }

            if(validateToken(token)) {
                Authentication authentication = getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(servletRequest,servletResponse);
    }

    private Authentication getAuthentication(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(Constants.JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();
        List<String> roles = (ArrayList)claims.get(Constants.JWT_SCOPE);
        Integer id = (Integer) claims.get(Constants.JWT_USER_ID);
        Long userId = id.longValue();
        Set<GrantedAuthority> authorities = new HashSet<>();
        for(String role : roles) {
            authorities.add(new SimpleGrantedAuthority(role));
        }

        UserPrincipal principal = new UserPrincipal(claims.getSubject(), "", authorities,userId);

        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

    private boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(Constants.JWT_SECRET).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.info("Invalid JWT signature.");
            logger.trace("Invalid JWT signature trace: {}", e);
        } catch (MalformedJwtException e) {
            logger.info("Invalid JWT token.");
            logger.trace("Invalid JWT token trace: {}", e);
        } catch (ExpiredJwtException e) {
//            log.info("Expired JWT token.");
//            log.trace("Expired JWT token trace: {}", e);
        } catch (UnsupportedJwtException e) {
            logger.info("Unsupported JWT token.");
            logger.trace("Unsupported JWT token trace: {}", e);
        } catch (IllegalArgumentException e) {
            logger.info("JWT token compact of handler are invalid.");
            logger.trace("JWT token compact of handler are invalid trace: {}", e);
        }
        return false;
    }
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//        try {
//            String jwt = parseJwt(request);
//            if (jwt != null && tokenProvider.validateToken(jwt)) {
//                String email = tokenProvider.getEmailFromJwt(jwt);
//
//                UserDetails userDetails = userService.loadUserByUsername(email);
//                UsernamePasswordAuthenticationToken authentication =
//                        new UsernamePasswordAuthenticationToken(
//                                userDetails,
//                                null,
//                                userDetails.getAuthorities());
//                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//            }
//        } catch (Exception e) {
//            logger.error("Cannot set user authentication: {}", e);
//        }
//
//        filterChain.doFilter(request, response);
//    }


}
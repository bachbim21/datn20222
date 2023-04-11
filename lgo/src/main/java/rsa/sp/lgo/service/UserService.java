package rsa.sp.lgo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.exceptions.BadRequestAlertException;
import rsa.sp.lgo.exceptions.InvalidCredentialsException;
import rsa.sp.lgo.model.User;
import rsa.sp.lgo.repository.UserRepository;

@Service
public class UserService {
    private static Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    private UserRepository userRepository;

    public User authenticate(String email, String password) {
        User user;
        try {
            user = userRepository.findByEmail(email);
            logger.info("user :" + user);
            if (user != null && user.getActive() != null && user.getActive() && user.authenticate(password)) {
                return user;
            } else if (user.getActive() == null || !user.getActive()) {
                throw new BadRequestAlertException("Account inactive", "userAndPermission", "inactiveAccount");
            } else {
                user = null;
            }
        } catch (Exception ex) {
            user = null;
        }

        if(user == null) {
            throw new InvalidCredentialsException();
        }

        return user;


    }
    public void simpleUpdate(User user){
        userRepository.save(user);
    }
}

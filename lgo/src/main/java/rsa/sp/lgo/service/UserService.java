package rsa.sp.lgo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.Constants;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.core.SecurityUtils;
import rsa.sp.lgo.core.error.BadRequestException;
import rsa.sp.lgo.models.Role;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.models.User;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.repository.RoleRepository;
import rsa.sp.lgo.repository.ShareRepository;
import rsa.sp.lgo.repository.UserRepository;
import rsa.sp.lgo.security.jwt.JwtFilter;
import rsa.sp.lgo.security.model.JWTToken;
import rsa.sp.lgo.security.model.LoginRequest;
import rsa.sp.lgo.security.model.SignupRequest;
import rsa.sp.lgo.security.service.AuthService;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserService extends CrudService<User, Long> {
    private static Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShareRepository shareRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private NodeRepository nodeRepository;
    @Autowired
    private AuthService authService;
    private final MailService mailService;
    private final JwtFilter jwtFilter;

    public UserService(UserRepository repository, MailService mailService, JwtFilter jwtFilter) {
        this.repository = this.userRepository = repository;
        this.mailService = mailService;
        this.jwtFilter = jwtFilter;
    }

    @Override
    protected void beforeUpdate(User user) {
        if (SecurityUtils.getCurrentUserId().equals(user.getId()) || SecurityUtils.hasAnyAuthority(Constants.ROLE_ADMIN)) {
            super.beforeUpdate(user);
            User dataInDB = userRepository.findById(user.getId()).get();
            user.setPassword(dataInDB.getPassword());
        } else {
            throw new BadRequestException("InvalidToken");
        }
    }

    @Override
    protected Boolean checkGet(User user) {
        if (SecurityUtils.getCurrentUserId().equals(user.getId())) {
            return true;
        }
        return false;
    }

    public ResponseEntity login(LoginRequest login) {

        String token = this.authService.token(login.getEmail(), login.getPassword(), login.getRemember());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(Constants.AUTH_HEADER_STRING, "Bearer " + token);
        JWTToken jwtToken = new JWTToken(token);
        return new ResponseEntity(jwtToken, httpHeaders, HttpStatus.OK);

    }

    public ResponseEntity signup(SignupRequest signUpRequest) throws BadRequestException {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw  new BadRequestException("Email Already Use","error","emailAlreadyUse");
        }

        // Create new user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getEmail(),
                signUpRequest.getPassword());

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        logger.info(String.valueOf(strRoles));

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(Constants.ROLE_USER)
                    .orElseThrow(() -> new BadRequestException("Role Invalid","error","roleInvalid"));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case Constants.ROLE_ADMIN:
                        Role adminRole = roleRepository.findByName(Constants.ROLE_ADMIN)
                                .orElseThrow(() -> new BadRequestException("Role Invalid","error","roleInvalid"));
                        roles.add(adminRole);
                        break;
                    default:
                         throw new BadRequestException("Role Invalid","error","roleInvalid");
                }
            });
        }

        user.setRole(roles);
        create(user);
        return ResponseEntity.ok(null);
    }

    public Set<String> getShareUser(Long userId, Long nodeId) {
        Set<String> emails = new HashSet<>();
        Share share = shareRepository.findByUserAndNode(userRepository.findById(userId).get(), nodeRepository.findById(nodeId).get());
        if (share == null) return emails;
        Set<Long> receiverIds = share.getListReceiverIds();
        emails = userRepository.getEmailByIds(receiverIds);
        return emails;
    }

    public ResponseEntity forgetPassword(String email) throws MessagingException, UnsupportedEncodingException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new BadRequestException("Email not found","error","emailNotFound");
        }
        String token = authService.tokenResetPassword(user);
        mailService.sendEmail(email, token);
        return ResponseEntity.ok(null);
    }

    public ResponseEntity resetPassword(User user) {
        Boolean checkToken = jwtFilter.validateToken(user.getForgotPasswordToken());
        User current = userRepository.findByEmailAndForgotPasswordToken(user.getEmail(), user.getForgotPasswordToken());
        if (!checkToken || current == null) {
            throw new BadRequestException("Token is invalid","error","tokenInvalid");
        }
        current.setPassword(user.getPassword());
        current.setForgotPasswordToken(null);
        current.setForgotPasswordTokenCreated(null);
        update(current.getId(), current);
        return ResponseEntity.ok(null);
    }
    public ResponseEntity active(Long id, Boolean active) {
        if(SecurityUtils.hasAnyAuthority(Constants.ROLE_ADMIN)) {
            if(active) {
                activate(id);
                return ResponseEntity.ok(null);
            } else {
                deactivate(id);
                return ResponseEntity.ok(null);
            }
        }else {
            throw new BadRequestException("Not have privilege", "error", "notHavePrivilege");
        }
    }


}

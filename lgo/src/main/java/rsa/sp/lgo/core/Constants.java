package rsa.sp.lgo.core;

import org.springframework.beans.factory.annotation.Value;

public class Constants  {
    public final static String ROLE_USER = "USER";
    public final static String ROLE_ADMIN = "ADMIN";
    public static final String SPRING_PROFILE_DEVELOPMENT = "dev";
    public static final String SPRING_PROFILE_PRODUCTION = "prod";
    public static final String SYSTEM_ACCOUNT = "system";
    public static final String JWT_USER_ID = "user_id";
    public static final String AUTH_HEADER_STRING = "Authorization";
    public static final String AUTH_TOKEN_PREFIX = "Bearer ";
    public static final String JWT_SCOPE = "roles";
    public static final String JWT_SECRET = "secrethust";
    public static final Long ONE_DAY = 86400000L;
    public static final Long ONE_MONTH_30 = 86400000L * 30;


}

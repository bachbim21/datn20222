package rsa.sp.lgo.core;

import java.net.URI;

public class ErrorConstants {
    public static final String PROBLEM_BASE_URL = "http://localhost:3000/problem";
    public static final URI DEFAULT_TYPE = URI.create(PROBLEM_BASE_URL + "/problem-with-message");
    public static final URI INVALID_CREDENTIALS_TYPE = URI.create(PROBLEM_BASE_URL + "/invalid-credentials");
}

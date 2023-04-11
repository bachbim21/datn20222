package rsa.sp.lgo.exceptions;

import rsa.sp.lgo.core.ErrorConstants;

public class InvalidCredentialsException extends BadRequestAlertException {
    public InvalidCredentialsException() {
        super(ErrorConstants.INVALID_CREDENTIALS_TYPE,"Wrong email or password","login","invalidcredentials");

    }
}

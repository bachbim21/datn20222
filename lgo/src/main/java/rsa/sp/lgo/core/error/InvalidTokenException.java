package rsa.sp.lgo.core.error;

public class InvalidTokenException extends BadRequestException{
    public InvalidTokenException() {
        super("Token Invalid");
    }

    public InvalidTokenException(String message, String errorKey, String errorName) {
        super(message, errorKey, errorName);
    }
}
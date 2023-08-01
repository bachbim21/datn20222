package rsa.sp.lgo.core.error;

public class EmailAlreadyExitsException extends RuntimeException{
    public EmailAlreadyExitsException() {
        super("error.existsEmail");
    }
}

package rsa.sp.lgo.core.error;

public class EmailNotFoundException extends RuntimeException{

    public EmailNotFoundException() {
        super("error.notFoundEmail");

    }
}

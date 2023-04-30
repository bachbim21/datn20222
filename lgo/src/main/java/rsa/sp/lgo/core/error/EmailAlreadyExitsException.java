package rsa.sp.lgo.core.error;

public class EmailAlreadyExitsException extends BadRequestException{
    public EmailAlreadyExitsException() {
        super("Email đã được sử dụng");
    }
}

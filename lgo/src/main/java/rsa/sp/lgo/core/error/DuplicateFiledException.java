package rsa.sp.lgo.core.error;

public class DuplicateFiledException extends BadRequestException{
    public DuplicateFiledException(String defaultMessage) {
        super(defaultMessage);
    }
}

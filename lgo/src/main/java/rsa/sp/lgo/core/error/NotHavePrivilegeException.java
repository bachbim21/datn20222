package rsa.sp.lgo.core.error;

public class NotHavePrivilegeException extends BadRequestException {
    public NotHavePrivilegeException() {
        super("Not have privilege");
    }
}

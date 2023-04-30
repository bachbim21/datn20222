package rsa.sp.lgo.core.error;

public class WrongInfroException extends BadRequestException{
    public WrongInfroException() {
        super("Sai email hoặc mật khẩu");
    }
}

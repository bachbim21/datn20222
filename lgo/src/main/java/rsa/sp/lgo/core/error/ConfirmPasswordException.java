package rsa.sp.lgo.core.error;

public class ConfirmPasswordException extends BadRequestException{
    public ConfirmPasswordException() {
        super("Xác nhận mật khẩu sai");
    }
}

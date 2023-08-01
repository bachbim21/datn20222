package rsa.sp.lgo.core.error;

public class BadRequestException extends RuntimeException {
    private String errorKey;
    private String errorName;

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, String errorKey, String errorName) {
        super(message);
        this.errorKey = errorKey;
        this.errorName = errorName;
    }

    public String getErrorKey() {
        return errorKey;
    }

    public void setErrorKey(String errorKey) {
        this.errorKey = errorKey;
    }

    public String getErrorName() {
        return errorName;
    }

    public void setErrorName(String errorName) {
        this.errorName = errorName;
    }
}


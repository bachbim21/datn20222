package rsa.sp.lgo.core;

public class ResponseError {
    private String message;
    private int code;
    private String errorKey;
    private String errorName;

    public ResponseError() {
    }

    public ResponseError(String message, int code, String errorKey, String errorName) {
        this.message = message;
        this.code = code;
        this.errorKey = errorKey;
        this.errorName = errorName;
    }

    public ResponseError(String message, String errorKey, String errorName) {
        this.message = message;
        this.errorKey = errorKey;
        this.errorName = errorName;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

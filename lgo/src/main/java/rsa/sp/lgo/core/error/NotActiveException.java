package rsa.sp.lgo.core.error;

public class NotActiveException extends  RuntimeException{
    private final int errorCode;
    private final String title;

    public NotActiveException(String defaultMessage) {
        super(defaultMessage);
        this.title = Status.BAD_REQUEST.getMessage();
        this.errorCode = Status.BAD_REQUEST.getCode();
    }

    public int getErrorCode() {
        return errorCode;
    }
    public String getTitle() {
        return title;
    }
}


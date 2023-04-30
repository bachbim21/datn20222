package rsa.sp.lgo.core.error;

public class EmailNotFoundException extends RuntimeException{
    private final int errorCode;
    private final String title;

    public EmailNotFoundException(String defaultMessage) {
        super(defaultMessage);
        this.title = Status.NOT_FOUND.getMessage();
        this.errorCode = Status.NOT_FOUND.getCode();
    }

    public int getErrorCode() {
        return errorCode;
    }
    public String getTitle() {
        return title;
    }
}

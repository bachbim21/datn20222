package rsa.sp.lgo.core;

public class ResponseObject {
    private String messages;
    private int code;

    public ResponseObject(String messages, int code) {
        this.messages = messages;
        this.code = code;
    }

    public String getMessages() {
        return messages;
    }

    public void setMessages(String messages) {
        this.messages = messages;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}

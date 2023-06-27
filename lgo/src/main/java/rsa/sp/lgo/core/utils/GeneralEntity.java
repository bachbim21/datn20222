package rsa.sp.lgo.core.utils;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(
    ignoreUnknown = true
)
public class GeneralEntity {
    private String fileName;
    private String url;

    public GeneralEntity() {
    }

    public GeneralEntity(String fileName, String url) {
        this.fileName = fileName;
        this.url = url;
    }

    public String getFileName() {
        return this.fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
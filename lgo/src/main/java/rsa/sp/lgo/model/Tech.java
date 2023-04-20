package rsa.sp.lgo.model;

import rsa.sp.lgo.core.IdEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "techs")
public class Tech extends IdEntity {
    private String htmlFrameWork;
    private String cssFrameWork;

    public String getHtmlFrameWork() {
        return htmlFrameWork;
    }

    public void setHtmlFrameWork(String htmlFrameWork) {
        this.htmlFrameWork = htmlFrameWork;
    }

    public String getCssFrameWork() {
        return cssFrameWork;
    }

    public void setCssFrameWork(String cssFrameWork) {
        this.cssFrameWork = cssFrameWork;
    }
}

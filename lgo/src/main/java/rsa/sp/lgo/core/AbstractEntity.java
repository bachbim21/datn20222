package rsa.sp.lgo.core;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public class AbstractEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    private String  createdBy;
    private String updatedBy;
    private Long  created;
    private  Long  updated;
    private Boolean active;
    @Transient
    private static String PRIV_CREATE;
    @Transient
    private static String PRIV_VIEW;
    @Transient
    private static String PRIV_UPDATE;
    @Transient
    private static String PRIV_DELETE;

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Long getCreated() {
        return created;
    }

    public void setCreated(Long created) {
        this.created = created;
    }

    public Long getUpdated() {
        return updated;
    }

    public void setUpdated(Long updated) {
        this.updated = updated;
    }

    public static String getPrivCreate() {
        return PRIV_CREATE;
    }

    public static void setPrivCreate(String privCreate) {
        PRIV_CREATE = privCreate;
    }

    public static String getPrivView() {
        return PRIV_VIEW;
    }

    public static void setPrivView(String privView) {
        PRIV_VIEW = privView;
    }

    public static String getPrivUpdate() {
        return PRIV_UPDATE;
    }

    public static void setPrivUpdate(String privUpdate) {
        PRIV_UPDATE = privUpdate;
    }

    public static String getPrivDelete() {
        return PRIV_DELETE;
    }

    public static void setPrivDelete(String privDelete) {
        PRIV_DELETE = privDelete;
    }
}

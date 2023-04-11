package rsa.sp.lgo.model;

import rsa.sp.lgo.core.IdEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "nodes")
public class Node extends IdEntity {
    private Boolean isRoot;
    private Boolean isFolder;
    private String name;
    private String code;
    private Integer level;
    private Integer numberChild;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Boolean getRoot() {
        return isRoot;
    }

    public void setRoot(Boolean root) {
        isRoot = root;
    }

    public Boolean getFolder() {
        return isFolder;
    }



    public void setFolder(Boolean folder) {
        isFolder = folder;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getNumberChild() {
        return numberChild;
    }

    public void setNumberChild(Integer numberChild) {
        this.numberChild = numberChild;
    }
}

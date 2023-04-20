package rsa.sp.lgo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import rsa.sp.lgo.core.IdEntity;

import javax.persistence.*;

@Entity
@Table(name = "nodes")
public class Node extends IdEntity {
    private Boolean parentId;
    private Boolean folder;
    private String name;
    private String code;
    private Integer level;
    private Integer typeFile;

    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name="tech_id")
    private Tech tech;


    public Boolean getFolder() {
        return folder;
    }

    public void setFolder(Boolean folder) {
        this.folder = folder;
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

    public Boolean getParentId() {
        return parentId;
    }

    public void setParentId(Boolean parentId) {
        this.parentId = parentId;
    }

    public Integer getTypeFile() {
        return typeFile;
    }

    public void setTypeFile(Integer typeFile) {
        this.typeFile = typeFile;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tech getTech() {
        return tech;
    }

    public void setTech(Tech tech) {
        this.tech = tech;
    }
}

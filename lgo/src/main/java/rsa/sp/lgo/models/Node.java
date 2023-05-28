package rsa.sp.lgo.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import rsa.sp.lgo.core.IdEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "nodes")
public class Node extends IdEntity {
    private Long parentId;
    private Boolean file;
    private String name;
    private String code;
    private String keyTree;
    private Integer typeFile;
    private Integer numberIndex;
    private Integer numberChild;
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private List<Node> children;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name="tech_id")
    private Tech tech;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Boolean getFile() {
        return file;
    }

    public void setFile(Boolean file) {
        this.file = file;
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

    public String getKeyTree() {
        return keyTree;
    }

    public void setKeyTree(String keyTree) {
        this.keyTree = keyTree;
    }

    public Integer getTypeFile() {
        return typeFile;
    }

    public void setTypeFile(Integer typeFile) {
        this.typeFile = typeFile;
    }

    public Integer getNumberIndex() {
        return numberIndex;
    }

    public void setNumberIndex(Integer numberIndex) {
        this.numberIndex = numberIndex;
    }

    public Integer getNumberChild() {
        return numberChild;
    }

    public void setNumberChild(Integer numberChild) {
        this.numberChild = numberChild;
    }

    public List<Node> getChildren() {
        return children;
    }

    public void setChildren(List<Node> children) {
        this.children = children;
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

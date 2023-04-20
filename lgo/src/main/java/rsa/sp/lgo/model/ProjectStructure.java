package rsa.sp.lgo.model;

import rsa.sp.lgo.core.IdEntity;

import javax.persistence.*;

@Entity
@Table(name = "project_structure")
public class ProjectStructure extends IdEntity {
    private Long parentId;
    private Integer levelChildNode;
    private String path;
    @OneToOne
    @JoinColumn(name = "node_id")
    private Node node;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Integer getLevelChildNode() {
        return levelChildNode;
    }

    public void setLevelChildNode(Integer levelChildNode) {
        this.levelChildNode = levelChildNode;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Node getNode() {
        return node;
    }

    public void setNode(Node node) {
        this.node = node;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

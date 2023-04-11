package rsa.sp.lgo.model;

import rsa.sp.lgo.core.IdEntity;

import javax.persistence.*;

@Entity
@Table(name = "project_structure")
public class ProjectSructure extends IdEntity {
    private String typeFile;
    private Long child1Id;
    private Long child2Id;
    private Long child3Id;
    private Long child4Id;
    private Long child5Id;
    private Long child6Id;
    private Long child7Id;
    private Long child8Id;
    private Long child9Id;
    private Long child10Id;

    @OneToOne
    @JoinColumn(name = "node_id")
    private Node node;

    public String getTypeFile() {
        return typeFile;
    }

    public void setTypeFile(String typeFile) {
        this.typeFile = typeFile;
    }
    public Long getChild1Id() {
        return child1Id;
    }

    public void setChild1Id(Long child1Id) {
        this.child1Id = child1Id;
    }

    public Long getChild2Id() {
        return child2Id;
    }

    public void setChild2Id(Long child2Id) {
        this.child2Id = child2Id;
    }

    public Long getChild3Id() {
        return child3Id;
    }

    public void setChild3Id(Long child3Id) {
        this.child3Id = child3Id;
    }

    public Long getChild4Id() {
        return child4Id;
    }

    public void setChild4Id(Long child4Id) {
        this.child4Id = child4Id;
    }

    public Long getChild5Id() {
        return child5Id;
    }

    public void setChild5Id(Long child5Id) {
        this.child5Id = child5Id;
    }

    public Long getChild6Id() {
        return child6Id;
    }

    public void setChild6Id(Long child6Id) {
        this.child6Id = child6Id;
    }

    public Long getChild7Id() {
        return child7Id;
    }

    public void setChild7Id(Long child7Id) {
        this.child7Id = child7Id;
    }

    public Long getChild8Id() {
        return child8Id;
    }

    public void setChild8Id(Long child8Id) {
        this.child8Id = child8Id;
    }

    public Long getChild9Id() {
        return child9Id;
    }

    public void setChild9Id(Long child9Id) {
        this.child9Id = child9Id;
    }

    public Long getChild10Id() {
        return child10Id;
    }

    public void setChild10Id(Long child10Id) {
        this.child10Id = child10Id;
    }
}

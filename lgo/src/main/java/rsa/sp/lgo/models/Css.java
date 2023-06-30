package rsa.sp.lgo.models;

import rsa.sp.lgo.core.IdEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "css")
public class Css extends IdEntity {
    private String classCustom;
    private String name;
    private String library;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public String getClassCustom() {
        return classCustom;
    }

    public void setClassCustom(String classCustom) {
        this.classCustom = classCustom;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLibrary() {
        return library;
    }

    public void setLibrary(String library) {
        this.library = library;
    }

}

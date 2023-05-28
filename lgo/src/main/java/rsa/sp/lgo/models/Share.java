package rsa.sp.lgo.models;

import rsa.sp.lgo.core.IdEntity;
import rsa.sp.lgo.core.utils.SetConverter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "shares")
public class Share extends IdEntity {
    private Integer mode;
    @Convert(converter = SetConverter.class)
    private Set<Long> listReceiver = new HashSet<>();
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "project_id",referencedColumnName = "id")
    private Node node;

    public Share() {
    }

    public Share(Integer mode, Set<Long> listReceiver, User user, Node node) {
        this.mode = mode;
        this.listReceiver = listReceiver;
        this.user = user;
        this.node = node;
    }

    public Integer getMode() {
        return mode;
    }

    public void setMode(Integer mode) {
        this.mode = mode;
    }

    public Set<Long> getListReceiver() {
        return listReceiver;
    }

    public void setListReceiver(Set<Long> listReceiver) {
        this.listReceiver = listReceiver;
    }

}

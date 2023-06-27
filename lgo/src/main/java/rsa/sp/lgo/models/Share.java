package rsa.sp.lgo.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.util.StringUtils;
import rsa.sp.lgo.core.IdEntity;
import rsa.sp.lgo.core.utils.SetConverter;

import javax.persistence.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "shares")
public class Share extends IdEntity {
    private Integer mode;
    private String listReceiver ;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;
    @OneToOne
    @JoinColumn(name = "node_id",referencedColumnName = "id")
    private Node node;
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private Set<Long> listReceiverId = new HashSet<>();
    @Transient
    private ObjectMapper mapper = new ObjectMapper();
    public Share() {
    }

    public Share(Integer mode, Set<Long> listReceiver, User user, Node node) {
        this.mode = mode;
        this.user = user;
        this.node = node;
        setListReceiverIds(listReceiver);
    }

    public Integer getMode() {
        return mode;
    }

    public void setMode(Integer mode) {
        this.mode = mode;
    }

    public Set<Long> getListReceiverIds() {
        Set<Long> res = new HashSet<>();
        if(!StringUtils.isEmpty(this.listReceiver)) {
            try {
                TypeReference<Set<Long>> typeRef = new TypeReference<Set<Long>>() {
                };
                res = mapper.readValue(this.listReceiver,typeRef);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return res;
    }

    public void setListReceiverIds(Set<Long> listReceiverId) {
        if(listReceiverId == null || listReceiverId.size() ==0){
            this.listReceiver = "[]";
        }
        try {
            this.listReceiver = mapper.writeValueAsString(listReceiverId);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Node getNode() {
        return node;
    }

    public void setNode(Node node) {
        this.node = node;
    }
}

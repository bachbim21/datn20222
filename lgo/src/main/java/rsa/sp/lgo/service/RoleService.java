package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.repository.RoleRepository;
import rsa.sp.lgo.core.CrudService;
import rsa.sp.lgo.model.Role;

@Service
public class RoleService extends CrudService<Role, Long> {
    @Autowired
    private RoleRepository repository;
}

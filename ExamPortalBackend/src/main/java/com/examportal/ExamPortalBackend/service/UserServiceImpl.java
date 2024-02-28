package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.Role;
import com.examportal.ExamPortalBackend.entity.User;
import com.examportal.ExamPortalBackend.entity.UserRole;
import com.examportal.ExamPortalBackend.repository.RoleRepo;
import com.examportal.ExamPortalBackend.repository.UserRepo;
import com.examportal.ExamPortalBackend.repository.UserRoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserServiceI{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private UserRoleRepo userRoleRepo;
    @Override
    public User registerUser(User user, Set<UserRole> userRoles) {

        User username = this.userRepo.findByUserName(user.getUsername());

        if(username != null){
            throw new RuntimeException("User is already register");
        }

        //List<Role> roleList = this.roleRepo.findAll();

       // this.roleRepo.findByRoleName(userRoles.stream().map(a->a.getRole().getRoleName()).collect(Collectors.toList());

        userRoles.forEach(role->{
            Role roleName = this.roleRepo.findByRoleName(role.getRole().getRoleName());

            if(roleName==null){
                Role role1 = new Role();
                role1.setRoleName(role.getRole().getRoleName());
                this.roleRepo.save(role1);
            }
        });

        user.setUserRoles(userRoles);

        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        User save = this.userRepo.save(user);

        return save;
    }
}

package com.examportal.ExamPortalBackend.controller;

import com.examportal.ExamPortalBackend.entity.Role;
import com.examportal.ExamPortalBackend.entity.User;
import com.examportal.ExamPortalBackend.entity.UserRole;
import com.examportal.ExamPortalBackend.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/register")
    ResponseEntity<User> registerUser(@RequestBody User user){

        UserRole userRole = new UserRole();

        Role role = new Role();
        role.setRoleName("Normal");

        userRole.setUser(user);
        userRole.setRole(role);

        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(userRole);

        User user1 = this.userService.registerUser(user, userRoles);

        return new ResponseEntity<>(user1, HttpStatus.OK);

    }
}

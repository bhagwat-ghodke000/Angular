package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.User;
import com.examportal.ExamPortalBackend.entity.UserRole;

import java.util.Set;

public interface UserServiceI  {

    User registerUser(User user, Set<UserRole> userRoles);
}

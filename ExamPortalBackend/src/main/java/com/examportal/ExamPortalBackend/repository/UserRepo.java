package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {

    User findByUserName(String username);
}

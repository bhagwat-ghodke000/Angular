package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepo extends JpaRepository<UserRole,Long> {
}

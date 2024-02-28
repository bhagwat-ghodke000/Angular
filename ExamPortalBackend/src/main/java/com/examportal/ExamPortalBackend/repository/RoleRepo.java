package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role,Long> {

    Role findByRoleName(String roleName);
}

package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Long> {
}

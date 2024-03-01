package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.exam.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepo extends JpaRepository<Question,Long> {
}

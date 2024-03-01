package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepo extends JpaRepository<Quiz,Long> {
}

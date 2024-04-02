package com.examportal.ExamPortalBackend.repository;

import com.examportal.ExamPortalBackend.entity.exam.Category;
import com.examportal.ExamPortalBackend.entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepo extends JpaRepository<Quiz,Long> {

    public List<Quiz> findBycategory(Category category);

    public List<Quiz> findByActive(Boolean b);

    public List<Quiz> findByCategoryAndActive(Category c,Boolean b);
}

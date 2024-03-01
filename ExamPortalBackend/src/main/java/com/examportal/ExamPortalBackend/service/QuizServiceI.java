package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.exam.Quiz;

import java.util.List;
import java.util.Set;

public interface QuizServiceI {

    Quiz addQuiz(Quiz quiz);

    Quiz updateQuiz(Quiz quiz,long quizId);

    Quiz getQuiz(long quizId);

    List<Quiz> getAllQuiz();

    void deleteQuiz(long quizId);
}

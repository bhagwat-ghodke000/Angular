package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.exam.Question;

import java.util.List;
import java.util.Set;

public interface QuestionServiceI {

    Question addQuestion(Question question);

    Question updateQuestion(Question question,long QuestionId);

    Question getQuestion(long questionId);

    List<Question> getAllQuestion();

    void deleteQuestion(long questionId);
}

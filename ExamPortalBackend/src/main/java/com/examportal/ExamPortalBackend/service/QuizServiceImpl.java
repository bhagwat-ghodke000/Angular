package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.exam.Quiz;
import com.examportal.ExamPortalBackend.repository.QuizRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizServiceI{

    @Autowired
    private QuizRepo quizRepo;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        Quiz save = this.quizRepo.save(quiz);
        return save;
    }

    @Override
    public Quiz updateQuiz(Quiz quiz, long quizId) {

        Quiz quiz1 = this.quizRepo.findById(quizId).get();
        quiz1.setDescription(quiz.getDescription());
        quiz1.setCategory(quiz.getCategory());
        quiz1.setActive(quiz.isActive());
        quiz1.setQuestions(quiz.getQuestions());
        quiz1.setTitle(quiz.getTitle());
        quiz.setMaxMarks(quiz.getMaxMarks());
        quiz1.setNumberOfQuestion(quiz.getNumberOfQuestion());

        Quiz save = this.quizRepo.save(quiz1);
        return save;
    }

    @Override
    public Quiz getQuiz(long quizId) {

        Quiz quiz = this.quizRepo.findById(quizId).get();
        return quiz;
    }

    @Override
    public List<Quiz> getAllQuiz() {

        List<Quiz> all = this.quizRepo.findAll();
        return  all;
    }

    @Override
    public void deleteQuiz(long quizId) {

        this.quizRepo.deleteById(quizId);
    }
}

package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.exam.Question;
import com.examportal.ExamPortalBackend.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionServiceI {
    @Autowired
    private QuestionRepo questionRepo;
    @Override
    public Question addQuestion(Question question) {
        Question save = this.questionRepo.save(question);
        return save;
    }

    @Override
    public Question updateQuestion(Question question, long QuestionId) {

        Question question1 = this.questionRepo.findById(QuestionId).get();

        question1.setContent(question.getContent());
        question1.setImage(question.getImage());
        question1.setOption1(question.getOption1());
        question1.setOption2(question.getOption2());
        question1.setOption3(question.getOption3());
        question1.setOption4(question.getOption4());
        question1.setAnswer(question.getAnswer());
        question1.setQuiz(question.getQuiz());

        Question save = this.questionRepo.save(question1);
        return save;
    }

    @Override
    public Question getQuestion(long questionId) {

        Question question = this.questionRepo.findById(questionId).get();
        return question;
    }

    @Override
    public List<Question> getAllQuestion() {
        List<Question> all = this.questionRepo.findAll();

        return  all;
    }

    @Override
    public void deleteQuestion(long questionId) {

        Question question = this.questionRepo.findById(questionId).get();
        this.questionRepo.delete(question);
    }
}

package com.examportal.ExamPortalBackend.controller;

import com.examportal.ExamPortalBackend.entity.exam.Question;
import com.examportal.ExamPortalBackend.entity.exam.Quiz;
import com.examportal.ExamPortalBackend.service.QuestionServiceImpl;
import com.examportal.ExamPortalBackend.service.QuizServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionServiceImpl questionService;

    @Autowired
    private QuizServiceImpl quizService;

    @PostMapping("/")
    ResponseEntity<Question> addQuestion(@RequestBody Question question){
        Question question1 = this.questionService.addQuestion(question);
        return new ResponseEntity<>(question1, HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    ResponseEntity<Question> getQuestion(@PathVariable long questionId){
        Question question = this.questionService.getQuestion(questionId);
        return new ResponseEntity<>(question,HttpStatus.OK);
    }

    @GetMapping("/")
    ResponseEntity<List<Question>> getAllQuestion(){
        List<Question> allQuestion = this.questionService.getAllQuestion();
        return new ResponseEntity<>(allQuestion,HttpStatus.OK);
    }

    @PutMapping("/{questionId}")
    ResponseEntity<Question> updateQuestion(@RequestBody Question question,@PathVariable long questionId){
        Question question1 = this.questionService.updateQuestion(question, questionId);
        return new ResponseEntity<>(question1,HttpStatus.OK);
    }


    @DeleteMapping("/{questionId}")
    ResponseEntity<String> DreleteQuestion(@PathVariable long questionId){
        this.questionService.deleteQuestion(questionId);
        return new ResponseEntity<>("Question delete Successfully...",HttpStatus.OK);
    }

    @GetMapping("/quiz/{quizId}")
    ResponseEntity<?> getQuestionsOfQuiz(@PathVariable long quizId){

        Quiz quiz = this.quizService.getQuiz(quizId);
        Set<Question> questions = quiz.getQuestions();

        List list = new ArrayList(questions);

        if (list.size()>Integer.parseInt(quiz.getNumberOfQuestion())){

            list = list.subList(0,Integer.parseInt(quiz.getNumberOfQuestion()+1));

        }

        Collections.shuffle(list);

        return new ResponseEntity<>(list,HttpStatus.OK);
    }




}

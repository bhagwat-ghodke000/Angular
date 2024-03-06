package com.examportal.ExamPortalBackend.controller;

import com.examportal.ExamPortalBackend.entity.exam.Quiz;
import com.examportal.ExamPortalBackend.service.QuizServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizServiceImpl quizService;

    @PostMapping("/")
    ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz){

        Quiz quiz1 = this.quizService.addQuiz(quiz);
        return new ResponseEntity<>(quiz1, HttpStatus.OK);
    }

    @GetMapping("/{quizId}")
    ResponseEntity<Quiz> getQuiz(@PathVariable long quizId){
        Quiz quiz = this.quizService.getQuiz(quizId);
        return new ResponseEntity<>(quiz,HttpStatus.OK);
    }

    @GetMapping("/")
    ResponseEntity<List<Quiz>> getAllQuiz(){
        List<Quiz> allQuiz = this.quizService.getAllQuiz();
        return new ResponseEntity<>(allQuiz,HttpStatus.OK);
    }

    @PutMapping("/{quizId}")
    ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz,@PathVariable long quizId){
        Quiz quiz1 = this.quizService.updateQuiz(quiz, quizId);
        return new ResponseEntity<>(quiz1,HttpStatus.OK);
    }

    @DeleteMapping("/{quizId}")
    ResponseEntity<String> deleteQuiz(@PathVariable long quizId){

        this.quizService.deleteQuiz(quizId);
        return new ResponseEntity<>("This quiz is delete",HttpStatus.OK);
    }


}

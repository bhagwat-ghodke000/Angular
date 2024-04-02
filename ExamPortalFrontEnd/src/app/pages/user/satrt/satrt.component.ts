import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider'
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-satrt',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatButtonModule,MatFormFieldModule,FormsModule,HttpClientModule,MatCardModule,RouterModule,MatDividerModule],
  templateUrl: './satrt.component.html',
  styleUrl: './satrt.component.css'
})
export class SatrtComponent implements OnInit {

constructor(private locationSt:LocationStrategy,private route:ActivatedRoute,private questionService:QuestionService,private quizService:QuizService){}

quizId:any;

marksGot=0;
correctAnswer=0;
attempted=0;

quizzes=
  {
    quizId:12,
    title:"This is java releted question",
    description:"Java",
    maxMarks:"50",
    numberOfQuestion:"20",
    active:'',
  }

question=[
  {
    
  content:'',
  answer:'',
  image:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  givenAnswer:''

}
]

  ngOnInit(): void {
      
    this.preventBackButton();
    this.quizId = this.route.snapshot.params['quizId'];

    this.loadQuestion();

    this.loadQuiz();
  }

  preventBackButton(){

    history.pushState(null, '', location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null, '', location.href);
    })
  }

  loadQuestion(){

    this.questionService.getQuestionOfQuiz(this.quizId).subscribe(
      (data:any)=>{

        this.question = data;

        this.question.forEach((q)=>{
          q['givenAnswer']='';
        })

        console.log(this.question);
      },
      (error)=>{
        Swal.fire('Error','Error in loading quiz','error');
      }
    )
  }

  loadQuiz(){

    this.quizService.getquiz(this.quizId).subscribe(
      (data:any)=>{

        this.quizzes = data;

      },
      (error)=>{
        Swal.fire('Error !!','Error in loading data','error')
      }
    )
  }

}

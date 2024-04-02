import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { error, info } from 'console';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-view-quiz-question',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,RouterModule,MatButtonModule,MatDividerModule,FormsModule,HttpClientModule,MatCardModule,MatSlideToggleModule,MatSelectModule,CommonModule],
  templateUrl: './view-quiz-question.component.html',
  styleUrl: './view-quiz-question.component.css'
})
export class ViewQuizQuestionComponent implements OnInit {

  constructor(private route:ActivatedRoute,private questionService:QuestionService){}

  quizId:any;
  quizTiltle:any;

  questions = [
    {
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
      questionId:'',
    }
  ];

  ngOnInit(): void {
    
   this.quizId = this.route.snapshot.params['quizId'];
   this.quizTiltle = this.route.snapshot.params['title'];

   this.questionService.getQuestionOfQuiz(this.quizId).subscribe(
    (data:any)=>{

      console.log(data);

      this.questions = data;
    },
    (error)=>{
      console.log(error);
    }
   )
  }

  deleteQuestion(questionId:any){

    Swal.fire({

      icon:'info',
      showCancelButton:true,
      confirmButtonText: 'DELETE',
      title: 'Are you sure , want to DELETE this question ?'
    }).then((result)=>{

      if(result.isConfirmed){

        this.questionService.deleteQuestions(questionId).subscribe(
          (data:any)=>{

            Swal.fire('SUccess !','Question delete Successfully','success');

            this.questions = this.questions.filter((q)=>q.questionId != questionId);
          },
          (error)=>{
            Swal.fire('Error !','Error In question Delete','error');
          }
        )
      }
    })
  }



}

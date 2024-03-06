import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-view-quizzes',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,RouterModule,FormsModule,HttpClientModule,MatCardModule,CommonModule],
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
    {
      qid:12,
      title:"This is java releted question",
      description:"Java",
      maxMarks:"50",
      numberOfQuestion:"20",
      active:'',
      category:{
        title:"Programing"
      }
    },
    {
      qid:12,
      title:"This is java releted question",
      description:"Java",
      maxMarks:"80",
      numberOfQuestion:"20",
      active:'',
      category:{
        title:"Basic QUestion.."
      }
    }
  ]

  constructor(private quiz:QuizService){}
  ngOnInit(): void {
    
    this.quiz.quizzes().subscribe(
      (data:any)=>{
          this.quizzes=data;
          console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !','Error loading in data','error');
      }
    )
  }



}

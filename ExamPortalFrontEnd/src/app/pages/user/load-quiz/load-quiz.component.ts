import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-load-quiz',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatFormFieldModule,RouterModule,MatButtonModule,FormsModule,HttpClientModule,MatCardModule],
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent implements OnInit {

  categoryId:any;
  quizzes=[
    {
      quizId:12,
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
      quizId:12,
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

    


  constructor(private route:ActivatedRoute,private quizService:QuizService){}

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      this.categoryId = params['categoryId'];

      if(this.categoryId==0){

        this.quizService.getactiveQuizz().subscribe(
          (data:any)=>{
             
            this.quizzes = data;
    
            console.log(this.quizzes);
          },
          (error)=>{
    
            Swal.fire('Error !!','Error in loading all quizz','error');
          }
        )
       }else{
    
        console.log("Load specific quizz");
        
        this.quizService.getactivequizsOfCategory(this.categoryId).subscribe(
          (data:any)=>{

            this.quizzes = data;
          },
          (error)=>{
            Swal.fire("Error !!",'Error in loading a specific quizz','error');
          }
        )
       }
    })
  
  //  this.categoryId = this.route.snapshot.params['categoryId'];
  //  console.log(this.categoryId);

  //  if(this.categoryId==0){

  //   this.quizService.quizzes().subscribe(
  //     (data:any)=>{
         
  //       this.quizzes = data;

  //       console.log(this.quizzes);
  //     },
  //     (error)=>{

  //       Swal.fire('Error !!','Error in loading all quizz','error');
  //     }
  //   )
  //  }else{

  //   console.log("Load specific quizz");
  //  }
  }

}

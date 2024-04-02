import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
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
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-update-quiz',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,CommonModule,MatButtonModule,HttpClientModule,FormsModule,MatCardModule,MatSlideToggleModule,MatSelectModule],
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit {

  constructor(private router:ActivatedRoute,private quizService:QuizService,private categoryService:CategoryService,private router1:Router){}

  qId=0;
  quiz: any;
  categories:any;
  ngOnInit(): void {
       
   this.qId = this.router.snapshot.params['quizId'];
  // alert(this.qId);

  this.quizService.getquiz(this.qId).subscribe(
    (data:any)=>{
      this.quiz = data;
      console.log(this.quiz);
    },
    (error)=>{

      console.log(error);

    }
  );

  this.categoryService.categories().subscribe(
    (data:any)=>{
      this.categories = data;
    },
    (error)=>{
      console.log(error);
    }
  );

  }

  public updateData(){

    this.quizService.updatequiz(this.quiz,this.qId).subscribe(
      (data:any)=>{
        Swal.fire('Success !!','Quiz Updated Successfully','success').then((e)=>{
          this.router1.navigate(['/admin/quizzes'])
        })
      },
      (error)=>{
        Swal.fire('Error !!','Error in updateing quiz','error');
        console.log(error);
      }
    )
  }

}

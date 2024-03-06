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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  standalone: true,
  imports: [MatInputModule,MatSelectModule,MatFormFieldModule,CommonModule,MatButtonModule,MatSlideToggleModule,FormsModule,HttpClientModule,MatCardModule],
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit {
 

  categories=[
    {
      categoryId:'',
      title:'',
      description:''

    },
  ]

  quizdata={

    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    category:{
      categoryId:''
    }
  }

  constructor(private cat:CategoryService,private snack:MatSnackBar,private quizService:QuizService){}

  ngOnInit(): void {
    
    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{

        console.log(error);
        Swal.fire('Error!!','error in loading on data from server','error');
      }
    )
  }

  addQuiz(){

    console.log(this.quizdata);

    if(this.quizdata.title.trim()== '' || this.quizdata.title == null){

      this.snack.open("Title is required !!",'',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'right',
      });

      return;

  }

  if(this.quizdata.maxMarks.trim()== '' || this.quizdata.maxMarks == null){

    this.snack.open("Maximium marks is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
    });

    return;

}

if(this.quizdata.numberOfQuestion.trim()== '' || this.quizdata.numberOfQuestion == null){

  this.snack.open("number of question is required !!",'',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'right',
  });

  return;

}

 this.quizService.addQuiz(this.quizdata).subscribe(
  (data)=>{

    Swal.fire('Success !!','quiz is added','success');
    this.quizdata={

      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestion:'',
      active:true,
      category:{
        categoryId:''
      }
    };
  
  },
  (error)=>{
    Swal.fire('Error !!','Error while adding quiz','error');
    console.log(error);
  }
 )

 
  }

}

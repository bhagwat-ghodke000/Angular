import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import { QuestionService } from '../../../services/question.service';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-add-questions',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,CKEditorModule,MatSelectModule,CommonModule,MatButtonModule,FormsModule,HttpClientModule,MatCardModule],
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent implements OnInit {

 // public Editor = ClassicEditor;

  quizId:any;

  question={
    
      quiz:{
        quizId:'',
      },
      content:'',
      answer:'',
      image:'',
      option1:'',
      option2:'',
      option3:'',
      option4:''
    
  }

  constructor(private route:ActivatedRoute,private questionService:QuestionService,private snack:MatSnackBar){}
  ngOnInit(): void {
    
    this.quizId = this.route.snapshot.params['quizId'];
    this.question.quiz['quizId']=this.quizId;

  }

  foramSubmit(){



    if(this.question.content.trim()=='' || this.question.content==null){

      this.snack.open("Content is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;

    }

    if(this.question.option1.trim()=='' || this.question.option1==null){

      this.snack.open("Option1 is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;

    }

    if(this.question.option2.trim()=='' || this.question.option2==null){

      this.snack.open("option2 is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;

    }

    if(this.question.option3.trim()=='' || this.question.option3==null){

      this.snack.open("option3 is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;

    }

    if(this.question.answer.trim()=='' || this.question.answer==null){

      this.snack.open("Answer is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;

    }

    console.log(this.question);

    this.questionService.addQuestions(this.question).subscribe(
      (data:any)=>{
            
        Swal.fire('Success !!','Question added','success');

        this.question.content='';
        this.question.option1='';
        this.question.option2='';
        this.question.option3='';
        this.question.option4='';
        this.question.answer='';
      },
      (error)=>{
        Swal.fire('Error !!','Error in adding question','error');
      }
    )

  }

}

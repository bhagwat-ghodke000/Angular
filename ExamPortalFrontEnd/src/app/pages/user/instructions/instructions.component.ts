import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
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
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [CommonModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,HttpClientModule,MatCardModule,RouterModule],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private quizService:QuizService,private router:Router){}

  quizId:any;

  quizdata={

    title:'',
    description:'',
    maxMarks:0,
    numberOfQuestion: 0,
    active:true,
    category:{
      categoryId:''
    }
  }
  ngOnInit(): void {

    this.quizId = this.route.snapshot.params['quizId'];
    
    this.quizService.getquiz(this.quizId).subscribe(
      (data:any)=>{

        this.quizdata = data;
      },
      (error)=>{

        Swal.fire('Error !!','Error in load quiz ','error');
      }
    )
  }

  startQuiz(){

    Swal.fire({
      title: "Do you want to start the quizz?",
      showCancelButton: true,
      confirmButtonText: "Start",
      denyButtonText: `Don't save`,
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/'+this.quizId])
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    

  }

}

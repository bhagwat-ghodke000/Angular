import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,HttpClientModule,MatCardModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private categoryservice:CategoryService,private snack:MatSnackBar){}

  category={

    'title':'',
    'description':''

  };

  foramSubmit(){

    if(this.category.title.trim()=='' || this.category.title==null){

      this.snack.open("Title is required !!",'',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;

    }

    this.categoryservice.addCategory(this.category).subscribe(
      (data:any)=>{

        this.category.title='';
        this.category.description='';

           Swal.fire('Success !!','Category is added Successfuly','success');
      },
      (error)=>{

        console.log(error);
        Swal.fire('Error !!','Server Error','error');

      }
    )

  }

}

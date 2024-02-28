import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { NavebarComponent } from "../../components/navebar/navebar.component";

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
    imports: [MatInputModule, MatFormFieldModule,MatCardModule, MatButtonModule, FormsModule, HttpClientModule, NavebarComponent]
})
export class SignupComponent {

  constructor(private userService:UserServiceService,private snack:MatSnackBar){}

  public user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

  };

  formSubmit(){
    console.log(this.user);

    if(this.user.userName=='' || this.user.userName == null){

      //alert("User name is a required");

      this.snack.open('User name is required !!','',{
        duration:2000,
        verticalPosition:'top',
        horizontalPosition:'right',
      })
      return;
    }

    this.userService.addUser(this.user).subscribe(


      (data)=>{
        console.log(data);
       // alert("Success");
       Swal.fire('Success','User is Register Successfuly','success')
      },
      (error) =>{
        console.log(error);
        alert("Somthing Wrong..")
      }
    )
  }
}

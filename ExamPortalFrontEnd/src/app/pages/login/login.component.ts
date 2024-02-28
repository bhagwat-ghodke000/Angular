import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NavebarComponent } from '../../components/navebar/navebar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule, NavebarComponent]
})
export class LoginComponent {
    constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}

    loginData={

        username: '',
        password:'',
    };

    formSubmit(){

        
        console.log(this.loginData);

        if(this.loginData.username.trim()== '' || this.loginData.username == null){

            this.snack.open("User name is required !!",'',{
                duration:3000,
                verticalPosition:'top',
                horizontalPosition:'right',
            });

            return;

        }

        if(this.loginData.password.trim()== '' || this.loginData.password == null){

            this.snack.open("Password is required !!",'',{
                duration:3000,
                verticalPosition:'top',
                horizontalPosition:'right',
            });

            return;

        }

        this.login.generateToken(this.loginData).subscribe(
            (data:any)=>{

                console.log("Sucess");
                console.log(data);

                this.login.loginUser(data.jwtToken);

                this.login.getCurrentUser().subscribe(
                    (user:any)=>{

                        this.login.setUser(user);
                        console.log(user);

                        if(this.login.getUserRole() == 'ADMIN'){

                            window.location.href = '/admin';

                          //this.router.navigate(['admin']);
                          this.login.loginStatusSubject.next(true);

                        }else if(this.login.getUserRole() == 'NORMAL'){

                           window.location.href = '/user-dashboard';

                            //this.router.navigate(['user-dashboard']);
                            this.login.loginStatusSubject.next(true);

                        }else{

                            this.login.logout();
                           // location.reload();
                        }

                    }
                )
            },

            (error)=>{
                console.log("errer !!");
                console.log(error);

                this.snack.open('Invalid Creaditionals !! Please try agin','',{
                     
                    duration:3000,
                    verticalPosition:'top',
                    horizontalPosition:'right',

                });
            }
        );
    }

}

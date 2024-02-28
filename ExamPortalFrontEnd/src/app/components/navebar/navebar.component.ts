import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { 
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule
 } from "igniteui-angular";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navebar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,RouterLink,IgxIconModule,IgxNavbarModule,IgxButtonModule,CommonModule],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.css'
})
export class NavebarComponent implements OnInit {

isLoggedIn = false;
user :any={
  username:null
};

  constructor(public login:LoginService){}


  ngOnInit(): void {
    
    this.isLoggedIn = this.login.isLogedIn();
    this.user = this.login.getUser();

    // this.login.loginStatusSubject.asObservable().subscribe((data)=>{
    //   this.isLoggedIn = this.login.isLogedIn();
    //   this.user = this.login.getUser();
    // })
  }

  public logout(){

    this.login.logout();
    this.isLoggedIn = false;
    this.user = null;
    window.location.reload();
  }

}

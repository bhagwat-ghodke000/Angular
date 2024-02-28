import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginService } from '../../services/login.service';
import { log } from 'console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIconModule,MatCardModule,MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user :any={
    username:null
  };

  constructor(private login:LoginService){}

  ngOnInit(): void {
    
    this.user = this.login.getUser();
    console.log(this.user);
  }

}

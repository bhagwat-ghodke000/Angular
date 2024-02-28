import { Component } from '@angular/core';
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

@Component({
  selector: 'app-navebar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,RouterLink,IgxIconModule,IgxNavbarModule,IgxButtonModule],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.css'
})
export class NavebarComponent {

  constructor(public login:LoginService){}

  public logout(){

    this.login.logout();
    window.location.reload();
  }

}

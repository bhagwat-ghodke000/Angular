import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.login.isLogedIn() && this.login.getUserRole()=='ADMIN') {
      return true;
    } else {
      // Redirect the user to the login page and return false to prevent route activation
      this.router.navigate(['login']);
      return false;
    }
  }
}

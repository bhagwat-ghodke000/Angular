import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }


  public getCurrentUser(){

    return this.http.get(`${baseUrl}/current-user`)
  }

  public generateToken(loginData:any){

    return this.http.post(`${baseUrl}/generateToken`,loginData)
  }

  // Set token to local storage....

  public loginUser(token:any){

    localStorage.setItem('token',token);
    this.loginStatusSubject.next(true);
    return true;
  }

  // User is loged in or not....

  public isLogedIn(){

    let tokenStr = localStorage.getItem('token');

    if(tokenStr==undefined || tokenStr=='' || tokenStr == null){

      return false;
    }else{

      return true;
    }
  }


  // Logout: Remove the token from local Storage..

  public logout(){

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }



  // get Token function ....
  public getToken(){
       
    return localStorage.getItem("token");
  }

  // Set user Details in local storage...

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  // GetUser Details

  public getUser(){

    let userStr = localStorage.getItem("user");

    if(userStr != null){

      return JSON.parse(userStr);
    }else{

      this.logout();
      return null;
    }
  }

  // get User role ...

  public getUserRole(){

    let userRole = this.getUser();
    return userRole.authorities[0].authority;
  }
}

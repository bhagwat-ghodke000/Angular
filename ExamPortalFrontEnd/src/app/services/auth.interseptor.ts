import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");

        let authReq = req;
        const token= this.login.getToken();

        if(token !=null){

            console.log("Inside the Intercetor");
            console.log(`${token}`);
           authReq = authReq.clone({
            setHeaders:{ Authorization: `Bearer ${token}`},
           });
        }

        return next.handle(authReq);
    }

}


export const AuthInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];
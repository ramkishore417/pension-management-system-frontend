import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import { LoginService } from "../services/login/login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   
    constructor(private loginService:LoginService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.getToken()}`
        }
      });
      
      console.log("inside interceptor")
      return next.handle(request).pipe(retry(1),
         catchError((error:HttpErrorResponse)=>{              
              return throwError(console.error);
           })
     )           
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseUrl } from 'src/app/app.constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl=apiBaseUrl;

  constructor(private http:HttpClient) { }

  doLogin(login:any){
    return this.http.post(`${this.apiServerUrl}/token`,login)
  } 

  getPensionerList(){
    return this.http.get<[]>(`${this.apiServerUrl}/pensionerDetails`);
  }

  getTransactionList(){
    return this.http.get<[]>(`${this.apiServerUrl}/transactionDetails`);
  }
  
  loginUser(token:any,login:any){
    localStorage.setItem('token',token);
    localStorage.setItem('uname',login.username);
    return true;
  }

  loginUserName(){
    return localStorage.getItem('uname');
  }

  isLoggedIn(){
      let token=localStorage.getItem('token');
      if(token==undefined||token==''||token==null)
      {
        return false;
      }else{

        return true;
      }
  }

  logOut() {
    localStorage.removeItem('token')
    return true;
  }

  getToken() {
    return localStorage.getItem('token')
  }

}

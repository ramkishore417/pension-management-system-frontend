import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.login.username!='' && this.login.password!=''){
      
      console.log("Login request received");      
      this.loginService.doLogin(this.login).subscribe(
        (response:any)=>{
          this.loginService.loginUser(response.token, this.login)
          window.location.href="/pensionerList"
        },

        (error: HttpErrorResponse) =>{
           Swal.fire('Invalid!','Wrong username or password','error'); }        
      )
    } else {
      console.log("empty fields");
      Swal.fire('Empty Feilds!','Please Enter Credentials');
    }
  }

}

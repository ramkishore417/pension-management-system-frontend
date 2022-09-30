import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  username:any;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.username=this.loginService.loginUserName();
  }

  logoutUser()
  {
    this.loginService.logOut();
    this.ngOnInit();
    this.router.navigate(['/']);
  }
}

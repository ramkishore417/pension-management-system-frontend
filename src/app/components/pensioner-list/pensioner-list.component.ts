import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-pensioner-list',
  templateUrl: './pensioner-list.component.html',
  styleUrls: ['./pensioner-list.component.css']
})
export class PensionerListComponent implements OnInit {

  pensionerList=[{
    aadhaarNumber:"",
    name:"",
    dateOfBirth:"",
    pan:"",
    salaryEarned:null,
    allowances:null,
    pensionType:"",
  }];

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.getPensioner();
  }

  private getPensioner(){
    this.loginService.getPensionerList().subscribe(
      data=>{
        this.pensionerList=data;
        console.log(this.pensionerList);
      }
    );
  }

}

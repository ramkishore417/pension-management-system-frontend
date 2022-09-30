import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactionList=[{
    aadhaarNumber:"",
    transactionAmount:"",
    accountNumber:"",
    transactionTimestamp:"",
  }];

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.getTransaction();
  }

  private getTransaction(){
    this.loginService.getTransactionList().subscribe(
      data=>{
        this.transactionList=data;
        console.log(this.transactionList);
      }
    )
  }

}

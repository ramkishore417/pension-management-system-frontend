import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseUrl } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class PensionService {  
 
  constructor(private http:HttpClient) { }

  getPensionDetail(inputAadhaarNumber:any)
  {
    return this.http.post( `${apiBaseUrl}/pensionDetail`,inputAadhaarNumber);
  }

  processPension(pension:any)
  {
    const transactionDetail={
      aadhaarNumber:pension.pensionerDetail.aadhaarNumber,
      transactionAmount:pension.pensionAmount-pension.bankCharge,
      accountNumber:pension.pensionerDetail.bankDetail.accountNumber,
      transactionTimestamp:new Date()
  };
    return this.http.post(`${apiBaseUrl}/processPension`,transactionDetail);
  }
}

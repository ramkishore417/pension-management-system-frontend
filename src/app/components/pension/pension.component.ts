import { Component, OnInit } from '@angular/core';
import { PensionResponse } from 'src/app/PensionDetail';
import { PensionService } from 'src/app/services/pension/pension.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pension',
  templateUrl: './pension.component.html',
  styleUrls: ['./pension.component.css']
})
export class PensionComponent implements OnInit {

  inputAadhaarNumber={
    aadhaarNumber:""
  }
  result:any;

  pension:PensionResponse[]=[];

  constructor(private pensionService:PensionService) { }

  ngOnInit(): void {
  }

  processPension(){
    console.log("Processing Pension")
    this.pensionService.processPension(this.pension[0]).subscribe(
      complete=>{
        Swal.fire('Congratualtions!', 'Pension successfully sanctioned!', 'success');
      },
      error=>{
        Swal.fire('Error!', "Pension can't be sanctioned!", 'error');
      }
    );

  }

  onSubmit()
  {
    this.pensionService.getPensionDetail(this.inputAadhaarNumber).subscribe(
      (pensiondetail:any)=>
      {
        this.pension=[]
        this.pension.push(pensiondetail);
      },
      error=>
      {
        Swal.fire('Invalid!','Invalid Details','error');  
        console.log(this.inputAadhaarNumber);
        console.log(error);
      }
    );
  }
}

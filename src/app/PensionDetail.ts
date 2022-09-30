export class PensionerDetail{
    aadhaarNumber:any;
    name:any;
    dateOfBirth:any;
    pan:any;
    salaryEarned:any;
    allowances:any;
    pensionType:any;
    bankDetail:BankDetail | any;
}

export class BankDetail{
    bankName:any;
    accountNumber:any;
    bankType:any;
}

export class PensionResponse{
    pensionerDetail:PensionerDetail | any;
    pensionAmount:any;
    bankCharge:any;
}

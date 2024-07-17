export interface APIResponse {
  message: string;
  result: boolean;
  data: any;
}


export class Department {
  deptId: number;
  deptName: string;
  deptHeadEmpId: number;
  deptHeadName: string;
  createdDate: Date;
  constructor() {
    this.deptId = 0;
    this.deptName = '';
    this.deptHeadName = '';
    this.deptHeadEmpId = 0;
    this.createdDate = new Date();
  }
}


  export class LoginModel {
    password: string;
    emailId: string;
    constructor() {
      this.password = '';
      this.emailId = '';
    }
}
export class Users {
    emailId: string;
  data: any;
    constructor(){
      this.emailId = '';
    }
}


export class EmployeeModel{
  employeeId:string;
  employeeName:string;
  contactNo:number;
  emailId:string;
  deptId:number;
  password:string;
  gender:string;
  role:any;
  constructor(){
    this.employeeId = '';
    this.employeeName = '';
    this.contactNo = 0;
    this.emailId = '';
    this.deptId = 0;
    this.password = '';
    this.gender = '';
    this.role = '';
  }
}

import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APIResponse, LoginModel } from '../../core/Model/API.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: LoginModel;
  constructor(private http:HttpClient){

    this.loginObj = new LoginModel();
  }
  router = inject(Router);

  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Successfull");
        localStorage.setItem('TickestProject', res.data.token);
        this.router.navigateByUrl('/dashboard');
      }else{
        alert(res.message);
      }
    })
  }
}

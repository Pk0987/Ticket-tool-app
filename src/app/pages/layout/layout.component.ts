import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel, LoginModel, Users } from '../../core/Model/API.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl:'./layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  users = '';
  id:number = 1357;
  router = inject(Router);
  constructor(private http:HttpClient){
  }

  ngOnInit(): void {
    this.loadCustomerData(this.id);
  }

  onLogOff(){
    localStorage.removeItem('TickestProject');
    this.router.navigateByUrl('login');
  }
  loadCustomerData(id:number){
    this.http.get<Users>('https://freeapi.miniprojectideas.com/api/User/GetUserByUserId?userId='+id).subscribe((res:Users)=>{
      this.users = res.data.emailId;
  },error =>{
    alert("Error while fetching data");
  })
}
}

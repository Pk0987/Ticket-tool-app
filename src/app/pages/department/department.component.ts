import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { APIResponse, Department } from '../../core/Model/API.model';
import { MasterService } from '../../Services/master.service';
import { NaPipe } from "../../shared/pipe/na.pipe";
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, NaPipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

departments: Department[] = [];
  constructor() { }

  ngOnInit(): void {
      this.loadDepartments();
  }
  masterServ = inject(MasterService);
  employeeServ = inject(EmployeeService);


  loadDepartments(){
    this.masterServ.getAllDepts().subscribe((res:APIResponse)=>{
      this.departments = res.data;
    })
  }
  getAllEmployees(){
    this.employeeServ.getAllEmployee().subscribe((res:APIResponse)=>{
      this.departments = res.data;
    })
  }


  onEdit(){

  }
  onDelete(){

  }
}

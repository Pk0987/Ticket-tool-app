import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { APIResponse, LoginModel } from '../core/Model/API.model';
import { Constant } from '../core/constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  login(obj:LoginModel):Observable<APIResponse>{
    return this.http.post<APIResponse>('https://freeapi.miniprojectideas.com/api/User/' + Constant.API_END_POINT.LOGIN,obj);
  }

  getAllEmployee():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_EMPLOYEES);
  }
}

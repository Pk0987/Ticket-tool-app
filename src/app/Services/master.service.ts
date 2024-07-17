import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { APIResponse, Department } from '../core/Model/API.model';
import { Constant } from '../core/constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllDepts():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL+Constant.API_END_POINT.GET_DEPARTMENTS)
  }

  createDept(obj:Department):Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.API_URL+Constant.API_END_POINT.CRAETE_DEPARTMENTS, obj)
  }

  updateDept(obj:Department):Observable<APIResponse>{
    return this.http.put<APIResponse>(environment.API_URL+Constant.API_END_POINT.UPDATE_DEPARTMENTS, obj)
  }
  
  deleteDept(id:number):Observable<APIResponse>{
    return this.http.delete<APIResponse>(environment.API_URL+Constant.API_END_POINT.DELETE_DEPARTMENTS + id)
  }
}

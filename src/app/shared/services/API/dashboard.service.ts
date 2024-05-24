import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

const API_USERS_URL = `${environment.serverUrl}/Dashboard`;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  GetDashboard(UserId?:number,UserType?:string): Observable<any>{
    return this.http.get(`${API_USERS_URL}/GetDashboard?UserId=`+UserId +"&UserType="+UserType)
  }
  GetNotification(UserType?:string):Observable<any>{
 
    return this.http.get(`${API_USERS_URL}/GetAllUserNotify?UserTypeCode=`+UserType)
  }
  GetAllProjectNotify(CreatedBy?:string){
    debugger
    return this.http.get(`${API_USERS_URL}/GetAllProjectNotify?CreatedBy=`+CreatedBy)
  }
  ScheduleAssesmentApprove(id:number){
 return this.http.post(`${API_USERS_URL}/ScheduleAssesmentApprove?AssesmentId=`+id,'')
  }
  GetDashboardClientClick(CreatedBy?:string): Observable<any>{
    return this.http.get(`${API_USERS_URL}/GetDashboard_Client_Click?CreatedBy=`+CreatedBy)
  }
  GetClientDashboard(UserId?:number,UserType?:string): Observable<any>{
    return this.http.get(`${API_USERS_URL}/GetClientDashboard?UserId=`+UserId +"&UserType="+UserType)
  }
  GetTalentStatusList():Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetDashboard')
  }
}

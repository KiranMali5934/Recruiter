import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { M_UsersModel } from '../../model/user.model';

const API_USERS_URL = `${environment.serverUrl}/User`;
const API_USERS_URL_updated = `${environment.serverUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }
  GetAllUsers(UserType? : string,LoggedinUserId?:string): Observable<any> {
    return this.http.get(`${API_USERS_URL}/GetUserList?UserType=`+UserType+"&LoggedinUserId="+LoggedinUserId)
  }

  GetAgencyDetailsById(agencyid: number) {
    return this.http.get<any>(`${API_USERS_URL_updated}/Agency/GetAgencyDetailsByUserType?UserId=`+ agencyid);
  }
  GetClientDetailsById(clientid: number) {
    
    return this.http.get<any>(`${API_USERS_URL_updated}/Clients/GetclientDetailsByUserType?UserId=`+ clientid);
  }
  GetPartnerDetailsById(partnerid: number) {
    return this.http.get<any>(`${API_USERS_URL_updated}/Partners/GetPartnerDetailsByUserType?UserId=` + partnerid);
  }
  GetRecruiterDetailsById(recruiterid: number) {
    return this.http.get<any>(`${API_USERS_URL_updated}/Recruiters/GetRecruiterDetailsByUserType?UserId=` + recruiterid);
  }
  GetTalentDetailsById(talentid: number) {
    return this.http.get<any>(`${API_USERS_URL_updated}/Talent/GetTalentDetailsByUserType?UserId=` + talentid);
  }
  GetUserById(id: any) {
    debugger
    return this.http.get<any>(`${API_USERS_URL}` + '/GetUserById?UserId=' + id);
  }
  AddUpdateUser(request: any) {    
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateUser', request);
  }

  DeleteUser(id: number) {
    return this.http.delete(`${API_USERS_URL}/DeleteUser?UserId=${id}`);
  }
  ChangeStatus(request: M_UsersModel) {
    return this.http.post<any>(`${API_USERS_URL}` + '/ChangeStatus', request);
  }
  GetAllSubUsers(id:any): Observable<any>{
    debugger
    return this.http.get(`${API_USERS_URL}` + '/GetSubUserById?ParentUserId=' + id)
  }

  SubUserRegistration(request: any): Observable<any> {
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/SubUserRegistration', request);
  }

  UpdateSubUser(request: any): Observable<any> {
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/UpdateSubUser', request);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


const API_USERS_URL = `${environment.serverUrl}/Talent`;

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor(private http: HttpClient) { }

  GetAllTalent(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetTalentList')
  }
  GetTalentById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTalentById?TalentId=' + id);
  }
  AddUpdateTalent(model: any): Observable<any> {
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateTalent', model);
  }
  DeleteTalent(id: number) {
    return this.http.delete(`${API_USERS_URL}/DeleteTalent?TalentId=${id}`);
  }
  // ChangeStatus(request: M_TalentModel) {
  //   return this.http.post<any>(`${API_USERS_URL}` + '/ChangeStatus', request);
  // }
  AddUpdateRel_Project(model: any): Observable<any> {
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateRel_Project', model);
  }
  SearchTalent(request: any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/GetFilter', request);
  }
  GetClientTalentList(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetClientTalentList')
  }
  GetAllProjectByTalent(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetProjectByTalents?TalentId=' + id);
  }
  GetAllTalentByCreatedBy(CreatedBy?: string) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetAllTalentByCreatedBy?CreatedBy=' + CreatedBy);
  }
  GetTalentsJobByUserId(id?: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTalentsJobByUserId?UserId=' + id);
  }
  Dashboard_Talent_Click(UserId?: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/Dashboard_Talent_Click?UserId=' + UserId);
  }
  GetTalentRelationList(UserId?:number):Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetTalentRelationList?UserId=' + UserId);
  }
  GetTalentRelationDropdown(UserId?:number):Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetTalentRelationDropdown?UserId=' + UserId);
  }
  GetActiveTalentRelationList(UserId?:number):Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetActiveTalentRelationList?UserId=' + UserId);
  }
  GetTalentPenddingList(UserId?:number):Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetAppliedJobForClient?UserId=' + UserId);
  }
  GetTalentApproveJobByUserId(id?: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTalentApproveJobByUserId?UserId=' + id);
  }
  TalentApproveConfirmation(model: any): Observable<any> {
    return this.http.post(`${API_USERS_URL}/TalentApproveConfirmation`, model);
  }
  GetTalentByProjectId(Projectid:number){
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTalentByProjectId?ProjectId=' + Projectid);
  }

  // AddUpdateRel_Project(model: any): Observable<any> {
  //   return this.http.post<any>(`${API_USERS_URL}` + '/Talent/AddUpdateRel_Project', model);
  // }
}

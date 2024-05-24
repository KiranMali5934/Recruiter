import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

const API_USERS_URL = `${environment.serverUrl}/InterviewDetail`;
@Injectable({
  providedIn: 'root'
})
export class InterviewDetailsService {

 
  constructor(private http: HttpClient) { }
  GetInterviewDetailList(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetInterviewDetailList')
  }
  GetNewInterviewDetailForHr(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetNewInterviewDetailForHr')
  }

  GetInterviewDetailById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetInterviewDetailById?InterviewID=' + id);
  }
  AddUpdateInterviewDetail(request: any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateInterviewDetail', request);
  }
  //komal work start 12/02/2024
  GetInterviewDetailForClient(id: any) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetInterviewDetailForClient?UserId=' + id);
  }
  //komal work end 12/02/2024
  getAllInterviewDetailforTalent(talentId: number, userId: number, jobsId: number): Observable<any> {
    const apiUrl = `${API_USERS_URL}/GetAllInterviewDetailforTalent?TalentId=${talentId}&UserId=${userId}&JobsId=${jobsId}`;
    return this.http.get<any>(apiUrl);
  }

  //komal work start 13/02/2024
  GetHRConfirmInterviewListById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetHRConfirmInterviewList?UserId=' + id);
  }


  GetClientConfirmInterviewList(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetClientConfirmInterviewList?UserId=' + id);
  }

  ClientConfirmation(request: any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/ClientConfirmation', request);

  }
   //komal work end 13/02/2024

    //rahul work start 13/02/2024
  GetTalentConfirmInterviewListForHR(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetTalentConfirmInterviewListForHR')
  }
  GetHRConfirmInterviewList(): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetHRConfirmInterviewList')
  }
  HRConfirmation(model: any): Observable<any> {
    return this.http.post(`${API_USERS_URL}/HRConfirmation`, model);
  }
    //rahul work end 13/02/2024

  //komal work start 14/02/2024
  ClientTalentSelected(request: any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/ClientTalentSelected', request);}

  ClientTalentRejected(request: any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/ClientTalentRejected', request);}

  GetSelectedInterviewDetailForClient(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetSelectedInterviewDetailForClient?UserId=' + id);}

  GetRejectedInterviewDetailForClient(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetRejectedInterviewDetailForClient?UserId=' + id);}

  //komal work end 14/02/2024

  // NEHA CODE START 15-02-24
  ClientCancel(model :any){
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/ClientCancel', model);
  }
  TalentFinalSelection(model :any){
    return this.http.post<any>(`${API_USERS_URL}` + '/TalentFinalSelection', model);
  }
  TalentFinalReJection(model :any){
    return this.http.post<any>(`${API_USERS_URL}` + '/TalentFinalReJection', model);
  }

  ClientNotDecide(model :any){
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/ClientNotDecide', model);
  }
  // NEHA CODE END 15-02-24

  GetNewInterviewDetailForClient(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetNewInterviewDetailForClient?UserId=' + id);
  }
  
  GetTalentInterviewDetailChart(TalentId: number): Observable<any>{
    debugger
    return this.http.get(`${API_USERS_URL}` + '/GetTalentInterviewDetailChart?TalentId=' + TalentId)

  }
  
  GetTodayInterview(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetTodayInterview?TalentId=' + id);
  }
}

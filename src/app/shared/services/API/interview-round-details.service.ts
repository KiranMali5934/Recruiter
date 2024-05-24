import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
const API_USERS_URL = `${environment.serverUrl}/InterviewDetail`;
@Injectable({
  providedIn: 'root'
})
export class InterviewRoundDetailsService {

  
  constructor(private http: HttpClient) { }
    
  UpdateRescheduleInterviewDetail(model: any): Observable<any>{
    return this.http.post<any>(`${API_USERS_URL}` + '/UpdateRescheduleInterviewDetail',model)
  }
  AddUpdateInterviewDetail(model: any): Observable<any>{
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateInterviewDetail',model)
  }
  GetInterviewList(id: number): Observable<any> {
    return this.http.get(`${API_USERS_URL}` + '/GetInterviewDetailForTalent?TalentId=' + id)
  }

  TalentConfirmation(model: any): Observable<any>{
    return this.http.post<any>(`${API_USERS_URL}` + '/TalentConfirmation',model)
  }

  GetTalentConfirmInterviewList(TalentId: number): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetTalentConfirmInterviewList?TalentId=' + TalentId)
  }

}

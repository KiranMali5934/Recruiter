import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { InterviewRoundModel } from '../../model/role.model';
const API_USERS_URL = `${environment.serverUrl}/InterviewRound`;
const API_USERS_URL_update = `${environment.serverUrl}/InterviewRoundDropdown`;
@Injectable({
  providedIn: 'root'
})
export class InterviewRoundService {

 
  
  constructor(private http: HttpClient) { }
  GetInterviewRoundList(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetInterviewRoundList')
  }
  GetInterviewRoundById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetInterviewRoundById?interviewRoundId=' + id);
  }
  AddUpdateInterviewRound(request: InterviewRoundModel) {
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateInterviewRound', request);
  }
  DeleteInterviewRound(id: number) {
    return this.http.delete(`${API_USERS_URL}/DeleteInterviewRound?interviewRoundId=${id}`);
  }
  
  GetInterviewRoundDropdownList(): Observable<any>{
    return this.http.get(`${API_USERS_URL_update}/GetInterviewRoundDropdownList`)
  }
}

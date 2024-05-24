import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ExperienceModel } from '../../model/experience.model';

const API_USERS_URL = `${environment.serverUrl}/Experience`;

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }
  GetAllExperienceList(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetExperienceList')
  }
  GetExperienceById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetExperienceById?ExperienceId=' + id);
  }
  AddUpdateExperience(request: ExperienceModel) {
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateExperience', request);
  }
  DeleteExperience(id: number) {
    return this.http.delete(`${API_USERS_URL}/DeleteExperience?ExperienceId=${id}`);
  }
  ChangeStatus(request: ExperienceModel) {
    return this.http.post<any>(`${API_USERS_URL}` + '/ChangeStatus', request);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


const API_USERS_URL = `${environment.serverUrl}`;

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  GetProjectsJobsList(UserId:number): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/ProjectsJobs/GetProjectsJobsList?UserId='+UserId);
  }
  GetProjectsJobsById(JobsId:number): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/ProjectsJobs/GetProjectsJobsById?JobsId='+JobsId);
  }
  FilterByProjectJobs(request: any) {
    const params = new HttpParams({
      fromObject: request
    });
    return this.http.get<any>(`${API_USERS_URL}` + '/ProjectsJobs/FilterByProjectJobs',{ params});
  }
  GetAllCommonDDL(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/Common/GetCommonDDL')
  }
}

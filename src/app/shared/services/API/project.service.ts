import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


const API_USERS_URL = `${environment.serverUrl}/Projects`;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  GetAllProjects(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/GetProjectsList')
  }
  AddUpdateProjects(model:any):Observable<any>{
    debugger
    return this.http.post<any>(`${API_USERS_URL}` + '/AddUpdateProjects', model);
}
  GetProjectById(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetProjectsById?ProjectId=' + id);
  }
  DeleteProject(id: number) {
    return this.http.delete(`${API_USERS_URL}/DeleteProjects?ProjectId=${id}`);
  }
  ChangeStatus(request: any) {
    return this.http.post<any>(`${API_USERS_URL}` + '/ChangeStatus', request);
  }
  GetProjectList_ByUserType(CreatedBy?: string) {
debugger
    return this.http.get<any>(`${API_USERS_URL}` + '/GetProjectsByUser?UserId=' + CreatedBy);
  }
  GetProjectsByUser(Id?: number) {

    return this.http.get<any>(`${API_USERS_URL}` + '/GetProjectsByUser?UserId=' + Id);
  }
  addUpdateProjectJobs(model:any):Observable<any>{
    return this.http.post<any>(`${environment.serverUrl}`+'/ProjectsJobs/AddUpdateProjectsJobs',model)
  }
  GetAllProjectJobsList_ByUserType(CreatedBy?: string): Observable<any>{
    return this.http.get(`${environment.serverUrl}`+'/ProjectsJobs/GetJobsByCreatedBy?CreatedBy='+CreatedBy)
  }
  GetProjectJobById(id: number) {
    return this.http.get<any>(`${environment.serverUrl}` + '/ProjectsJobs/GetProjectsJobsById?JobsId=' + id);
  }
  DeleteProjectsJobs(id: number) {
    return this.http.delete(`${environment.serverUrl}/ProjectsJobs/DeleteProjectsJobs?JobsId=${id}`);
  }
  //komal work start 01/02/24
  GetProjectsJobsList(): Observable<any>{
    return this.http.get(`${API_USERS_URL}` + '/ProjectsJobs/GetProjectsJobsList');
  }
  //komal work end 01/02/24
  //ProjectsJobs/DeleteProjectsJobs?JobsId=
  //ProjectsJobs/GetProjectsJobsById?JobsId

  
}

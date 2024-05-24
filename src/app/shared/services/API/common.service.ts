import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

const API_USERS_URL = `${environment.serverUrl}/Common`;

const API_USERS_URL_updated = `${environment.serverUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  breadcrumbTitle = new BehaviorSubject('Initial Title');
  subBreadcrumbTitle = new BehaviorSubject<Array<any>>([]);
  navigationBreadcrumb= new BehaviorSubject('0');
  AdminCreatedBy : string = "";

  constructor(private http: HttpClient) {}

  GetCountryList(): Observable<any> {
    return this.http.get(`${API_USERS_URL}/GetCountryList`)
  }
  GetStateList(CountryId:number): Observable<any> {
    return this.http.get(`${API_USERS_URL}/GetStateList?CountryId=`+CountryId)
  }
  GetCityList(StateId:number): Observable<any> {
    return this.http.get(`${API_USERS_URL}/GetCityList?StateId=`+StateId)
  }
  GetUserTypeList(UserType?:string,CreatedBy?:string): Observable<any> {
    return this.http.get(`${API_USERS_URL}/GetUserTypeList?UserType=`+UserType+"&CreatedBy="+CreatedBy)
  }
  GetallDDLS(): Observable<any> {
    return this.http.get(`${API_USERS_URL}/GetCommonDDL`)
  }
  GetProjecyByUserId(id: number) {
    return this.http.get<any>(`${API_USERS_URL}` + '/GetProjectByUserId?UserId=' + id);
  }
  GetPaymentList(): Observable<any> {
    return this.http.get(`${API_USERS_URL_updated}/PaymentType/GetPaymentTypeList`)
  }



  createFormData(object: any, form?: FormData, namespace?: string): FormData {
    const formData = form || new FormData();
    for (let property in object) {
      if (!object.hasOwnProperty(property) || !object[property]) {
        continue;
      }
      const formKey = namespace ? `${namespace}[${property}]` : property;
      if (object[property] instanceof Date) {
        formData.append(formKey, object[property].toISOString());
      }
      else if (typeof object[property] === 'object' && !(object[property] instanceof File)) {
        this.createFormData(object[property], formData, formKey);
      }
      else {
        formData.append(formKey, object[property]);
      }
    }
    return formData;
  }

  SetBreadcrumb(title :any,subTitle:any,URL:string){
    this.breadcrumbTitle.next(title);
    this.subBreadcrumbTitle.next(subTitle);
    this.navigationBreadcrumb.next(URL);
  }


  GetAdminEmailForCreatedBy():any{
    return this.http.get(`${API_USERS_URL}/GetAdminEmailForCreatedBy`).subscribe((result:any) => {
      if (result.Data != null && result.Data.length > 0) {
        this.AdminCreatedBy = result.Data[0].Email  
        
      }
    });
  }
}
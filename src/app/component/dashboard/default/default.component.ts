import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/default/default-chart';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { DashboardService } from 'src/app/shared/services/API/dashboard.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit{
  public _credentials: Credentials | null = null;
  UserType: any;
  ussername:string='';
  latestjoblist:any;
  projectlist:any;
  interviewlist:any;

  public isopen:boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private credentialsService: CredentialsService,
    public router: Router,
  ) {
    this._credentials = credentialsService.credentials;
  }
ngOnInit(): void {
  this.GetDashboard();
}

public totalrevenuchart = chartData.revenueChart
public totalorderchart = chartData.TotalOrderChart
GetDashboard() {
  debugger
  let UserId = this._credentials?.UserId;
  let userTypeCode = this._credentials?.UserTypeCode;
  if (userTypeCode == 'Reruiter') {

    this.dashboardService.GetDashboard(UserId, userTypeCode).subscribe((result) => {
 
  
      if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            if (result.Data[0].dataTables.length > 0) {
              this.latestjoblist = (result.Data[0].dataTables[9] && result.Data[0].dataTables[9]);
            }
          }
        }
      }
      if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            if (result.Data[0].dataTables.length > 0) {
              this.interviewlist = (result.Data[0].dataTables[11] && result.Data[0].dataTables[11]);
            }
          }
        }
      } if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            if (result.Data[0].dataTables.length > 0) {
              this.projectlist = (result.Data[0].dataTables[12] && result.Data[0].dataTables[12]);
            }
          }
        }
      }
      
    })
  }

}
open(){
  this.isopen = !this.isopen
 }

 clickOutside():void { 
   this.isopen = false;
 }
}

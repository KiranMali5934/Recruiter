import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Credentials } from "src/app/shared/model/authentication.model";
import { CredentialsService } from "src/app/shared/services/API/credentials.service";
import { RecruiterService } from "src/app/shared/services/API/recruiter.service";
import { TalentService } from "src/app/shared/services/API/talent.service";
import { TimesheetService } from "src/app/shared/services/API/timesheet.service";
import * as XLSX from "xlsx";

@Component({
  selector: "app-talent-timesheet",
  // standalone: true,
  // imports: [],
  templateUrl: "./talent-timesheet.component.html",
  styleUrl: "./talent-timesheet.component.scss",
})
export class TalentTimesheetComponent {
  pagedData: any[] = [];
  pageSize: number = 5;
  currentPage: number = 1;
  page = 1;
  talenttimesheetList: any[] = [];
  selectedactivetalenttId: any = "";
  public _credentials: Credentials | null = null;
  filterlist: { UserId: number; UserName: string; }[];


  constructor(
    private timesheetService: TimesheetService,
    private credentialsService: CredentialsService,
    private router: Router,
    // private clientService: ClientServiceService,
    private modalService: NgbModal,
    private talentservice: TalentService,
    private recruiterservice: RecruiterService
  ) {
    this._credentials = credentialsService.credentials;
  }

  ngOnInit(): void {
    this.FilterList();
  }
  FilterList() {
    debugger
    let UserId: any = this._credentials?.UserId;
    this.talentservice.GetActiveTalentRelationList(UserId).subscribe((resp) => {
      this.filterlist = resp.Data;
    })
  }


  onactivetalentSelect(event: any) {
    debugger;
    this.selectedactivetalenttId = event.target.value;
    let UserId = this._credentials?.UserId;
    // this.clientService.GetTimesheetForClientactivetalent(UserId).subscribe((result: any) => {
    //   console.log(result.Data);
    //   if (this.selectedactivetalenttId) {
    //     this.agencyalltalentlist = result.Data.filter((project: any) => project.UserId === parseInt(this.selectedactivetalenttId));
    //   } else {
    //     this.agencyalltalentlist = result.Data;
    //   };
    // });
  }

  exportToExcel(): void {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const fileName = `TimeSheet-${formattedDate}.xlsx`;
    let dataToExport =
      this.talenttimesheetList &&
      this.talenttimesheetList.map((item) => ({
        Date: item.TimeSheetDate,
        "Project Name": item.ProjectName,
        "Task Name": item.TaskName,
        "Task Description": item.TaskDescription,
        "Task Status": item.TaskStatus,
        "Total Hours": item.TotalHours,
      }));
    if (dataToExport.length == 0) {
      dataToExport = [
        {
          Date: "",
          "Project Name": "",
          "Task Name": "",
          "Task Description": "",
          "Task Status": "",
          "Total Hours": "",
        },
      ];
    }
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
  }

  updatePage(){
    const startIndex = (this.currentPage -1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if(this.talenttimesheetList  && this.talenttimesheetList.length>0){
      this.pagedData = this.talenttimesheetList.slice(startIndex, endIndex); //(0,5)...(5,10)..(10,20)
    }
    this.pagedData = [];
  }
  changePageSize(pagesize:any){
this.pageSize =parseInt(pagesize.value)
  }
  pageChanged(page: number){
    this.currentPage = page;
    this.updatePage();
  }
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  getTotalPages(): number {
    if(this.talenttimesheetList && this.talenttimesheetList.length){
      return Math.ceil(this.talenttimesheetList.length / this.pageSize);
    }
    else{
      return 0;
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { ProjectModel } from 'src/app/shared/model/project.model';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { ProjectService } from 'src/app/shared/services/API/project.service';
import { environment } from 'src/environment/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-talent-projectlist',
  // standalone: true,
  // imports: [],
  templateUrl: './talent-projectlist.component.html',
  styleUrl: './talent-projectlist.component.scss'
})
export class TalentProjectlistComponent {

  userTypeDetailsModel = {
    ProjectId: 0,
  }
  kanabanManagementList:any[]=[]
  serverFilePath = environment.serverFilePath;
  public _credentials: Credentials | null = null;
  projectList: ProjectModel[] = [];
  ImagePath = environment.serverFilePath;
  projectmodal: ProjectModel;
  public href: string = '';
  UserType: string | undefined;
  pagedData: any[] = [];
  pageSize: number = 5; 
  currentPage: number = 1; 
  page=1;
  nameSearch:string=''
  constructor(
   private projectService: ProjectService,
    public router: Router,
    private credentialsService: CredentialsService,
    private modalService: NgbModal,
    // private kanbanManagementService :KanbanManagementService
  ) {
    this._credentials = credentialsService.credentials;
    this.UserType = credentialsService.credentials?.UserTypeCode;
  }

  ngOnInit(): void {
    debugger
    this.href = this.router.url;
    //  this.getKanbanManagementPage();
    this.GetAllProjectList();
  }
 
  PassValue(Projectid: number) {
    debugger
    this.projectService.GetProjectById(Projectid).subscribe((resp) => {
      this.userTypeDetailsModel = resp.Data;
      this.userTypeDetailsModel.ProjectId = Projectid;
      // const modalRef = this.modalService.open(ProjectlistPopupComponent , { size: 'xl' });
      // modalRef.componentInstance.DataOf = this.userTypeDetailsModel;
      // modalRef.result
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
    )
  };
  refreshData() {

    this.GetAllProjectList();
  }
  GetAllProjectList() {
    let UserId: any = this._credentials?.UserId;
    this.projectService.GetProjectsByUser(UserId).subscribe((resp) => {
      if (resp.Data !== null && resp.Data !== undefined) {
        this.projectList = resp.Data;
    this.updatePage();
      }  
    });
  }

  DeleteUser(Id: number) {
    Swal.fire({
      text: 'Are you sure want to remove?',
      icon: 'warning',
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-active-light',
      },
    }).then((result) => {
      if (result.value) {
        this.projectService.DeleteProject(Id).subscribe({
          next: (data: any) => {
            const msg = data.Message
            if (msg == "true") {
              Swal.fire(
                'Cannot Delete!!!',
                'You Cannot Delete the record because it is in use .'
              )
            } else {
              Swal.fire({
                html: 'Deleted successfully.',
                icon: 'success',
                buttonsStyling: false,
                confirmButtonText: 'Close',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
              })
              this.GetAllProjectList();
            }
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          text: 'Cancelled!.',
          icon: 'error',
          buttonsStyling: false,
          confirmButtonText: 'Ok, got it!',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
        });
      }
    });
  }
  navigateToJobs(Projectid: number) {
    debugger
    if (this.href.includes('recruiter')) {
      this.router.navigate(['/recruiter/addJobDetails']);
    } else if (this.href.includes('partner')) {
      this.router.navigate(['/partner/JobDetails/'  + Projectid]);
    } else if (this.href.includes('agency')) {
      this.router.navigate(['/agency/addJobDetails']);
    } else {
      this.router.navigate(['/client/proJobDetails/' + Projectid]);
    }
  }
  onValueChange(event: any, ISActive: any,Projectid:number) {

    const projectmodel={
            IsActive : event ,
            CreatedBy :this._credentials?.Email,
            ProjectId:Projectid
    }
    Swal.fire({
      text: 'Are you sure want change Status?',
      icon: 'warning',
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: 'Yes, change it!',
      cancelButtonText: 'No, keep it',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-active-light',
      },
    }).then((result) => {
      if (result.value) {
        this.projectService.ChangeStatus(projectmodel).subscribe({
          next: (data) => {
            Swal.fire({
              html: 'Status changed successfully.',
              icon: 'success',
              buttonsStyling: false,
              confirmButtonText: 'Close',
              customClass: {
                confirmButton: 'btn btn-primary',
              },
            })
            this.GetAllProjectList();
          },
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          text: 'Cancelled!.',
          icon: 'error',
          buttonsStyling: false,
          confirmButtonText: 'Ok, got it!',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
        });
        this.GetAllProjectList();
      }
    });
  }

  OpenProjectModel() {
    if (this.UserType === 'Partner') {
      this.router.navigate(['/partner/addproject']);
    }
    else if (this.UserType === 'Recruiter') {
      this.router.navigate(['/recruiter/addproject']);
    }
    else if (this.UserType === 'Client') {
      this.router.navigate(['/client/addProject']);
    }
    else if (this.UserType === 'Sub-User') {
      this.router.navigate(['/sub-user/addProject']);
    }
  }

  // navigateDetail(id: any) {
  //   let IsTrue = this.href.includes('recruiter');
  //   if (IsTrue === true) {
  //     this.router.navigate(['recruiter/project-Detail/' + id]);
  //   } else if (this.href.includes('partner')) {
  //     this.router.navigate(['/partner/project-Detail/' + id]);
  //   } else if (this.href.includes('talent')) {
  //     this.router.navigate(['/talent/project-Detail/' + id]);
  //   } else {
  //     this.router.navigate(['/client/project-Detail/' + id]);
  //   }
  // }

  EditnavigateDetail(id: any) {
    if (this.UserType === 'Partner') {
      this.router.navigate(['/partner/editproject/' + id]);
    }
    else if (this.UserType === 'Recruiter') {
      this.router.navigate(['/recruiter/editproject/' + id]);
    }
    else if (this.UserType === 'Client') {
      this.router.navigate(['/client/editProject/' + id]);
    }
    else if (this.UserType === 'Sub-User') {
      this.router.navigate(['/sub-user/editProject/' + id]);
    }
  }
  shortDescription(description: string, limit: number): string {
    if (description && description.length > limit) {
      return description.slice(0, limit) + '...';
    } else {
      return description;
    }
  }


Addkanan(ProjectId:number){
  debugger
  this.router.navigate(['/client/addKanban/' + ProjectId]);

}
viewKanban(ProjectId:number){
  this.router.navigate(['/client/kanbar/' + ProjectId]);

}
// getKanbanManagementPage(){
//   this.kanbanManagementService.GetKanbanManagementList().subscribe((res)=>{
// this.kanabanManagementList=res.Data;
//   })
// }
isProjectInKanbanList(projectid:number):boolean{
  return this.kanabanManagementList.some(project=> project.ProjectId == projectid);
}

updatePage() { 
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  if(this.projectList && this.projectList.length>0){
    this.pagedData = this.projectList.slice(startIndex, endIndex);
}
}

getPageNumbers(): number[] {
const totalPages = this.getTotalPages();
return Array.from({ length: totalPages }, (_, index) => index + 1);
}
getTotalPages(): number {
  if(this.projectList && this.projectList.length>0){
    return Math.ceil(this.projectList.length / this.pageSize);

  }
  else{
    return 0;
  }
}
onNameSearchChange(){
  this.pagedData = this.projectList.filter((item :any)=>
  item.ProjectName.toLowerCase().includes(this.nameSearch.toLowerCase())
);
}
changePageSize(pageSize: any) {
  this.pageSize = parseInt(pageSize.value);
  this.currentPage = 1
  this.updatePage();
}

pageChanged(page: number) {
  this.currentPage = page;
  this.updatePage();
}
}



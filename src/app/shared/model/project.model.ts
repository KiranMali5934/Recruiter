export class ProjectModel {
    ProjectId: number;
    ProjectName: string;
    ProjectDescription: string;
    IsActive: boolean;
    CreatedBy?: string;
    CreatedDate: string;
    TeamSizeId: 0;
    JobTitle: '';
    JobDescription: '';
    PrimaryRoleId: '';
    ExperienceId: '';
    SkillId: '';
    IndustryTypeId: '';
    ContractTypeId: '';
    ProjectDurationId: '';
    LocationId: '';
    HourlyRate: 0;
    BaseSalary: 0;
    Budget: number;
    //UploadFiles:File[]=[];
    //ProjectLogo: string;
    ProjectStartDate: string | null;
    ProjectEndDate: string | null;
    ClientName: string;
    FirstName: string;
    LastName: string;
    CreatedDateStr: string;
    StatusType: string;
    IsAdminApproved: boolean;
    LinkedinURL: string;
    ProjectLogo: string;
    _ProjectUploadFiles: File[] = [];
    _ProjectLogo: File[] = [];
    UploadFiles: string;
    InterviewID:number;
    Project_Type: String;
      Interview_Round_Detail: [{Interview_Dropdown_ID:'', Interview_Description: '' }]
  }
  
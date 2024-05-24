export enum Role {
    SuperAdmin = 'SuperAdmin',
    Admin = 'Admin',
    Client = 'Client',
    Talent = 'Talent',
    Partner = 'Partner',
    Recruiter = 'Recruiter',
    Agency = 'Agency',
    Subuser='Sub-User'
  }
  export class RoleModel{
    UserTypeID: number;
    UserTypeCode: string;
    UserTypeDescription: string;
    IsActive: boolean;
    CreatedBy?: string;
    CreatedDate: Date;
    CreatedDateStr: string;
  }
  export class M_CountryModel {
    CountryId: number;
    CountryShortName: string;
    CountryName: string;
    PhoneCode: number;
}

export class M_StateModel {
    StateId: number;
    StateName: string;
    CountryId: number;
}

export class M_CityModel {
    CityId: number;
    CityName: string;
    StateId: number;
}
export class PaymentTypeModel{
  PaymentTypeId:number;
  PaymentType:string;
  IsActive:boolean;
  CreatedBy ?:string;
  CreatedDate:string;
  ModifiedBy:string;
  ModifiedDate:string;
  CreatedDateStr:string;
} 
export class InterviewRoundModel{
  InterviewRoundId:number;
  InterviewRoundText:string
} 
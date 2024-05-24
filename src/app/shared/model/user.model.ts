export class M_UsersModel {
    UserId: number = 0;
    UserName: string;
    FirstName: string;
    LastName: string;
    Email: string;
    CompanyName: string;
    EmailConfirmed: boolean | null;
    PhoneNumber: any;
    Designation:string;
    PhoneNumberConfirmed: boolean | null;
    TwoFactorEnabled: boolean | null;
    LockoutEnabled: boolean | null;
    UserTypeId: number | null;
    UserTypeCode: string| undefined;
    Address1:string;
    Address2:string;
    CountryId: number;
    StateId : number;
    CityId:number;
    PostalCode:string;
    IsActive: boolean;
    CreatedBy?: string;
    CreatedDate: string;
    ModifiedBy: string | null;
    ModifiedDate: string | null;
    RefreshToken: string;
    TokenCreated: string | null;
    TokenExpires: string | null;
    NavigateToken: string;
    CreatedDateStr:string;
    CityName:string;
    StateName : string;
    CountryName:string;
    _UserProfilePicPath: File 
    UserProfilePicPath: File 
    ProfilePicPath:string| null;
    
    _ProfilePicPath:File;
    //Gender :string;
    Gender: boolean;
    DateOfBirth:string | null;
    AccountNumber:number;
    IFSCCode:string;
    AccountType: number=0; 
    PaymentOption : number=0;
    BeneficiaryName:string;
    BankName:string;
    BranchName:string;
    BankEmailId:string;
    PhoneCode:string;
    ProfileCompletedField:number
    Password:string;
    Swiftcode:string
}

export interface LoginContext {
    Email: string;
    Password: string;
    remember?: boolean;
  }
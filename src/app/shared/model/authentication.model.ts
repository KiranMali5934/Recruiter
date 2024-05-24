export interface LoginContext {
    Email: string;
    Password: string;
    remember?: boolean;
  }


  export interface Credentials {
    // Customize received credentials here
    //username: string;
    Token: string;
    Email: string;
    Success: boolean;
    Message: string;
    RefreshToken: string;
    TokenExpires: Date;
    UserId: number;
    UserName: string;
    FirstName: string;
    LastName: string;
    UserTypeCode: string;
    EmailConfirmed: boolean;
    IsActive : boolean;
    IsUserFound : boolean;
    ProfilePicPath : string;
    GlobalUserId:any;
    IsPasswordChange : boolean;
    NavigateToken : string;
  }
  
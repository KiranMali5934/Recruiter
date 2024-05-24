import { M_UsersModel } from "./user.model";

export class PartnerModel extends M_UsersModel
{
    PartnerId:number;
    PartnerName:string;
    ExperienceId:number;
    CV:string;
    ExperienceName:string;
    Swiftcode :string = "";
    TalentCV:File[]=[];
    

}
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs";
import { Credentials } from "src/app/shared/model/authentication.model";
import { CommonService } from "src/app/shared/services/API/common.service";
import { CredentialsService } from "src/app/shared/services/API/credentials.service";
import { RoleService } from "src/app/shared/services/API/role.service";
import { UserService } from "src/app/shared/services/API/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-talent",
  // standalone: true,
  // imports: [],
  templateUrl: "./add-talent.component.html",
  styleUrl: "./add-talent.component.scss",
})
export class AddTalentComponent {
  registrationForm: any;
  selectedRoleId: number = 0;
  show: any = false;
  showConfirmPassword: any;
  public isRoleSelected: boolean = false;
  isLoading = false;
  //version: string | null = environment.version;
  error: string | undefined;
  public _credentials: Credentials | null = null;
  CreatedBy: string | undefined;
  userid: number | undefined;
  UserTypeCode: string | undefined;
  UserTypeID: any;
  // roleList: any[] = [];
  ProjectTabs: any = 1;

  recruiterModel: any = {
    UserId: 0,
    ParentUserId: 0,

    CreatedBy: "",

    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Password: "",
    UserTypeCode: "",
    ConfirmPassword: "",
  };
  role: any;
  // RoleList: any;
  // subuser_list: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService,
    private commonService: CommonService,
    private userservice: UserService,
    private roleService: RoleService // private skillService: SkillService,
  ) {
    // this.GetAllJobTpes();
    //  this.createForm();
    if (this.route.snapshot.params["id"]) {
      this.recruiterModel.UserId = this.route.snapshot.params["id"];
    }
    if (
      this.recruiterModel.UserId !== 0 &&
      this.recruiterModel.UserId !== undefined
    ) {
      this.getEditData(this.recruiterModel.UserId);
    }

    this.commonService.GetAdminEmailForCreatedBy();
    this._credentials = this.credentialsService.credentials;
    this.UserTypeCode = this._credentials?.UserTypeCode;
    this.UserTypeID = this._credentials?.GlobalUserId;
  }

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
  private createForm() {
    // this.registrationForm = this.formBuilder.group(
    //   {
    //     FirstName: ['', Validators.required],
    //     LastName: ['', Validators.required],
    //     PhoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    //     Email: [
    //       '',
    //       Validators.compose([
    //         Validators.required,
    //         Validators.email,
    //         Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
    //         Validators.minLength(3),
    //         Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
    //       ]),
    //     ],
    //     Password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    //     ConfirmPassword: [
    //       '',
    //       Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    //     ],
    //     agree: [false, Validators.compose([Validators.required])],
    //     UserTypeCode: [this.UserTypeCode],
    //     UserTypeId: [this.UserTypeID],
    //   },
    //   {
    //     validator: ConfirmPasswordValidator.MatchPassword,
    //   }
    // );
  }
  togglePasswordVisibility() {
    this.show = !this.show;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submit(IsFormValid: any) {
    debugger;

    if (IsFormValid.invalid || IsFormValid == false) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all required field",
        icon: "error",
        confirmButtonText: "Okay",
      });
      // this.router.navigate(['/recruiter/recruiter-profile', { TabName : 'Settings' }]);
    } else {
      debugger;
      this.CreatedBy = this._credentials?.Email;
      this.recruiterModel.UserTypeCode = "Talent";
      this.recruiterModel.ParentUserId = this._credentials?.UserId;
      this.userservice.SubUserRegistration(this.recruiterModel).subscribe(
        (res: any | undefined) => {
          if (res) {
            // log.debug(`${res?.Email} - Subuser register successfully `);
            if (res.Success) {
              Swal.fire({
                html: res.Message,
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then((result) => {
                this.router.navigate(["/recruiter/all-talent-list"]);
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: res.Message,
                icon: "error",
                confirmButtonText: "Okay",
              });
            }
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "Okay",
            });
          }
        },
        (error) => {
          // log.debug(`register error: ${error}`);
          this.error = error;
        }
      );
    }
  }
  getEditData(value: any) {
    debugger;
    this.userservice.GetUserById(value).subscribe((respo) => {
      console.log(respo + "checkbox");
      this.recruiterModel = respo.Datas;
    });
  }

  UpdateSubUser(IsFormValid: any) {
    debugger;
    if (IsFormValid.invalid || IsFormValid == false) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all required field",
        icon: "error",
        confirmButtonText: "Okay",
      });
      // this.router.navigate(['/recruiter/recruiter-profile', { TabName : 'Settings' }]);
    } else {
      debugger;
      (this.CreatedBy = this._credentials?.Email),
        (this.recruiterModel.UserTypeCode = "Talent");
      this.recruiterModel.ParentUserId = this._credentials?.UserId;
      const RegisterSubUser$ = this.userservice
        .UpdateSubUser(this.recruiterModel)
        .subscribe(
          (res: any | undefined) => {
            if (res) {
              // log.debug(`${res?.Email} - client subuser Update successfully `);
              if (res.Success) {
                Swal.fire({
                  html: res.Message,
                  icon: "success",
                  buttonsStyling: false,
                  confirmButtonText: "Ok, got it!",
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then((result) => {
                  this.router.navigate(["/recruiter/all-talent-list"]);
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: res.Message,
                  icon: "error",
                  confirmButtonText: "Okay",
                });
              }
            } else {
              Swal.fire({
                title: "Error!",
                text: "Something went wrong",
                icon: "error",
                confirmButtonText: "Okay",
              });
            }
          },
          (error) => {
            // log.debug(`register error: ${error}`);
            this.error = error;
          }
        );
    }
  }
}

import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { finalize } from "rxjs";
import { Credentials } from "src/app/shared/model/authentication.model";
import { ExperienceModel } from "src/app/shared/model/experience.model";
import { RecruiterModel } from "src/app/shared/model/recruiter.model";
import {
  M_CountryModel,
  M_StateModel,
  M_CityModel,
} from "src/app/shared/model/role.model";
import { CommonService } from "src/app/shared/services/API/common.service";
import { CredentialsService } from "src/app/shared/services/API/credentials.service";
import { ExperienceService } from "src/app/shared/services/API/experience.service";
import { RecruiterService } from "src/app/shared/services/API/recruiter.service";
import { UpdateProfileService } from "src/app/shared/services/API/update-profile.service";
import { environment } from "src/environment/environment";
import Swal from "sweetalert2";

@Component({
  selector: "app-recruiter-profile",
  templateUrl: "./recruiter-profile.component.html",
  styleUrl: "./recruiter-profile.component.scss",
})
export class RecruiterProfileComponent {
  public _credentials: Credentials | null = null;
  serverFilePath = environment.serverFilePath;
  recruiterModel = new RecruiterModel();
  error: string | undefined;
  isLoading = false;

  public countryList: M_CountryModel[] = [];
  public stateList: M_StateModel[] = [];
  public cityList: M_CityModel[] = [];
  public totalExperienceYearList: ExperienceModel[] = [];
  public paymentOptionList: Array<any> = [];
  public accountTypeList: Array<any> = [];
  DisplayImage_ProfilePicPath: any;
  href: any;
  data: string;
  maxDate: string;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private recruiterService: RecruiterService,
    private commonService: CommonService,
    private updateService: UpdateProfileService,
    private credentialsService: CredentialsService,
    private experinceService: ExperienceService
  ) {
    this._credentials = this.credentialsService.credentials;
    this.recruiterModel = new RecruiterModel();
    const today = new Date();
    this.maxDate = today.toISOString().split("T")[0];
  }

  ngOnInit(): void {
    this.GetRecruiterById();
    this.GetCountryList();
    this.getTotalExperienceYearList();
    this.getAccountTypeList();
    this.getPaymentOptionList();
  }

  onChanageCountry(item: any) {
    this.GetStateList(item);
  }
  onChnageState(item: any) {
    this.GetCityList(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  GetCountryList() {
    this.commonService.GetCountryList().subscribe((result) => {
      if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            this.countryList = result.Data;
          }
        }
      }
    });
  }
  GetStateList(countryId: number) {
    this.commonService.GetStateList(countryId).subscribe((result) => {
      if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            this.stateList = result.Data;
          }
        }
      }
    });
  }
  GetCityList(stateId: number) {
    this.commonService.GetCityList(stateId).subscribe((result) => {
      if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            this.cityList = result.Data;
          }
        }
      }
    });
  }
  getTotalExperienceYearList() {
    this.experinceService.GetAllExperienceList().subscribe((result: any) => {
      if (result !== null && result !== undefined) {
        if (result.Data !== null && result.Data !== undefined) {
          if (result.Data.length > 0) {
            this.totalExperienceYearList = result.Data;
          }
        }
      }
    });
  }
  getPaymentOptionList() {
    this.paymentOptionList = [
      { item_id: 1, item_text: "Wire transfer" },
      { item_id: 2, item_text: "NEFT" },
      { item_id: 3, item_text: "Deel" },
    ];
  }
  getAccountTypeList() {
    this.accountTypeList = [
      { item_id: 1, item_text: "Current" },
      { item_id: 2, item_text: "Saving" },
    ];
  }
  onSelectProfilePicFile(event: any) {
    debugger;
    this.recruiterModel._UserProfilePicPath = <File>(
      event.target.files[0]
    );
    this.recruiterModel.ProfilePicPath = event.target.files[0].name;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.DisplayImage_ProfilePicPath = event.target.result;
      };
    }
  }
  onRemoveProfilePic() {
    debugger;
    this.recruiterModel.ProfilePicPath = null;
  }

  GetRecruiterById() {
    debugger;
    this.recruiterService
      .GetRecruiterById(this._credentials?.UserId)
      .subscribe((result) => {
        if (result !== null && result !== undefined) {
          if (result.Data !== null && result.Data !== undefined) {
            this.recruiterModel = result.Data;
            this.DisplayImage_ProfilePicPath =
              this.serverFilePath + (this.recruiterModel.ProfilePicPath || "");
          }
        }
        this.GetCountryList();
        this.GetStateList(this.recruiterModel.CountryId);
        this.GetCityList(this.recruiterModel.StateId);
      });
  }
  submit(IsFormValid: any) {
    debugger;
    // const errorMessages = [];

    // if (!this.selectedCountry || this.selectedCountry.length === 0) {
    //   errorMessages.push('Please select a Country');

    // }

    // if (!this.selectedState || this.selectedState.length === 0) {
    //   errorMessages.push('Please select a State');
    // }

    // if (!this.selectedCity || this.selectedCity.length === 0) {
    //   errorMessages.push('Please select a City');
    // }

    // if (errorMessages.length > 0) {
    //   Swal.fire({
    //     title: 'Error!',
    //     html: errorMessages.map(message => `<div>${message}</div>`).join(''),
    //     icon: 'error',
    //     confirmButtonText: 'Okay',
    //   });
    //   return;
    // }

    if (IsFormValid.invalid) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all required field",
        icon: "error",
        confirmButtonText: "Okay",
      });
      this.router.navigate(["/recruiter/recruiter-profile"]);
    } else {
      this.isLoading = true;
      this.recruiterModel.RecruiterId = this._credentials?.GlobalUserId;
      this.recruiterModel.UserId = this._credentials?.UserId
        ? this._credentials?.UserId
        : 0;
      this.recruiterModel.CreatedBy = this._credentials?.Email;
      this.recruiterModel.UserTypeCode = this._credentials?.UserTypeCode;
      this.recruiterModel.PhoneNumber = this.recruiterModel.PhoneNumber;
      let createFormData = this.commonService.createFormData(
        this.recruiterModel
      );
      createFormData.append(
        "_UpdateProfileProfilePicPath",
        this.recruiterModel._ProfilePicPath
      );
      const RegisterUser$ = this.updateService.UpdateProfile(createFormData);
      RegisterUser$.pipe(
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe(
        (res: any | undefined) => {
          if (res && res.Success) {
            Swal.fire({
              html: res.Message,
              icon: "success",
              confirmButtonText: "Ok, got it!",
            }).then((result) => {
              if (result.isConfirmed) {
                this.GetRecruiterById();
              }
            });
          } else {
            const errorMessage =
              res && res.Message ? res.Message : "An error occurred.";
            Swal.fire({
              title: "Error!",
              text: errorMessage,
              icon: "error",
              confirmButtonText: "Okay",
            });
          }
        },
        (error) => {
          console.error("Error updating profile:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while updating the profile.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      );
    }
  }

  Banksubmit(IsFormValid: any) {
    if (IsFormValid.invalid) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all required field",
        icon: "error",
        confirmButtonText: "Okay",
      });
      this.router.navigate(["/recruiter/recruiter-profile"]);
    } else {
      this.recruiterModel.CreatedBy = this._credentials?.Email;
      this.recruiterModel.ProfileCompletedField = 100;
      let createFormData = this.commonService.createFormData(
        this.recruiterModel
      );
      const RegisterUser$ = this.updateService.UpdateProfile(createFormData);
      RegisterUser$.pipe(
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe(
        (res: any | undefined) => {
          if (res) {
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
                if (result.isConfirmed) {
                  this.GetRecruiterById();
                }
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
          this.error = error;
        }
      );
    }
  }
}

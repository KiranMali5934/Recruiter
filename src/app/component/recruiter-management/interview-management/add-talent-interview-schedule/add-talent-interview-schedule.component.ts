import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject, finalize } from 'rxjs';
import Swal from 'sweetalert2';
import { AddInterviewScheduleCalenderModelComponent } from '../add-interview-schedule-calender-model/add-interview-schedule-calender-model.component';
import { InterviewSchedualDetailModalComponent } from '../interview-schedual-detail-modal/interview-schedual-detail-modal.component';
import { Credentials } from 'src/app/shared/model/authentication.model';
import { CommonService } from 'src/app/shared/services/API/common.service';
import { CredentialsService } from 'src/app/shared/services/API/credentials.service';
import { InterviewDetailsService } from 'src/app/shared/services/API/interview-details.service';
import { InterviewRoundDetailsService } from 'src/app/shared/services/API/interview-round-details.service';
import { InterviewRoundService } from 'src/app/shared/services/API/interview-round.service';
import { Logger } from 'src/app/shared/services/API/logger-service.service';
import { ProjectService } from 'src/app/shared/services/API/project.service';
import { TalentService } from 'src/app/shared/services/API/talent.service';
import { TimesheetService } from 'src/app/shared/services/API/timesheet.service';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { EventColor } from 'calendar-utils';
import { DatePipe } from '@angular/common';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#006666',
    secondary: '#FE6A49',
  },
  blue: {
    primary: '#FFAE1A',
    secondary: '#173878', 
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
const log = new Logger('Login');


@Component({
  selector: 'app-add-talent-interview-schedule',
  // standalone: true,
  // imports: [],
  templateUrl: './add-talent-interview-schedule.component.html',
  styleUrl: './add-talent-interview-schedule.component.scss'
})
export class AddTalentInterviewScheduleComponent {

   // maxView = 'year';
  // minuteStep = 5;
  // minView = 'minute';
  //selectedDate: Date;
  showCalendar = true;
  // startView = 'day';
  // views = ['minute', 'hour', 'day', 'month', 'year'];
  error: string | undefined;
  isLoading = false;
  agencyalltalentlist: any[] = [];
  aprovealltalentlist: any[] = [];
  public tempTlaentid: number = 0;
  //saveProjectModel=new ProjectModel()
  public Projectid: number;
  public Jobid: number;
  public ProjectIdandJobid: any;
  public _credentials: Credentials | null = null;
  result: any;
  interveiwroundlist: any;
  allEventArray :any=[];
  AllinterviewList: any;
  Rel_Tal_Pro_Id:number=0;
  NId:Number=0;

  timesheetmodel: any = {
    TalentId: 0,
    Rel_Tal_Pro_Id: 0,
    interviewID: 0,
    projectId: 0,
    jobsId: 0,
    userId: 0,
    InterviewLocation: '',
    JobTitle: '',
    ProjectName: '',
    Email: '',
    selectedDate: new Date,
    UserName: '',
    Interview_Date: '',
    Interview_Time: '', 
    Interviewer_Name: '',
    Interviewer_Contact_Number: '',
    Interviewer_Email: '',
    Interview_Round_Id: 0,
    RoundName: '',
    Interview_Description: '',
  }
  public view: CalendarView = CalendarView.Month;
  public CalendarView = CalendarView;
  public viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  refresh = new Subject<void>();
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { ...colors['yellow'] },
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors['blue'] },
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  //#region  Calender Code Kamlesh 
  calendarOptions: any;
  selectedTalentID :any;
 
  constructor(
    private interviewrounddetails: InterviewRoundDetailsService,
    public router: Router,
    private credentialsService: CredentialsService,
    private talentService: TalentService,
    private interviewraountdropdwon: InterviewRoundService,
    private talentservice: TalentService,
    private interviewDetailservice: InterviewDetailsService,
    private route: ActivatedRoute,private modalService: NgbModal

  ) {
    this._credentials = credentialsService.credentials;
    debugger
    this.route.params.subscribe(params => {
      this.timesheetmodel.TalentId = params['id']; 
    });
 
    this.route.queryParams.subscribe(params => {
      this.timesheetmodel.Rel_Tal_Pro_Id = params['relTalProId'];
    });
    
    this.route.queryParams.subscribe(params => {
      if(params['RoundId'] !==undefined && params['RoundId'] !==0){
      this.timesheetmodel.Interview_Round_Id = parseInt(params['RoundId'].toString());

      }
      else{
        this.timesheetmodel.Interview_Round_Id = 0;
      }
     // console.log(relTalProId);
    });
  }

  ngOnInit(): void {
    debugger
    this.getAllInterviewDetailsbyClientId();
    this.GetIntervewrounddropdwonList();
    this.GetTalentRelationList();
    this.GetTalentRelationDropdown();
    console.log("this.allEventArray",this.allEventArray)  
// Calender Function
    this.calendarOptions = {
      //plugins: [dayGridPlugin, interactionPlugin,timeGridPlugin],
      initialView: 'dayGridMonth', // Or 'dayGridWeek', 'dayGridDay'
      events: this.allEventArray,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridDay',
      },
      eventClick: this.handleEventClick.bind(this),
      dateClick: this.handleDayClick.bind(this), // Bind the function
      validRange: {
        start: new Date() // Today's date
      }
    };
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    debugger
    const clickedDate = date;
    const currentDate = new Date();
    const selectedDate = new Date(clickedDate);
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(clickedDate, 'yyyy-MM-ddTHH:mm:ss.SSS');
    const timePart = formattedDate?.split('T')[1];
    if (selectedDate.getTime() >= currentDate.setHours(0, 0, 0, 0)) {
      this.timesheetmodel.Interview_Date = formattedDate;
      const modalRef = this.modalService.open(AddInterviewScheduleCalenderModelComponent , { size: 'xl' });
      const dataof={
        TalentId:this.tempTlaentid !== 0 ?this.tempTlaentid:this.timesheetmodel.TalentId,
        JobsId:this.timesheetmodel.Jobid,
        ProjectId:this.timesheetmodel.Projectid,
        Rel_Tal_Pro_Id:this.timesheetmodel.Rel_Tal_Pro_Id,
        SelectedDate:formattedDate,
        SelectedTime:timePart,
        allDay:true
     }
      modalRef.componentInstance.DataOf = dataof;
      modalRef.result
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Use SweetAlert for a nicer notification
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date',
        text: 'You have selected a past date. If you want to schedule for a future date, please choose a date from today onwards.',
      });
    }


    // if (isSameMonth(date, this.viewDate)) {
    //   if (
    //     (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
    //     events.length === 0
    //   ) {
    //     this.activeDayIsOpen = false;
    //   } else {
    //     this.activeDayIsOpen = true;
    //   }
    //   this.viewDate = date;
    // }
  }
  handleTimeSlotSelected(startTime: Date, endTime: Date) {
    debugger
    const clickedDate = startTime;
    const currentDate = new Date();
    const selectedDate = new Date(clickedDate);
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(clickedDate, 'yyyy-MM-ddTHH:mm:ss.SSS');
    const timePart = formattedDate?.split('T')[1];
    if (selectedDate.getTime() >= currentDate.setHours(0, 0, 0, 0)) {
      //  this.timesheetmodel.Interview_Date = formattedDate;
        const modalRef = this.modalService.open(AddInterviewScheduleCalenderModelComponent , { size: 'xl' });
        const dataof={
          TalentId:this.tempTlaentid !== 0 ?this.tempTlaentid:this.timesheetmodel.TalentId,
          JobsId:this.timesheetmodel.Jobid,
          ProjectId:this.timesheetmodel.Projectid,
          Rel_Tal_Pro_Id:this.timesheetmodel.Rel_Tal_Pro_Id,
          SelectedDate:formattedDate,
          SelectedTime:timePart,
          allDay:false
        }
         modalRef.componentInstance.DataOf = dataof;
        modalRef.result
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Use SweetAlert for a nicer notification
        Swal.fire({
          icon: 'error',
          title: 'Invalid Date',
          text: 'You have selected a past date. If you want to fill timesheet , please start from today onwards.',
        });
      }
    console.log('Selected time range:', startTime, 'to', endTime);
    // Perform actions based on the selected time range
    // For example, open a modal or update data
}
  eventTimesChanged({ 
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      debugger
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    debugger
    this.modalData = { event, action };
    this.modalService.open(AddInterviewScheduleCalenderModelComponent, { size: 'lg' });
  }
  randomevent(Value:any){
debugger
console.log(Value);
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  // selectdropdown(data:any):void{
  //   debugger  
  //   this.timesheetmodel.TalentId = data.target.value;
  // }
  // handleDayClick(date: any, jsEvent: any) {
  //   debugger
  //   const clickedDate = date.dateStr;
  //   this.timesheetmodel.Interview_Date = clickedDate;
  //  const modalRef = this.modalService.open(AddInterviewScheduleCalenderModelComponent);
  //   modalRef.componentInstance.DataOf =this.timesheetmodel;
  //   modalRef.result 
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {

  //       console.log(error);
  //     });

   
  // }
  handleDayClick(date: any, jsEvent: any) {
    debugger
    const clickedDate = date.dateStr;
    const AllDay=date.allDay;
    const currentDate = new Date();
    const selectedDate = new Date(clickedDate);
  
    // Check if the selected date is in the future
    if (selectedDate.getTime() >= currentDate.setHours(0, 0, 0, 0)) {
      this.timesheetmodel.Interview_Date = clickedDate;
      const modalRef = this.modalService.open(AddInterviewScheduleCalenderModelComponent);
      const dataof={

        TalentId:this.tempTlaentid !== 0 ?this.tempTlaentid:this.timesheetmodel.TalentId,
        JobsId:this.timesheetmodel.Jobid,
        ProjectId:this.timesheetmodel.Projectid,
        Rel_Tal_Pro_Id:this.timesheetmodel.Rel_Tal_Pro_Id,
        SelectedDate:this.timesheetmodel.Interview_Date,
        allDay:AllDay
      }
      modalRef.componentInstance.DataOf = dataof;
      modalRef.result
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Use SweetAlert for a nicer notification
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date',
        text: 'You have selected a past date. If you want to schedule for a future date, please choose a date from today onwards.',
      });
    }
  }
  handleEventClick(eventInfo: any, jsEvent: any) {
    debugger
   let x =  this.AllinterviewList.find((i:any)=> i.RoundName == eventInfo.event._def.title);
    // Create and show your custom modal or popup using Angular's modal service or Bootstrap (not shown here)
    const modalRef = this.modalService.open(InterviewSchedualDetailModalComponent);
    modalRef.componentInstance.DataOf = x;
    modalRef.result
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {

            console.log(error);
        });
  }

  //#endregion

  taskDescriptionInvalid(index: number): boolean {
    const task = this.timesheetmodel.Timesheet_datas[index];
    return task.TaskDescription && task.TaskDescription.length < 80;
  }
  // onCustomDateChange(event: DlDateTimePickerChange<Date>) {
  //   console.log(event.value);
  // }

  GetIntervewrounddropdwonList() {
    this.interviewraountdropdwon.GetInterviewRoundDropdownList().subscribe((resp) => {
      this.interveiwroundlist = resp.Data;
      
    })
  }

  getAllInterviewDetailsbyClientId() {
    debugger
    this.interviewDetailservice.GetInterviewDetailForClient(this._credentials?.UserId).subscribe((resp:any) => {
      if(resp){
        if(resp.Data){
          if(resp.Data.length >0){
            debugger
            let x :any=[];
            debugger
            for (let index = 0; index < resp.Data.length; index++) {
             
              x.push( { title: resp.Data[index].RoundName, date: resp.Data[index].Interview_Date.split("T")[0] })
              // const element = array[index];
              
            }
            this.allEventArray = x;
            this.AllinterviewList = resp.Data;
            // Calender Function
    this.calendarOptions = {
      //plugins: [dayGridPlugin, interactionPlugin,timeGridPlugin],
      initialView: 'dayGridMonth', // Or 'dayGridWeek', 'dayGridDay'
      events: this.allEventArray,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridDay',
      },
      eventClick: this.handleEventClick.bind(this),
      dateClick: this.handleDayClick.bind(this) // Bind the function
    };
          }
        }
      }
      
    })
  }
  onChange(selectedTalentId: any) {
    debugger
    const ProjectIdandJobid = this.agencyalltalentlist.find((x: any) => x.TalentId == selectedTalentId);
    //this.timesheetmodel.TalentId = selectedTalentId;
    this.Jobid = ProjectIdandJobid.JobsId;
    this.Projectid = ProjectIdandJobid.ProjectId;
    this.Rel_Tal_Pro_Id=ProjectIdandJobid.Rel_Tal_Pro_Id;
    this.NId=ProjectIdandJobid.NId;


    this.timesheetmodel.Rel_Tal_Pro_Id = this.Rel_Tal_Pro_Id;
    this.timesheetmodel.Projectid = this.Projectid;
    this.timesheetmodel.Jobid = this.Jobid;
  }


  submit(IsFormValid: any) {
    debugger
    if (IsFormValid.value.Interviewer_Contact_Number == '' || IsFormValid.value.InterviewerEmail == '' || IsFormValid.value.InterviewerName == '' || IsFormValid.value.InterviewLocation == '' ||
      IsFormValid.value.TaskDescription == '' || IsFormValid.value.Interview_Round_Id == '' || IsFormValid.value.selectedDate == null) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required field',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      this.router.navigate(['/client/add-interview-schedule']);

    } else {
      this.timesheetmodel.InterviewID
    
      // const year = this.timesheetmodel.selectedDate.getFullYear();
      // const month = (this.timesheetmodel.selectedDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
      // const day = this.timesheetmodel.selectedDate.getDate().toString().padStart(2, '0');

      // // Get the time components
      //  const hours = this.timesheetmodel.selectedDate.getHours().toString().padStart(2, '0');
      //  const minutes = this.timesheetmodel.selectedDate.getMinutes().toString().padStart(2, '0');
      //  const seconds = this.timesheetmodel.selectedDate.getSeconds().toString().padStart(2, '0');
      //  const formattedString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      // this.timesheetmodel.Interview_Time = formattedString;
      // this.timesheetmodel.Interview_Date = this.timesheetmodel.selectedDate.toISOString();

      //   this.timesheetmodel.interview_Round_Id
      //  this.timesheetmodel.interview_Description
      // this.timesheetmodel.interview_Round_Status_Id
      if (this.tempTlaentid !== 0) {
        this.timesheetmodel.TalentId = this.tempTlaentid;
       // this.timesheetmodel.Rel_Tal_Pro_Id 
      }
      else {
        this.timesheetmodel.TalentId
        this.timesheetmodel.Rel_Tal_Pro_Id 
      }
      this.timesheetmodel.Interviewer_Name
      this.timesheetmodel.Interviewer_Contact_Number
      this.timesheetmodel.Interviewer_Email
      this.timesheetmodel.InterviewLocation
      this.timesheetmodel.CreatedBy = this._credentials?.Email;
      this.timesheetmodel.Email = this._credentials?.Email;
      this.timesheetmodel.UserId = this._credentials?.UserId;
      this.timesheetmodel.UserName = this._credentials?.UserName;

      // this.timesheetmodel.Timesheet_datas &&
      //   this.timesheetmodel.Timesheet_datas.len
      // this.timesheetmodel.interview_Round_Detail1s.every((task: any) => task.interview_Round_Id !== 0 && task.interview_Description !== '');
      const ProjectIdandJobid = this.agencyalltalentlist.find((x: any) => x.TalentId == this.timesheetmodel.TalentId );
      this.Jobid = ProjectIdandJobid.JobsId;
      this.Projectid = ProjectIdandJobid.ProjectId;
      this.timesheetmodel.ProjectName = ProjectIdandJobid.ProjectName;
      this.timesheetmodel.projectId = this.Projectid;
      this.timesheetmodel.jobsId = this.Jobid;
      this.timesheetmodel.JobTitle = ProjectIdandJobid.JobTitle;

      const matchingDropdownItem = this.interveiwroundlist.find((item: any) => item.Interview_Dropdown_ID == this.timesheetmodel.Interview_Round_Id);
      this.timesheetmodel.RoundName = matchingDropdownItem.Interview_Dropdown_Name;
      this.isLoading = true;
      const timesheet$ = this.interviewrounddetails.AddUpdateInterviewDetail(this.timesheetmodel);
      timesheet$
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(
          (res: any | undefined) => {
            if (res.Success) {
              log.debug(`${res?.Email} successfully register timesheet`);

              if (res.Success) {
                Swal.fire({
                  text: res.Message,
                  icon: 'success',
                  buttonsStyling: false,
                  confirmButtonText: 'Ok, got it!',
                  customClass: {
                    confirmButton: 'btn btn-primary',
                  },
                }).then((result) => {
                  if (result.isConfirmed) {

                    // this.router.navigate(['/talent/timesheet-list']);
                    if (this._credentials?.UserTypeCode == "Client") {
                      this.router.navigate(['/client/interview-schedule-list']);
                    }
                    else if (this._credentials?.UserTypeCode == "Recruiter") {
                      this.router.navigate(['/recruiter/timesheet-list']);
                    }
                    else {
                      this.router.navigate(['/talent/timesheet-list']);
                    }
                  }
                });
              } else {
                Swal.fire({
                  title: 'Error!',
                  text: res.Message,
                  icon: 'error',
                  confirmButtonText: 'Okay',
                });
              }
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'Womething went wrong',
                icon: 'error',
                confirmButtonText: 'Okay',
              });
            }
          },
          (error: any) => {
            log.debug(`register error: ${error}`);
            this.error = error;
          }
        );
    }
  }

  addNewRoleRow() {

    const newRolerow = { TaskName: '', TaskDescription: '', TaskStatus: 0, TotalHours: '' };
    this.timesheetmodel.Timesheet_datas.push({ ...newRolerow });
  }

  deleteRoleRow(index: number) {
    if (this.timesheetmodel.Timesheet_datas.length > 1) {
      this.timesheetmodel.Timesheet_datas.splice(index, 1);
    }
  }

  GetTalentRelationList() {
    let UserId = this._credentials?.UserId;
    this.talentservice.GetTalentRelationList(UserId).subscribe((result: any) => {
      this.agencyalltalentlist = result.Data;
    });
  }
  // onProjectChange(selectedProjectId: any) {
  //   this.timesheetmodel.TalentId = selectedProjectId;
    
  // }

  GetTalentRelationDropdown() {
    let UserId = this._credentials?.UserId;
    this.talentservice.GetTalentRelationDropdown(UserId).subscribe((result: any) => {
      this.aprovealltalentlist = result.Data;
    });
  }

}



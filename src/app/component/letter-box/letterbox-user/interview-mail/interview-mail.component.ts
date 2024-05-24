import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interview-mail',
  templateUrl: './interview-mail.component.html',
  styleUrls: ['./interview-mail.component.scss']
})
export class InterviewMailComponent {

  @Output() filterValue = new EventEmitter<boolean>();

  public open: boolean = false;

  openFilter(){
    this.open =! this.open
    this.filterValue.emit(this.open)
  }

}

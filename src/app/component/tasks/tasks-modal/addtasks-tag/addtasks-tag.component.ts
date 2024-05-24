import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtasks-tag',
  templateUrl: './addtasks-tag.component.html',
  styleUrls: ['./addtasks-tag.component.scss']
})
export class AddtasksTagComponent {
  
  constructor(public activeModal: NgbActiveModal) { }

}

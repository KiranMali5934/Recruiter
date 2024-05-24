import { Component, Output } from '@angular/core';
import * as Data from '../../../shared/data/tasks/task-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTasksComponent } from '../tasks-modal/new-tasks/new-tasks.component';
import { AddtasksTagComponent } from '../tasks-modal/addtasks-tag/addtasks-tag.component';

@Component({
  selector: 'app-task-sidemenu',
  templateUrl: './task-sidemenu.component.html',
  styleUrls: ['./task-sidemenu.component.scss']
})
export class TaskSidemenuComponent {

  @Output() selectedheading_id: number;
  @Output() selectedTagId: number;

  public taskSidemenu = Data.TaskData;
  public taskTagSidemenu = Data.TagData;
  public open: boolean = false;


  constructor(private modalService: NgbModal) { }
  
  getData(title_id: number) {
    const getHeadingData = this.taskSidemenu.filter((data) => {
      return data.title_id === title_id
    })
    this.selectedheading_id = getHeadingData[0].title_id
  }

  getTagData(title_id: number) {
    const getTagData = this.taskTagSidemenu.filter((data) => {
      return data.title_id === title_id
    })

    this.selectedTagId = getTagData[0].title_id
  }

  openMenu() {
    this.open = !this.open
  }

  openAddTask() {
    this.modalService.open(NewTasksComponent, { size: 'lg' })
  }

  openAddTag() {
    this.modalService.open(AddtasksTagComponent, { size: 'lg' })
  }
  
  clickOutside():void { 
    this.open = false;
  }
  
}

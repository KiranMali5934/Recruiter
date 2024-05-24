import { Component } from '@angular/core';
import { Project , ProjectList } from '../../../shared/data/project/project-list';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  public active = 1
  public openTab: string = "All";
  public ProjectLists = ProjectList;
  public listUser: Project[] = [];
  public filterData: Project[] = this.ProjectLists

  public tabbed(val: string) {
    this.openTab = val
    this.filterData = val !== "All" ? this.ProjectLists.filter((data:Project)=>{
      return data.badge == this.openTab ? true :false
    }):this.ProjectLists
  }

}

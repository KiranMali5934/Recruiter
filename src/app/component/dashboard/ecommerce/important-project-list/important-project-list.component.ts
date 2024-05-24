import { Component } from '@angular/core';
import { ProjectList } from '../../../..//shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-important-project-list',
  templateUrl: './important-project-list.component.html',
  styleUrls: ['./important-project-list.component.scss']
})
export class ImportantProjectListComponent {

  public projectListData =ProjectList;

  options: Options = {
    floor: 0,
    ceil: 100
  };

}

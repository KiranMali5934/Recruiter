import { Component } from '@angular/core';
import { projectData } from '../../../../shared/data/user/users-edit';

@Component({
  selector: 'app-add-projects-upload',
  templateUrl: './add-projects-upload.component.html',
  styleUrls: ['./add-projects-upload.component.scss']
})
export class AddProjectsUploadComponent {

  public projectitem = projectData;

}

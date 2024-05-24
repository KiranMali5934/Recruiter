import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/learning/learning';

@Component({
  selector: 'app-detaild-course',
  templateUrl: './detaild-course.component.html',
  styleUrls: ['./detaild-course.component.scss']
})
export class DetaildCourseComponent {

  public commentsData = commentsData;

}

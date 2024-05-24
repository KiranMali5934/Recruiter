import { Component, Input } from '@angular/core';
import { hobbiesEduction } from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-hobbies-eduction',
  templateUrl: './hobbies-eduction.component.html',
  styleUrls: ['./hobbies-eduction.component.scss']
})
export class HobbiesEductionComponent {

  @Input() data: hobbiesEduction;


}

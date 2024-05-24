import { Component } from '@angular/core';
import { CustomProgressbars } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-custom-progress-bars',
  templateUrl: './custom-progress-bars.component.html',
  styleUrls: ['./custom-progress-bars.component.scss']
})
export class CustomProgressBarsComponent {

  public customprogressData = CustomProgressbars;

}

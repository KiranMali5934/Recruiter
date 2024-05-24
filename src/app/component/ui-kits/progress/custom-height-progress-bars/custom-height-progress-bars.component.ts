import { Component } from '@angular/core';
import { customheightprogress } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-custom-height-progress-bars',
  templateUrl: './custom-height-progress-bars.component.html',
  styleUrls: ['./custom-height-progress-bars.component.scss']
})
export class CustomHeightProgressBarsComponent {

  public customheightData = customheightprogress;

}

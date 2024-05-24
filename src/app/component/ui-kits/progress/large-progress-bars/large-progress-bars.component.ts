import { Component } from '@angular/core';
import { LargeProgressbars } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-large-progress-bars',
  templateUrl: './large-progress-bars.component.html',
  styleUrls: ['./large-progress-bars.component.scss']
})
export class LargeProgressBarsComponent {

  public largeProgressData = LargeProgressbars;

}

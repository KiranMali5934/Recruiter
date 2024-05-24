import { Component } from '@angular/core';
import { SmallProgressbars } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-small-progress-bars',
  templateUrl: './small-progress-bars.component.html',
  styleUrls: ['./small-progress-bars.component.scss']
})
export class SmallProgressBarsComponent {

  public smallProgressData = SmallProgressbars;

}

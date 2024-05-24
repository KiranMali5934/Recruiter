import { Component } from '@angular/core';
import * as  data from '../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  public basicData = data.basicProgress;
  public progressStripedData = data.ProgressBarsStriped;
  public progressAnimatedData = data.ProgressBarsAnimated;

}

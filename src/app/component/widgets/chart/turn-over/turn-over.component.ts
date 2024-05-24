import { Component } from '@angular/core';
import { Turnover } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-turn-over',
  templateUrl: './turn-over.component.html',
  styleUrls: ['./turn-over.component.scss']
})
export class TurnOverComponent {

  public TurnOverChart = Turnover;

}

import { Component } from '@angular/core';
import { commonBorderPositionCardData } from '../../../../shared/data/bonus-ui/creative-cards';

@Component({
  selector: 'app-common-border-card',
  templateUrl: './common-border-card.component.html',
  styleUrls: ['./common-border-card.component.scss']
})
export class CommonBorderCardComponent {

  public Data = commonBorderPositionCardData;

  
}

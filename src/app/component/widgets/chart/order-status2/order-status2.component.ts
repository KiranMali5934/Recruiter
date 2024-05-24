import { Component } from '@angular/core';
import { OderStatus } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-order-status2',
  templateUrl: './order-status2.component.html',
  styleUrls: ['./order-status2.component.scss']
})
export class OrderStatus2Component {

  public orderStatusData = OderStatus;

}



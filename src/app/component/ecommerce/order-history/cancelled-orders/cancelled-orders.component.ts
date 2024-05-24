import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CancelledOrders, Order } from '../../../../shared/data/ecommerce/orderhistory';

@Component({
  selector: 'app-cancelled-orders',
  templateUrl: './cancelled-orders.component.html',
  styleUrls: ['./cancelled-orders.component.scss']
})
export class CancelledOrdersComponent {

  public cancelled = CancelledOrders;
  public rateing = 5;

  constructor(public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

  close(item: Order) {
    this.cancelled.splice(this.cancelled.indexOf(item), 1);
  }


}

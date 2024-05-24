import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Neworders, Order } from '../../../../shared/data/ecommerce/orderhistory';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.scss']
})
export class NewOrdersComponent {
  
  public rateing = 5;
  public orders = Neworders;

  constructor(public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

  close(item: Order) {
    this.orders.splice(this.orders.indexOf(item), 1);
  }


}

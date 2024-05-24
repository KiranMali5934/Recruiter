import { Component } from '@angular/core';
import { ShippedOrders, Order} from '../../../../shared/data/ecommerce/orderhistory';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shipped-orders',
  templateUrl: './shipped-orders.component.html',
  styleUrls: ['./shipped-orders.component.scss']
})
export class ShippedOrdersComponent {

  public shippedData = ShippedOrders;
  public rateing = 5;

  constructor(public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

  close(item: Order) {
    this.shippedData.splice(this.shippedData.indexOf(item), 1);
  }

}

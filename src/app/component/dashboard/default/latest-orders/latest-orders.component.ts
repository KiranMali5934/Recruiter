import { Component } from '@angular/core';
import { LatestOrders } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.scss']
})
export class LatestOrdersComponent {

  public latesOdersData = LatestOrders;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}

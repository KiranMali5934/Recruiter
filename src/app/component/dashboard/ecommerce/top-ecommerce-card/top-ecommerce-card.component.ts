import { Component } from '@angular/core';
import { topEcommerceData } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';

@Component({
  selector: 'app-top-ecommerce-card',
  templateUrl: './top-ecommerce-card.component.html',
  styleUrls: ['./top-ecommerce-card.component.scss']
})
export class TopEcommerceCardComponent {

  public TopecommercaData = topEcommerceData;

}

import { Component, Input } from '@angular/core';
import { ecommerceData } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-ecommerce-details',
  templateUrl: './ecommerce-details.component.html',
  styleUrls: ['./ecommerce-details.component.scss']
})
export class EcommerceDetailsComponent {

  @Input() public banner:boolean = true;

  public ecommerceData = ecommerceData

}

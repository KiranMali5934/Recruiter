import { Component } from '@angular/core';
import { BecomeMember, simplePricingCard } from '../../../shared/data/ecommerce/pricing'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  public becomememberData = BecomeMember;
  public simplepricing = simplePricingCard;

}

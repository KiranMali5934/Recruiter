import { Component } from '@angular/core';
import { autoPlayVariant, autovariantOption } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-play',
  templateUrl: './auto-play.component.html',
  styleUrls: ['./auto-play.component.scss']
})
export class AutoPlayComponent {

  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;

}

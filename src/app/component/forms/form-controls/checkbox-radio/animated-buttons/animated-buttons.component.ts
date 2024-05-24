import { Component } from '@angular/core';
import { soicaMidia, paymentData } from '../../../../../shared/data/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-animated-buttons',
  templateUrl: './animated-buttons.component.html',
  styleUrls: ['./animated-buttons.component.scss']
})
export class AnimatedButtonsComponent {

  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;

}

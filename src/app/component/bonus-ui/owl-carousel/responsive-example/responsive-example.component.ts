import { Component } from '@angular/core';
import { responsiveowl, responsiveOptions } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-responsive-example',
  templateUrl: './responsive-example.component.html',
  styleUrls: ['./responsive-example.component.scss']
})
export class ResponsiveExampleComponent {

  public responsiveData = responsiveowl;
  public responsiveOptions = responsiveOptions;

}

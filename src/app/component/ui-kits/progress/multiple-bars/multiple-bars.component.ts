import { Component } from '@angular/core';
import { Multiplebars } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-multiple-bars',
  templateUrl: './multiple-bars.component.html',
  styleUrls: ['./multiple-bars.component.scss']
})
export class MultipleBarsComponent {

  public mutiPalbarData = Multiplebars;

}

import { Component } from '@angular/core';
import { commonImg, autoWidthoption } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-width-example',
  templateUrl: './auto-width-example.component.html',
  styleUrls: ['./auto-width-example.component.scss']
})
export class AutoWidthExampleComponent {

  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;

}

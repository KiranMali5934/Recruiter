import { Component } from '@angular/core';
import { commonImg, autoheigthoptions } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-height-example',
  templateUrl: './auto-height-example.component.html',
  styleUrls: ['./auto-height-example.component.scss']
})
export class AutoHeightExampleComponent {

  public heigthData = commonImg;
  public heigthOptionData = autoheigthoptions;

}

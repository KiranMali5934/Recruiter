import { Component } from '@angular/core';
import { commonImg, RightToLeftoptions } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-right-left-example',
  templateUrl: './right-left-example.component.html',
  styleUrls: ['./right-left-example.component.scss']
})
export class RightLeftExampleComponent {

  public rightLeftData = commonImg;
  public rightleftoptions = RightToLeftoptions;

}

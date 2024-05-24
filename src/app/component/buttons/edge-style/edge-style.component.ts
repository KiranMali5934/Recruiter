import { Component } from '@angular/core';
import { EdgeButtons, styleButton } from '../../../shared/data/buttons/edge-style';

@Component({
  selector: 'app-edge-style',
  templateUrl: './edge-style.component.html',
  styleUrls: ['./edge-style.component.scss']
})
export class EdgeStyleComponent {

  public EdgeData = EdgeButtons;
  public StylebuttonData = styleButton;

}

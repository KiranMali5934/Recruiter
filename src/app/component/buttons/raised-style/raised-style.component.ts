import { Component } from '@angular/core';
import { raisedButtons, styleButton } from '../../../shared/data/buttons/raised-style';

@Component({
  selector: 'app-raised-style',
  templateUrl: './raised-style.component.html',
  styleUrls: ['./raised-style.component.scss']
})
export class RaisedStyleComponent {

  public RaisedData = raisedButtons;
  public StylebuttonData = styleButton;

}

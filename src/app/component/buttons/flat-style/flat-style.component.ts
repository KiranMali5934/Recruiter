import { Component } from '@angular/core';
import { FlatButtons, StyleButton } from '../../../shared/data/buttons/flat-buttons';

@Component({
  selector: 'app-flat-style',
  templateUrl: './flat-style.component.html',
  styleUrls: ['./flat-style.component.scss']
})
export class FlatStyleComponent {

  public FlatButtonsData = FlatButtons;
  public StylebuttonData = StyleButton;

}

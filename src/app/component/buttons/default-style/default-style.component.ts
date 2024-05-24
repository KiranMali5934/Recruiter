import { Component } from '@angular/core';
import { DefaultButtons, styleButton } from '../../../shared/data/buttons/default-style';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.component.html',
  styleUrls: ['./default-style.component.scss']
})
export class DefaultStyleComponent {

  public defaultstyleData = DefaultButtons;
  public StylebuttonData = styleButton;

}

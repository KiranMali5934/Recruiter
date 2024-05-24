import { Component } from '@angular/core';
import { inlineStyle } from '../../../../../shared/data/forms/form-controls/mega-options';


@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styleUrls: ['./inline-style.component.scss']
})
export class InlineStyleComponent {

  public inlineData = inlineStyle;

}

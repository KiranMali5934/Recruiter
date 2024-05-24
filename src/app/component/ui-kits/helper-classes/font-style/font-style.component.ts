import { Component } from '@angular/core';
import { FontStyle } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-font-style',
  templateUrl: './font-style.component.html',
  styleUrls: ['./font-style.component.scss']
})
export class FontStyleComponent {

  public FontstyleData = FontStyle;


}

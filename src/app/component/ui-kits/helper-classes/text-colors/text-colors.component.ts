import { Component } from '@angular/core';
import { TextColors } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-text-colors',
  templateUrl: './text-colors.component.html',
  styleUrls: ['./text-colors.component.scss']
})
export class TextColorsComponent {

  public TextColorData = TextColors;

}

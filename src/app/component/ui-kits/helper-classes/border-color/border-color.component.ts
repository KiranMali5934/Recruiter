import { Component } from '@angular/core';
import { Bordercolors } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-border-color',
  templateUrl: './border-color.component.html',
  styleUrls: ['./border-color.component.scss']
})
export class BorderColorComponent {

  public borderColorData = Bordercolors;

}

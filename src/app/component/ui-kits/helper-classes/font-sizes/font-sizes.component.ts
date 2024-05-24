import { Component } from '@angular/core';
import { FontSize } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-font-sizes',
  templateUrl: './font-sizes.component.html',
  styleUrls: ['./font-sizes.component.scss']
})
export class FontSizesComponent {

  public fonstSizeData = FontSize;

}

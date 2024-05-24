import { Component } from '@angular/core';
import { Padding } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.scss']
})
export class PaddingComponent {

  public PaddingData = Padding;

}

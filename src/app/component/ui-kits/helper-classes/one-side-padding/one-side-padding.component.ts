import { Component } from '@angular/core';
import { CommonPadding } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-one-side-padding',
  templateUrl: './one-side-padding.component.html',
  styleUrls: ['./one-side-padding.component.scss']
})
export class OneSidePaddingComponent {

  public paddingCommon = CommonPadding;

}

import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-styles-borders',
  templateUrl: './styles-borders.component.html',
  styleUrls: ['./styles-borders.component.scss']
})
export class StylesBordersComponent {

  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWiths = borderData.borderWith;
  public textColors = borderData.TextColor;

}

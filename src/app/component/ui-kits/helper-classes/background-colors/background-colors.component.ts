import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-background-colors',
  templateUrl: './background-colors.component.html',
  styleUrls: ['./background-colors.component.scss']
})
export class BackgroundColorsComponent {

  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;

}

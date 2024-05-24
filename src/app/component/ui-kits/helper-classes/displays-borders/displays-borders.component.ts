import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-displays-borders',
  templateUrl: './displays-borders.component.html',
  styleUrls: ['./displays-borders.component.scss']
})
export class DisplaysBordersComponent {

  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;

}

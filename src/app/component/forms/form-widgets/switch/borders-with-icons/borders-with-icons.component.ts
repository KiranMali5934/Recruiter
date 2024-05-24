import { Component } from '@angular/core';
import { bordericons } from '../../../../../shared/data/forms/forms-widgets/switch';

@Component({
  selector: 'app-borders-with-icons',
  templateUrl: './borders-with-icons.component.html',
  styleUrls: ['./borders-with-icons.component.scss']
})
export class BordersWithIconsComponent {

  public borderData = bordericons;

}

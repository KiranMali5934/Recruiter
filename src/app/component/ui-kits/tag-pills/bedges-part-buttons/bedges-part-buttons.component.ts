import { Component } from '@angular/core';
import { BadgePartButtons } from '../../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-bedges-part-buttons',
  templateUrl: './bedges-part-buttons.component.html',
  styleUrls: ['./bedges-part-buttons.component.scss']
})
export class BedgesPartButtonsComponent {

  public buttonspartData = BadgePartButtons;


}

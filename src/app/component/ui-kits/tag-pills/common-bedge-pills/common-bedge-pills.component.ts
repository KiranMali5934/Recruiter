import { Component, Input } from '@angular/core';
import { button } from '../../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-common-bedge-pills',
  templateUrl: './common-bedge-pills.component.html',
  styleUrls: ['./common-bedge-pills.component.scss']
})
export class CommonBedgePillsComponent {

  @Input() data: button[];


}

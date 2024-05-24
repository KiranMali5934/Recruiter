import { Component ,Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';


@Component({
  selector: 'app-common-background-colors',
  templateUrl: './common-background-colors.component.html',
  styleUrls: ['./common-background-colors.component.scss']
})
export class CommonBackgroundColorsComponent {

  @Input() data: titleData[];


}

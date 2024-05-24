import { Component ,Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-displays-style',
  templateUrl: './common-displays-style.component.html',
  styleUrls: ['./common-displays-style.component.scss']
})
export class CommonDisplaysStyleComponent {

  @Input() data: titleData[];

}

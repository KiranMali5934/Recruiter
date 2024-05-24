import { Component } from '@angular/core';
import { DisabledLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-disabled-lists',
  templateUrl: './disabled-lists.component.html',
  styleUrls: ['./disabled-lists.component.scss']
})
export class DisabledListsComponent {

  public disableData = DisabledLists;

}

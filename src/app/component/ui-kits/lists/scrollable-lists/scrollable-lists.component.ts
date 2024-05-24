import { Component } from '@angular/core';
import { ScrollableLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-scrollable-lists',
  templateUrl: './scrollable-lists.component.html',
  styleUrls: ['./scrollable-lists.component.scss']
})
export class ScrollableListsComponent {

  public scrollableData = ScrollableLists;

}

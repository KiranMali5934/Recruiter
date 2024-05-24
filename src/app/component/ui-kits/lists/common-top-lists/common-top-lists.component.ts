import { Component } from '@angular/core';
import { topcommonlists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-common-top-lists',
  templateUrl: './common-top-lists.component.html',
  styleUrls: ['./common-top-lists.component.scss']
})
export class CommonTopListsComponent {

  public commonLists = topcommonlists;

}

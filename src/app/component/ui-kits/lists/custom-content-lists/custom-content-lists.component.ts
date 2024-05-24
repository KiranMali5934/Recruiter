import { Component } from '@angular/core';
import { CustomContentLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-custom-content-lists',
  templateUrl: './custom-content-lists.component.html',
  styleUrls: ['./custom-content-lists.component.scss']
})
export class CustomContentListsComponent {

  public customcontentData = CustomContentLists;


}

import { Component } from '@angular/core';
import { navigationData1} from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navigationData1 = navigationData1;


}

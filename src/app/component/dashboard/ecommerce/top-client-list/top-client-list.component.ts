import { Component } from '@angular/core';
import { TopClientList } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';

@Component({
  selector: 'app-top-client-list',
  templateUrl: './top-client-list.component.html',
  styleUrls: ['./top-client-list.component.scss']
})
export class TopClientListComponent {

  public TopClientData = TopClientList;

}

import { Component, Input } from '@angular/core';
import * as data from "../../../../../../shared/data/contacts/all-contact";

@Component({
  selector: 'app-address-contant',
  templateUrl: './address-contant.component.html',
  styleUrl: './address-contant.component.scss'
})
export class AddressContantComponent {

  public editContact: boolean = true;
  @Input() lastData: data.lastDataList;

}

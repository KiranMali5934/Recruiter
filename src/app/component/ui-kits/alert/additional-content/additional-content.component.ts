import { Component } from '@angular/core';
import { AdditionalContent } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-additional-content',
  templateUrl: './additional-content.component.html',
  styleUrls: ['./additional-content.component.scss']
})
export class AdditionalContentComponent {

  public additionalData = AdditionalContent;

}

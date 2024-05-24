import { Component } from '@angular/core';
import { margin } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.scss']
})
export class MarginComponent {

  public marginData = margin;

}

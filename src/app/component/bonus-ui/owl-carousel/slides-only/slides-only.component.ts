import { Component } from '@angular/core';
import { sildesOnly, sildesOptions } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-slides-only',
  templateUrl: './slides-only.component.html',
  styleUrls: ['./slides-only.component.scss']
})
export class SlidesOnlyComponent {

  public sildesData = sildesOnly;
  public slidesopdtionData = sildesOptions;

}

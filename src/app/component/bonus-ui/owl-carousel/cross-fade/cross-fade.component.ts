import { Component } from '@angular/core';
import { fadeOptions, crossFade } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-cross-fade',
  templateUrl: './cross-fade.component.html',
  styleUrls: ['./cross-fade.component.scss']
})
export class CrossFadeComponent {

  public crossfadeData = crossFade;
  public fadeoptionsData = fadeOptions;

}

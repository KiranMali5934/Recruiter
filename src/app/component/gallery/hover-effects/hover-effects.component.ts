import { Component } from '@angular/core';
import * as Data from '../../../shared/data/gallery/hover';

@Component({
  selector: 'app-hover-effects',
  templateUrl: './hover-effects.component.html',
  styleUrl: './hover-effects.component.scss'
})
export class HoverEffectsComponent {

  public imgData = Data.imgData;
  public hoverData = Data.hoverData;

}

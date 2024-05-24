import { Component } from '@angular/core';
import { ImageSize } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-images-sizes',
  templateUrl: './images-sizes.component.html',
  styleUrls: ['./images-sizes.component.scss']
})
export class ImagesSizesComponent {

  public ImagSizeData = ImageSize;

}

import { Component } from '@angular/core';
import * as Data from '../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  public photosData = Data.photosData;

}

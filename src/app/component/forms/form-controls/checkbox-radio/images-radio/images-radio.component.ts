import { Component } from '@angular/core';
import { imageRadio } from '../../../../../shared/data/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-images-radio',
  templateUrl: './images-radio.component.html',
  styleUrls: ['./images-radio.component.scss']
})
export class ImagesRadioComponent {

  public imgradioData = imageRadio;

}

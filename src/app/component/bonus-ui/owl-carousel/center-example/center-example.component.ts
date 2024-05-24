import { Component } from '@angular/core';
import { center, owlcarousel1ptions } from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-center-example',
  templateUrl: './center-example.component.html',
  styleUrls: ['./center-example.component.scss']
})
export class CenterExampleComponent {

  public centerData = center;
  public centeroptions = owlcarousel1ptions;

}

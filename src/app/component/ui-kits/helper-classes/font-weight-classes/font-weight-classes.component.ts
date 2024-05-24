import { Component } from '@angular/core';
import { FontWight } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-font-weight-classes',
  templateUrl: './font-weight-classes.component.html',
  styleUrls: ['./font-weight-classes.component.scss']
})
export class FontWeightClassesComponent {

  public fontWeightData = FontWight;


}

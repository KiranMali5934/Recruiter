import { Component } from '@angular/core';
import { Shapes } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss']
})
export class ShapesComponent {

  public shapesData = Shapes;

}

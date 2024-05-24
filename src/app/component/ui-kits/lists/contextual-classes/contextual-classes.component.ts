import { Component } from '@angular/core';
import { ContextualClasses } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-contextual-classes',
  templateUrl: './contextual-classes.component.html',
  styleUrls: ['./contextual-classes.component.scss']
})
export class ContextualClassesComponent {

  public contextualData = ContextualClasses;

}

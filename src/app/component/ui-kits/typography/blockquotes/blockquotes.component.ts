import { Component } from '@angular/core';
import { blackqutoesData } from '../../../../shared/data/ui-kits/typogaraphy';

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.component.html',
  styleUrls: ['./blockquotes.component.scss']
})
export class BlockquotesComponent {

  public blockquote = blackqutoesData;

}

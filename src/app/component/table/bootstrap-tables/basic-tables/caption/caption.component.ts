import { Component } from '@angular/core';
import { caption } from '../../../../../shared/data/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss']
})
export class CaptionComponent {

  public captionData = caption;

}

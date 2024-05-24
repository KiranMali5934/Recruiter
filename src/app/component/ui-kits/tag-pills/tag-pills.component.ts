import { Component } from '@angular/core';
import * as  data from '../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-tag-pills',
  templateUrl: './tag-pills.component.html',
  styleUrls: ['./tag-pills.component.scss']
})
export class TagPillsComponent {

  public BadgesData = data.buttons;
  public PillsData = data.pills;
  public NumberBadgeData = data.NumberBadge;
  public NumberPillsData = data.NumberPillstag;
  public IconBadeData = data.iconbadge;
  public IconpillsData = data.iconpills;

}

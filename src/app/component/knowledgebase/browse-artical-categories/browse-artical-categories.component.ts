import { Component } from '@angular/core';
import { browseArticlesData } from '../../../shared/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-browse-artical-categories',
  templateUrl: './browse-artical-categories.component.html',
  styleUrl: './browse-artical-categories.component.scss'
})
export class BrowseArticalCategoriesComponent {

  public browseArticlesData = browseArticlesData;


}

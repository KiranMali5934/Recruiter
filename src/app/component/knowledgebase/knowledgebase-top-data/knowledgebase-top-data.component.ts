import { Component } from '@angular/core';
import { knowledgebaseData } from '../../../shared/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-knowledgebase-top-data',
  templateUrl: './knowledgebase-top-data.component.html',
  styleUrl: './knowledgebase-top-data.component.scss'
})
export class KnowledgebaseTopDataComponent {

  public knowledgebaseData = knowledgebaseData;

}

import { Component } from '@angular/core';
import { learningTopData, learningData } from '../../../shared/data/learning/learning';

@Component({
  selector: 'app-learning-list',
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss']
})
export class LearningListComponent {

  public learningTopData = learningTopData;
  public learningData = learningData;

}

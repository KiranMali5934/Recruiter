import { Component, Input } from '@angular/core';
import { articlesAndVideos } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-artical-videos',
  templateUrl: './latest-artical-videos.component.html',
  styleUrls: ['./latest-artical-videos.component.scss']
})
export class LatestArticalVideosComponent {

  @Input() data: articlesAndVideos[];

}

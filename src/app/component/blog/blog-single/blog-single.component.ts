import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/blog/blog-data';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent {

  public commentsData = commentsData;
  
}

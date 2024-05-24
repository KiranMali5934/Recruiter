import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/blog/blog-data';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {

  public blog = blogData;

}

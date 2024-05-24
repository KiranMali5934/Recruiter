import { Component } from '@angular/core';
import { whislist } from '../../../shared/data/ecommerce/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  public wishlistData = whislist;

}

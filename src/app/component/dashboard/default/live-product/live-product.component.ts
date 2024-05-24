import { Component } from '@angular/core';
import { LiveProduct } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-live-product',
  templateUrl: './live-product.component.html',
  styleUrls: ['./live-product.component.scss']
})
export class LiveProductComponent {

  public liveproductData = LiveProduct;
  public openid: number;

  openMenu(id: number) {
    this.liveproductData.filter((data) => {
      if (data.id == id) {
        this.openid = this.openid !== data.id ? data.id : 0;
      }
    })
  }

}

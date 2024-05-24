import { Component } from '@angular/core';
import { CryptoAnnotations } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-crypto-annotations',
  templateUrl: './crypto-annotations.component.html',
  styleUrls: ['./crypto-annotations.component.scss']
})
export class CryptoAnnotationsComponent {

  public CryptoannotationsChart = CryptoAnnotations;

}

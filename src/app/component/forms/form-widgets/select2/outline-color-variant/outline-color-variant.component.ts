import { Component } from '@angular/core';

@Component({
  selector: 'app-outline-color-variant',
  templateUrl: './outline-color-variant.component.html',
  styleUrl: './outline-color-variant.component.scss'
})
export class OutlineColorVariantComponent {

  colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"]

}

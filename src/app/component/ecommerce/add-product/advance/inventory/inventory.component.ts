import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 6;

}

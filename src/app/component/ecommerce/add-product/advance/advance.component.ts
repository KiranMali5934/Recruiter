import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent {

  @Output() activeSteps = new EventEmitter<number>();
  
  public activeStep: number = 5;
  public validate: boolean;
 
  public openTab: string = "Inventory";

  public tabbed(val: string) {
    this.openTab = val
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}

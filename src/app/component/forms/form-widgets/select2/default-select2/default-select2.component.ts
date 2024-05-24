import { Component } from '@angular/core';

@Component({
  selector: 'app-default-select2',
  templateUrl: './default-select2.component.html',
  styleUrl: './default-select2.component.scss'
})
export class DefaultSelect2Component {

  selectedCity: string;
  selectedCityIds: string[] = [];
  selectedCityIds3: string[] = [];
  selectedCityIds2: string[] = [];
  selectedCityIds4: string[] = [];
  selectedCityIds5: string[] = [];
  selectedCityIds6: string[] = [];
  selectedCityName = 'Vilnius';
  selectedCityId: number = 0;
  selectedUserIds: number[] = [];

  store: boolean = true;
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  Placeholder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];
  Placeh = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  Enable(val: boolean): void {
    this.store = val;
  }

}

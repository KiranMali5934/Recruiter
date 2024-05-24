import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-title-text-alert',
  templateUrl: './title-text-alert.component.html',
  styleUrls: ['./title-text-alert.component.scss']
})
export class TitleTextAlertComponent {

  withTitle() {
    Swal.fire({
      title: "It's Magic!",
      text: 'Thank you for visiting Riho theme',
      confirmButtonColor: 'var(--theme-deafult)',
    })
  }

}

import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss']
})
export class InfoAlertComponent {

  info() {
    Swal.fire({
      text: "Please Click on this button it's big surprise for you.",
      confirmButtonColor:'var(--theme-deafult)',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: 'Thank you for visit Riho theme: true',
          confirmButtonColor:'var(--theme-deafult)',
        },
        )
      }
    })
  }

}

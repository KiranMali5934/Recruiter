import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-username-alert',
  templateUrl: './username-alert.component.html',
  styleUrls: ['./username-alert.component.scss']
})
export class UsernameAlertComponent {

  Username() {
    Swal.fire({
      text: 'Please! Submit Your Username :',
      confirmButtonColor: 'var(--theme-deafult)',
      input: 'text',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          text: 'Your name is :' + result.value,
          confirmButtonColor: 'var(--theme-deafult)',
        })
      }
    });
  }


}

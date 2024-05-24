import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent {

  withCancelled() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor:'var(--theme-deafult)',
      customClass: {
        cancelButton: 'order-1',
        confirmButton: 'order-2'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: 'Poof! Your imaginary file has been deleted!',
          icon: 'success',
          confirmButtonColor:'var(--theme-deafult)',
        })
      } else {
        Swal.fire({
          text: 'Your imaginary file is safe!',
          confirmButtonColor:'var(--theme-deafult)'
        })
      }
    })
  }

}

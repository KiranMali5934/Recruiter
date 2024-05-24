import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warning-mode',
  templateUrl: './warning-mode.component.html',
  styleUrls: ['./warning-mode.component.scss']
})
export class WarningModeComponent {

  warning() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'warning',
      confirmButtonColor: 'var(--theme-deafult)',
    })
  }


}

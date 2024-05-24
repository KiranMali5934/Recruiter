import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions-alert',
  templateUrl: './questions-alert.component.html',
  styleUrls: ['./questions-alert.component.scss']
})
export class QuestionsAlertComponent {

  Questions() {
    Swal.fire({
      text: 'Are you sure you want to do this?',
      showCancelButton: true,
      confirmButtonText: 'Aww yiss!',
      cancelButtonText: 'Oh  noez!',
      confirmButtonColor: 'var(--theme-deafult)',
      customClass: {
        confirmButton: 'order-2',
        cancelButton: 'order-1',
      }
    })
  }

}

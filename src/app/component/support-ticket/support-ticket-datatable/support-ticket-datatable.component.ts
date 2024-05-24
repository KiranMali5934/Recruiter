import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SUPPORTDB, supportDB } from '../../../shared/data/support-ticket/support-ticket';
import { NgbdSortableHeader2, SortEvent } from '../../../shared/directives/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket.service';

@Component({
  selector: 'app-support-ticket-datatable',
  templateUrl: './support-ticket-datatable.component.html',
  styleUrl: './support-ticket-datatable.component.scss'
})
export class SupportTicketDatatableComponent {

  public countries$: Observable<supportDB[]>;
  public Data: supportDB[];
  public total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }


  ngOnInit() {
    this.countries$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  removeItem(id: number) {
    this.countries$.subscribe((data: supportDB[]) => {
      data.map((elem: supportDB, i: number) => { elem.id == id && data.splice(i, 1) })
    })
  }
}

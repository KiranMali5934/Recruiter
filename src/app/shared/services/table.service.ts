import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { supportDB } from '../../shared/interface/support';
import { SUPPORTDB } from '../data/table/data-table/SupportTdb';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../directives/sortable.directive';

interface SearchResult {
  Details: supportDB[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(countries: supportDB[], column: SortColumn, direction: string): supportDB[] {
  if (direction === '' || column === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(support: supportDB, term: string, pipe: PipeTransform) {
  return (
    support.name.toLowerCase().includes(term.toLowerCase()) ||
    support.position.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(support.salary).includes(term) ||
    support.office.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(support.extn).includes(term) ||
    support.email.toLowerCase().includes(term.toLowerCase())
  );
}

@Injectable({ providedIn: 'root' })

export class TableService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _data$ = new BehaviorSubject<supportDB[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false)),
      )
      .subscribe((result) => {
        this._data$.next(result.Details);
        this._total$.next(result.total);
      });

    this._search$.next();
  }


  get supportdata$() {
    return this._data$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let Details = sort(SUPPORTDB, sortColumn, sortDirection);

    // 2. filter
    Details = Details.filter((support) => matches(support, searchTerm, this.pipe));
    const total = Details.length;

    // 3. paginate
    Details = Details.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ Details, total });
  }
}
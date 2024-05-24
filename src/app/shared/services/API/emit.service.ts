import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  public emitSubject = new Subject<[]>();
  constructor() { }


  sendfilterdata(data:any){
    debugger
    this.emitSubject.next(data);
  }
}

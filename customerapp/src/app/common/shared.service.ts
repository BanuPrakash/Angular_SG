import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data:any[] = [];
  subject:Subject<any> = new Subject();

  constructor() { }

  // used by observer components
  getSubject() : Subject<any> {
    return this.subject;
  }

  addData(elem:any) {
    this.data.push(elem);
    this.subject.next(this.data);
  }

  endTask() {
    this.subject.complete();
  }
}

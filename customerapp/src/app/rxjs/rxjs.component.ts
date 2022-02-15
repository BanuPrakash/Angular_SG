import { Component, OnInit } from '@angular/core';
import {from, fromEvent, interval} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     const el:any = document.getElementById("card");
     // observable from an event

     const mouseObservable$ = fromEvent<MouseEvent>(el, 'mousemove');

     const subscription =  mouseObservable$.subscribe(evt => {
      console.log(`${evt.clientX} ${evt.clientY}`);

      if(evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
     });
  }

}

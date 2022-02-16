import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-two',
  template: ` <div *ngFor="let d of information">
        {{d}}
    </div>
  `,
})
export class TwoComponent implements OnInit {
  information:any[] = []; // to bind in view
  // DI
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSubject().subscribe(data => {
      this.information = data;
    })
  }

}

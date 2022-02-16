import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  flag:boolean = true;
  // DI
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.sharedService.addData(new Date());
    }, 2000)
  }

}

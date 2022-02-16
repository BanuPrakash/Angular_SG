import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Customer from '../common/Customer';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  complete: Customer[] = [];
  title: string = "Customer Application";
  searchText: string = "";
   isCard:boolean = true;
  // DI
  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe(data => {
      this.customers = this.complete = data;
    })
  }

  deleteCustomerData(id: number): void {
    // this.customers = this.customers.filter(c => c.id !== id);
    this.dataService.deleteCustomer(id).subscribe(response =>
     this.dataService.getCustomers().subscribe(data => {
      this.customers = this.complete = data;
    }));
  }

  filterCustomers() {
    this.customers = this.complete.filter(c => {
      if ((c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
        ||
        (c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)) {
        return true;
      }
      return false;
    });
  }
}

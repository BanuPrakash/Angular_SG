import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Customer from '../common/Customer';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: ''
  };
 
  errorMessage: string = "";
  
  @ViewChild('customerForm') customerForm!: NgForm;
  
  /*
  {
    path:'customers/edit/:id',
    component: CustomerEditComponent
  }
  */
  // http://localhost:4200/customers/edit/5

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        let id = +params['id']; //parseInt()
        if (id !== 0) {
              this.getCustomer(id);
        }
      });

  }

  getCustomer(id: number) {
      this.dataService.getCustomer(id).subscribe((customer: Customer) => {
        this.customer = customer;
      });
  }

  submit() {
     this.dataService.updateCustomer(this.customer)
          .subscribe(data => {
             this.customerForm.form.markAsPristine();
             this.router.navigate(['/customers']);
        });
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }

 

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Customer from './Customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  customerUrl: string = "http://localhost:1234/customers";

  // inject HttpClient Service from HttpClientModule
  // using which we can make CRUD operation using HTTP
  constructor(private http: HttpClient) { }

  // http://localhost:1234/customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  // http://localhost:1234/customers/4
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl + "/" + id);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.customerUrl, customer);
  }

  // http://localhost:1234/customers/4 
  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.customerUrl + "/" + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(this.customerUrl + "/" + id);
  }
}

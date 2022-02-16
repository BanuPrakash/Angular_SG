import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

import {RouterModule, Route} from '@angular/router';


// configure Routes
// http://localhost:4200/orders
// http://localhost:4200/orders/customer/banu@gmail
const routes:Route[] = [
  {
    path:'',
    component:OrdersComponent
  } 
];

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,  RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }

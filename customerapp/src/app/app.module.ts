import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HoverDirective } from './hover.directive';
import { TextconverterPipe } from './textconverter.pipe';
import { HomeComponent } from './home/home.component';

// configure Routes
const routes:Route[] = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'orders',
    loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path:'**',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent,
    RxjsComponent,
    OneComponent,
    TwoComponent,
    CustomerListComponent,
    HoverDirective,
    TextconverterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

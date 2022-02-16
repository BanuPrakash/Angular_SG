import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent,
    RxjsComponent,
    OneComponent,
    TwoComponent,
    CustomerListComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

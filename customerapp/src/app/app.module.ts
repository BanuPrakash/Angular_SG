import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { LinkActivateGuard } from './common/LinkActivateGuard';
import { MyhttpInterceptor } from './myhttp.interceptor';

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
    canActivate:[LinkActivateGuard],
    loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path:'customers/edit/:id',
    component: CustomerEditComponent
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
    HomeComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: MyhttpInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

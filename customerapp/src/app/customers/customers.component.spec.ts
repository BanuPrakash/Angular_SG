import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from '../customers-card/customers-card.component';
import Customer from '../common/Customer';
import { FormsModule } from '@angular/forms';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let customers:Customer[] = [];
  beforeEach(async () => {
    customers = [{
      "id": 1,
      "firstName": "Rachel",
      "lastName": "Green ",
      "gender": "female",
      "address": "Blore"
    },
    {
      "id": 4,
      "firstName": "Monica",
      "lastName": "Geller",
      "gender": "female",
      "address": "some address"
    },
    {
      "id": 5,
      "firstName": "Ross",
      "lastName": "Geller",
      "gender": "male",
      "address": "some address "
    }];
    await TestBed.configureTestingModule({
      declarations: [ CustomersComponent, CustomersCardComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // <app-customers></app-customers>
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should create 3 cards", () => {
    component.customers = component.complete = customers;
    fixture.detectChanges(); // angular rendering

    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(3);
  })

  
  it("should delete a customer", () => {
    component.customers = component.complete = customers;
    component.deleteCustomerData(4);
    fixture.detectChanges(); // angular rendering

    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(2);
  })
  
});

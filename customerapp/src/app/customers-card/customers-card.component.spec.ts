import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCardComponent } from './customers-card.component';

describe('CustomersCardComponent', () => {
  let component: CustomersCardComponent;
  let fixture: ComponentFixture<CustomersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input() render a card', () => {
    expect(component).toBeTruthy();
    component.customers  = [{
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
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(3);
  });

  it('tesing @Output()', () => {
    component.customers  = [{
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
    fixture.detectChanges();
    const deleteCustomerData = spyOn(component.delEvent, 'emit');
    let delBtn = fixture.nativeElement.querySelectorAll(".fa-trash");
    delBtn[0].click();
    expect(deleteCustomerData).toHaveBeenCalled();
    expect(deleteCustomerData).toHaveBeenCalledWith(1);
  });

});

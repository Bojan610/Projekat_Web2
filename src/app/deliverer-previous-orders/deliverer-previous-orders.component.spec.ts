import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererPreviousOrdersComponent } from './deliverer-previous-orders.component';

describe('DelivererPreviousOrdersComponent', () => {
  let component: DelivererPreviousOrdersComponent;
  let fixture: ComponentFixture<DelivererPreviousOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivererPreviousOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererPreviousOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

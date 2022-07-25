import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererCurrentOrderComponent } from './deliverer-current-order.component';

describe('DelivererCurrentOrderComponent', () => {
  let component: DelivererCurrentOrderComponent;
  let fixture: ComponentFixture<DelivererCurrentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivererCurrentOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

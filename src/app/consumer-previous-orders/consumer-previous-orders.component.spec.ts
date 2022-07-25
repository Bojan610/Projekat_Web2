import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPreviousOrdersComponent } from './consumer-previous-orders.component';

describe('ConsumerPreviousOrdersComponent', () => {
  let component: ConsumerPreviousOrdersComponent;
  let fixture: ComponentFixture<ConsumerPreviousOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerPreviousOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPreviousOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

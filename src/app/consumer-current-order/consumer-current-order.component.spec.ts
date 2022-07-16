import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCurrentOrderComponent } from './consumer-current-order.component';

describe('ConsumerCurrentOrderComponent', () => {
  let component: ConsumerCurrentOrderComponent;
  let fixture: ComponentFixture<ConsumerCurrentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerCurrentOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

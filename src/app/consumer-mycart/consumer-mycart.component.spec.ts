import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerMycartComponent } from './consumer-mycart.component';

describe('ConsumerMycartComponent', () => {
  let component: ConsumerMycartComponent;
  let fixture: ComponentFixture<ConsumerMycartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerMycartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerMycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

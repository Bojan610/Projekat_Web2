import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererHomeComponent } from './deliverer-home.component';

describe('DelivererHomeComponent', () => {
  let component: DelivererHomeComponent;
  let fixture: ComponentFixture<DelivererHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivererHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

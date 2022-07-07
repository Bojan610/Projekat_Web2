import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliverersComponent } from './admin-deliverers.component';

describe('AdminDeliverersComponent', () => {
  let component: AdminDeliverersComponent;
  let fixture: ComponentFixture<AdminDeliverersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeliverersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeliverersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

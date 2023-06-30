import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDetailsComponent } from './employe-details.component';

describe('EmployeDetailsComponent', () => {
  let component: EmployeDetailsComponent;
  let fixture: ComponentFixture<EmployeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

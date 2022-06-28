import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChildCComponent } from './employee-child-c.component';

describe('EmployeeChildCComponent', () => {
  let component: EmployeeChildCComponent;
  let fixture: ComponentFixture<EmployeeChildCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeChildCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeChildCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

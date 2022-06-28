import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeaturesCComponent } from './employee-features-c.component';

describe('EmployeeFeaturesCComponent', () => {
  let component: EmployeeFeaturesCComponent;
  let fixture: ComponentFixture<EmployeeFeaturesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFeaturesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFeaturesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

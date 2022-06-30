import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorCComponent } from './custom-error-c.component';

describe('CustomErrorCComponent', () => {
  let component: CustomErrorCComponent;
  let fixture: ComponentFixture<CustomErrorCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomErrorCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomErrorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

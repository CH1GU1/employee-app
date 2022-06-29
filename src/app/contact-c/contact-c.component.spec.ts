import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCComponent } from './contact-c.component';

describe('ContactCComponent', () => {
  let component: ContactCComponent;
  let fixture: ComponentFixture<ContactCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

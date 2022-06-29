import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoareCComponent } from './whoare-c.component';

describe('WhoareCComponent', () => {
  let component: WhoareCComponent;
  let fixture: ComponentFixture<WhoareCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoareCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoareCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

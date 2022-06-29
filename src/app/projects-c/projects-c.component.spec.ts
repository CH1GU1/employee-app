import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCComponent } from './projects-c.component';

describe('ProjectsCComponent', () => {
  let component: ProjectsCComponent;
  let fixture: ComponentFixture<ProjectsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

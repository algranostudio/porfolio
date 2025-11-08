import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEducation } from './project-education';

describe('ProjectEducation', () => {
  let component: ProjectEducation;
  let fixture: ComponentFixture<ProjectEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

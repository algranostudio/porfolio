import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHospitality } from './project-hospitality';

describe('ProjectHospitality', () => {
  let component: ProjectHospitality;
  let fixture: ComponentFixture<ProjectHospitality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHospitality]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHospitality);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

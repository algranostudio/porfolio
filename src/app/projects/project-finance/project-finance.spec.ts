import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFinance } from './project-finanza';

describe('ProjectFinanza', () => {
  let component: ProjectFinance;
  let fixture: ComponentFixture<ProjectFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFinance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFinance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

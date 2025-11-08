import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEcommerce } from './project-ecommerce';

describe('ProjectEcommerce', () => {
  let component: ProjectEcommerce;
  let fixture: ComponentFixture<ProjectEcommerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEcommerce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEcommerce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSectionComponent } from './projects-section.component';

describe('ProjectsSectionComponent', () => {
  let component: ProjectsSectionComponent;
  let fixture: ComponentFixture<ProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

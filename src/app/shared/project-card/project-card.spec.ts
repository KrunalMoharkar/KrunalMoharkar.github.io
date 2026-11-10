import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';
import { PROJECTS } from '../../core/data/projects.data';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', PROJECTS[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

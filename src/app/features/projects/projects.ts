
import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly projects = PROJECTS;
}


import { Component, signal } from '@angular/core';

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  readonly skillCategories = signal<SkillCategory[]>([
    {
      title: 'Backend Development',
      skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs']
    },
    {
      title: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git']
    },
    {
      title: 'AI & Developer Tools',
      skills: ['Claude Code','GitHub Copilot','Codex']
    }
  ]);

}

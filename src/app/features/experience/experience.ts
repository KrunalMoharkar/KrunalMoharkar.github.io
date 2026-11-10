import { Component } from '@angular/core';
import { EXPERIENCES } from '../../core/data/experience.data';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  readonly experiences = EXPERIENCES;
}

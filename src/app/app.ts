
import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { Credentials } from './features/credentials/credentials';
import { Contact } from './features/contact/contact';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Credentials,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

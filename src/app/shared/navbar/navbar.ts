import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
}

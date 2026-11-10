
import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly profile = PROFILE;
  readonly currentYear = new Date().getFullYear();
}

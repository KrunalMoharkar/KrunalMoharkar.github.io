
import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  readonly profile = PROFILE;

  readonly emailSubject =
    'Professional Opportunity - Krunal Moharkar';

  get emailLink(): string {
    return `mailto:${this.profile.email}?subject=${
      encodeURIComponent(this.emailSubject)
    }`;
  }
}

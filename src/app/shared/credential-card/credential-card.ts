
import { Component, input } from '@angular/core';
import { Credential } from '../../core/models/credential.model';

@Component({
  selector: 'app-credential-card',
  imports: [],
  templateUrl: './credential-card.html',
  styleUrl: './credential-card.css'
})
export class CredentialCard {
  readonly credential = input.required<Credential>();
}

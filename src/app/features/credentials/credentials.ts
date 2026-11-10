
import { Component } from '@angular/core';
import { CredentialCard } from '../../shared/credential-card/credential-card';

import {
  EDUCATION,
  CREDENTIALS
} from '../../core/data/credentials.data';

@Component({
  selector: 'app-credentials',
  imports: [CredentialCard],
  templateUrl: './credentials.html',
  styleUrl: './credentials.css'
})
export class Credentials {
  readonly education = EDUCATION;
  readonly credentials = CREDENTIALS;
}

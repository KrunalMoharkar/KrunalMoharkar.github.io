import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredentialCard } from './credential-card';
import { CREDENTIALS } from '../../core/data/credentials.data';

describe('CredentialCard', () => {
  let component: CredentialCard;
  let fixture: ComponentFixture<CredentialCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CredentialCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('credential', CREDENTIALS[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches themes and updates the accessible action label', async () => {
    component.themeService.setTheme('dark');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.getAttribute('aria-label')).toBe('Switch to Warm Light theme');
    button.click();
    await fixture.whenStable();
    expect(component.themeService.theme()).toBe('light');
    expect(button.getAttribute('aria-label')).toBe('Switch to Dark Premium theme');
    component.themeService.setTheme('dark');
  });
});

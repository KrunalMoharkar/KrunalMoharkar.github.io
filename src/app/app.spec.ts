import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Krunal Moharkar');
  });

  it('keeps section navigation, project cards, social links and resume downloads', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    for (const anchor of page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      const href = anchor.getAttribute('href')!;
      if (href !== '#') expect(page.querySelector(href)).toBeTruthy();
    }
    expect(page.querySelectorAll('app-project-card').length).toBe(2);
    expect(page.querySelector('a[href="https://github.com/krunalM05"]')).toBeTruthy();
    expect(page.querySelector('a[href="https://www.linkedin.com/in/krunalmoharkar"]')).toBeTruthy();
    expect(page.querySelector('a[href^="mailto:krunal.moharkar@gmail.com"]')).toBeTruthy();
    const downloads = page.querySelectorAll<HTMLAnchorElement>('a[download]');
    expect(downloads.length).toBe(3);
    for (const download of downloads) {
      expect(download.getAttribute('href')).toBe('/Krunal-Moharkar-Resume.pdf');
    }
  });
});

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'dark' | 'light';
export const THEME_STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly selectedTheme = signal<Theme>('dark');
  readonly theme = this.selectedTheme.asReadonly();

  constructor() {
    if (!this.isBrowser) return;
    let theme: Theme = this.document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark';
    try {
      theme = this.document.defaultView?.localStorage.getItem(THEME_STORAGE_KEY) === 'light'
        ? 'light' : 'dark';
    } catch {
      // Storage may be unavailable; retain the early bootstrap theme.
    }
    this.setTheme(theme);
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.selectedTheme.set(theme);
    if (!this.isBrowser) return;
    this.document.documentElement.dataset['theme'] = theme;
    try {
      this.document.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Theme switching still works when persistence is blocked.
    }
  }
}

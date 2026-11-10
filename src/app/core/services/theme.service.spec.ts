import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeService, THEME_STORAGE_KEY } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.dataset['theme'] = 'dark';
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    document.documentElement.dataset['theme'] = 'dark';
  });

  it('defaults to dark and toggles the signal, document and stored preference', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
    service.toggle();
    expect(service.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    service.toggle();
    expect(service.theme()).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('restores a saved light preference after service recreation', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    expect(TestBed.inject(ThemeService).theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('uses dark for an invalid saved preference', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'unknown');
    expect(TestBed.inject(ThemeService).theme()).toBe('dark');
  });

  it('can switch themes when storage reads and writes fail', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
    const service = TestBed.inject(ThemeService);
    expect(() => service.toggle()).not.toThrow();
    expect(service.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('does not access the document or storage on the server', () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    TestBed.overrideProvider(DOCUMENT, { useValue: {} });
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
    expect(() => service.toggle()).not.toThrow();
  });
});

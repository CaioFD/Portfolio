import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'pt';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readInitial());

  toggle(): void {
    this.set(this.lang() === 'en' ? 'pt' : 'en');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage unavailable, ignore */
    }
  }

  private readInitial(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'pt') return saved;
    } catch {
      /* localStorage unavailable, ignore */
    }
    return 'en';
  }
}

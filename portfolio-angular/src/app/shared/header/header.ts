import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

const CONTENT = {
  en: {
    portfolio: 'Portfolio',
    experience: 'Experience',
    projects: 'Projects',
    technicalSkills: 'Technical Skills',
    education: 'Education',
    contactMe: 'Contact me',
  },
  pt: {
    portfolio: 'Portfólio',
    experience: 'Experiência',
    projects: 'Projetos',
    technicalSkills: 'Habilidades Técnicas',
    education: 'Educação',
    contactMe: 'Contate-me',
  },
};

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private readonly i18n = inject(LanguageService);

  readonly lang = this.i18n.lang;
  readonly content = computed(() => CONTENT[this.i18n.lang()]);
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLanguage(): void {
    this.i18n.toggle();
  }
}

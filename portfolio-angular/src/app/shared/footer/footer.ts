import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

const CONTENT = {
  en: {
    aboutMe: 'About me',
    contact: 'Contact',
    rights: 'All rights reserved',
  },
  pt: {
    aboutMe: 'Sobre mim',
    contact: 'Contato',
    rights: 'Todos os direitos reservados',
  },
};

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  private readonly i18n = inject(LanguageService);

  readonly variant = input<'light' | 'dark'>('dark');
  readonly content = computed(() => CONTENT[this.i18n.lang()]);
  readonly year = new Date().getFullYear();
}

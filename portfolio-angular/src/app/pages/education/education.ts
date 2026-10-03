import { Component, computed, inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { InfoCard } from '../../shared/info-card/info-card';
import { LanguageService } from '../../core/i18n/language.service';

interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  status: string;
}

const CONTENT: Record<'en' | 'pt', { heading: string; headingSpan: string; education: EducationEntry[] }> = {
  en: {
    heading: 'My',
    headingSpan: 'Education',
    education: [
      {
        title: 'High School',
        institution: 'Sesi - Alvimar Carneiro de Resende',
        period: '2019 - 2021',
        status: 'Completed',
      },
      {
        title: 'Technical Diploma - Electronics',
        institution: 'Senai - Alvimar Carneiro de Resende',
        period: '2019 - 2021',
        status: 'Completed',
      },
      {
        title: 'Computer Science',
        institution: 'Pontifical Catholic University of Minas Gerais (PUC Minas)',
        period: '2022 - Present',
        status: 'In progress',
      },
      {
        title: 'Academic Exchange Program',
        institution: 'Epitech - Paris, France',
        period: 'September 2026',
        status: 'In progress',
      },
    ],
  },
  pt: {
    heading: 'Minha',
    headingSpan: 'Educação',
    education: [
      {
        title: 'Ensino Médio',
        institution: 'Sesi - Alvimar Carneiro de Resende',
        period: '2019 - 2021',
        status: 'Concluído',
      },
      {
        title: 'Técnico - Eletrônica',
        institution: 'Senai - Alvimar Carneiro de Resende',
        period: '2019 - 2021',
        status: 'Concluído',
      },
      {
        title: 'Ciência da Computação',
        institution: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
        period: '2022 - Atual',
        status: 'Em andamento',
      },
      {
        title: 'Programa de Intercâmbio Acadêmico',
        institution: 'Epitech - Paris, França',
        period: 'Setembro de 2026',
        status: 'Em andamento',
      },
    ],
  },
};

@Component({
  imports: [Footer, InfoCard],
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  private readonly i18n = inject(LanguageService);

  readonly content = computed(() => CONTENT[this.i18n.lang()]);
}

import { Component, computed, inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { SkillCard, SkillTag } from '../../shared/skill-card/skill-card';
import { LanguageService } from '../../core/i18n/language.service';

interface SkillGroup {
  icon: string;
  title: string;
  tags: SkillTag[];
  description: string;
}

const CONTENT: Record<
  'en' | 'pt',
  { heading: string; headingSpan: string; intro: string; skills: SkillGroup[] }
> = {
  en: {
    heading: 'Technical',
    headingSpan: 'Skills',
    intro:
      'Technologies and areas I have worked with, with emphasis on my professional experience and applied projects.',
    skills: [
      {
        icon: 'bx bx-server',
        title: 'Backend',
        tags: [
          { label: 'C# / .NET', featured: true },
          { label: 'Java' },
          { label: 'Go' },
          { label: 'C' },
        ],
        description: 'Professional backend work with C#/.NET and Java.',
      },
      {
        icon: 'bx bx-code-alt',
        title: 'Frontend',
        tags: [{ label: 'Angular', featured: true }],
        description: 'Professional experience focused on frontend development.',
      },
      {
        icon: 'bx bx-mobile-alt',
        title: 'Mobile',
        tags: [{ label: 'Flutter / Dart', featured: true }, { label: 'Android' }],
        description: 'Led cross-platform mobile app development.',
      },
      {
        icon: 'bx bx-brain',
        title: 'Artificial Intelligence',
        tags: [{ label: 'Python' }],
        description:
          'Applied in an academic project for document extraction and validation.',
      },
    ],
  },
  pt: {
    heading: 'Habilidades',
    headingSpan: 'Técnicas',
    intro:
      'Tecnologias e áreas com as quais já trabalhei, com ênfase na minha experiência profissional e projetos aplicados.',
    skills: [
      {
        icon: 'bx bx-server',
        title: 'Backend',
        tags: [
          { label: 'C# / .NET', featured: true },
          { label: 'Java' },
          { label: 'Go' },
          { label: 'C' },
        ],
        description: 'Atuação profissional em backend com C#/.NET e Java.',
      },
      {
        icon: 'bx bx-code-alt',
        title: 'Frontend',
        tags: [{ label: 'Angular', featured: true }],
        description: 'Experiência profissional focada em desenvolvimento frontend.',
      },
      {
        icon: 'bx bx-mobile-alt',
        title: 'Mobile',
        tags: [{ label: 'Flutter / Dart', featured: true }, { label: 'Android' }],
        description: 'Liderança no desenvolvimento de aplicativos mobile multiplataforma.',
      },
      {
        icon: 'bx bx-brain',
        title: 'Inteligência Artificial',
        tags: [{ label: 'Python' }],
        description:
          'Aplicado em um projeto acadêmico de extração e validação de documentos.',
      },
    ],
  },
};

@Component({
  imports: [Footer, SkillCard],
  selector: 'app-technical-skills',
  styleUrl: './technical-skills.css',
  templateUrl: './technical-skills.html',
})
export class TechnicalSkills {
  private readonly i18n = inject(LanguageService);

  readonly content = computed(() => CONTENT[this.i18n.lang()]);
}

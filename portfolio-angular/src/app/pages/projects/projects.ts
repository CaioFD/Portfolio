import { Component, computed, inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { InfoCard } from '../../shared/info-card/info-card';
import { SkillTag } from '../../shared/skill-card/skill-card';
import { LanguageService } from '../../core/i18n/language.service';

interface ProjectEntry {
  title: string;
  description: string;
  url: string;
  tags: SkillTag[];
}

const PROJECT_TAGS = {
  goPlay: [{ label: 'HTML' }, { label: 'CSS' }, { label: 'JavaScript' }],
  moveSmart: [
    { label: 'Java', featured: true },
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
  ],
  showCoin: [{ label: 'Flutter', featured: true }, { label: 'Dart' }],
  echoesOfEldra: [{ label: 'Unity', featured: true }, { label: 'C#' }],
  pai: [
    { label: 'Python', featured: true },
    { label: 'PyTorch' },
    { label: 'Tkinter' },
  ],
} satisfies Record<string, SkillTag[]>;

const CONTENT: Record<'en' | 'pt', { heading: string; headingSpan: string; projects: ProjectEntry[] }> = {
  en: {
    heading: 'My',
    headingSpan: 'Projects',
    projects: [
      {
        title: 'TI1-GoPlay:',
        description:
          'A web project that helps people find others with similar interests in sports and connect with like-minded people.',
        url: 'https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20222-01-procurar-pessoas-para-esportes',
        tags: PROJECT_TAGS.goPlay,
      },
      {
        title: 'TI2-MoveSmart:',
        description:
          'A web project focused on improving the public transportation user experience, with an emphasis on back-end development.',
        url: 'https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2024-1-g02-movesmart',
        tags: PROJECT_TAGS.moveSmart,
      },
      {
        title: 'LDDM-ShowCoin:',
        description:
          'A mobile app project that lets you manage your finances conveniently and automatically by scanning receipts and tracking expenses intelligently.',
        url: 'https://github.com/vinimiraa/LDDM-ShowCoin',
        tags: PROJECT_TAGS.showCoin,
      },
      {
        title: 'TI4-Echoes of Eldra:',
        description:
          'A tactical roguelike game featuring adaptive AI and procedurally generated mazes.',
        url: 'https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti4-2025-1-g03-echoes-of-eldra',
        tags: PROJECT_TAGS.echoesOfEldra,
      },
      {
        title: 'Image design and analysis',
        description:
          'A desktop application for BIRADS-classified mammogram analysis, featuring automatic breast segmentation, ResNet-18 and EfficientNet classification, model evaluation, and Grad-CAM visualizations in a Tkinter interface.',
        url: 'https://github.com/CaioFD/PAI',
        tags: PROJECT_TAGS.pai,
      },
    ],
  },
  pt: {
    heading: 'Meus',
    headingSpan: 'Projetos',
    projects: [
      {
        title: 'TI1-GoPlay:',
        description:
          'Um projeto web que ajuda pessoas a encontrarem outras com interesses esportivos parecidos e se conectarem.',
        url: 'https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20222-01-procurar-pessoas-para-esportes',
        tags: PROJECT_TAGS.goPlay,
      },
      {
        title: 'TI2-MoveSmart:',
        description:
          'Um projeto web focado em melhorar a experiência do usuário no transporte público, com ênfase em desenvolvimento back-end.',
        url: 'https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2024-1-g02-movesmart',
        tags: PROJECT_TAGS.moveSmart,
      },
      {
        title: 'LDDM-ShowCoin:',
        description:
          'Um aplicativo mobile que permite gerenciar suas finanças de forma prática e automática, escaneando notas fiscais e acompanhando gastos de forma inteligente.',
        url: 'https://github.com/vinimiraa/LDDM-ShowCoin',
        tags: PROJECT_TAGS.showCoin,
      },
      {
        title: 'TI4-Echoes of Eldra:',
        description:
          'Um jogo roguelike tático com IA adaptativa e labirintos gerados proceduralmente.',
        url: 'https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti4-2025-1-g03-echoes-of-eldra',
        tags: PROJECT_TAGS.echoesOfEldra,
      },
      {
        title: 'Design e análise de imagem',
        description:
          'Uma aplicação desktop para análise de mamografias classificadas por BIRADS, com segmentação automática da mama, classificação com ResNet-18 e EfficientNet, avaliação de modelos e visualizações Grad-CAM em uma interface Tkinter.',
        url: 'https://github.com/CaioFD/PAI',
        tags: PROJECT_TAGS.pai,
      },
    ],
  },
};

@Component({
  imports: [Footer, InfoCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  private readonly i18n = inject(LanguageService);

  readonly content = computed(() => CONTENT[this.i18n.lang()]);
}

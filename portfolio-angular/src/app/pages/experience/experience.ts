import { Component, computed, inject, signal } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { LanguageService } from '../../core/i18n/language.service';

interface ExperienceEntry {
  title: string;
  company: string;
  type: string;
  location: string;
  responsibilities: string[];
  period: string;
}

const CONTENT: Record<'en' | 'pt', { heading: string; headingSpan: string; experiences: ExperienceEntry[] }> = {
  en: {
    heading: 'My',
    headingSpan: 'Experience',
    experiences: [
      {
        title: 'Software Development Intern',
        company: 'Localiza&Co',
        type: 'Internship',
        location: 'Belo Horizonte, Minas Gerais, Brazil · Hybrid',
        responsibilities: [
          'Work on software analysis and development, with a strong focus on back-end development using C# and .NET Core.',
          'Design, build, and deploy applications using Docker and Kubernetes, with a focus on scalability, reliability, and performance.',
          'Manage development workflows using Azure DevOps, including project organization, task tracking, and repositories.',
          'Apply Gitflow for version control and structured team collaboration.',
          'Contribute to event-driven architectures using Event Sourcing and RabbitMQ.',
          'Participate in agile ceremonies and workflows following the Scrum methodology.',
        ],
        period: 'Feb 2026 - Sep 2026 · 8 months',
      },
      {
        title: 'Software Development Intern',
        company: 'Group Software',
        type: 'Internship',
        location: 'Belo Horizonte, Minas Gerais, Brazil · On-site',
        responsibilities: [
          'Worked as a full-stack software development intern, with a primary focus on front-end development using Angular.',
          'Took a leading role in mobile application development using Flutter and Dart.',
          'Developed and maintained cross-platform mobile applications, focusing on performance, usability, and clean code practices.',
          'Developed responsive user interfaces, reusable components, and integrated RESTful APIs.',
          'Contributed to the Java back-end by implementing services and business logic.',
          'Fixed bugs, improved application performance, and refactored code.',
          'Used Git for version control and collaborated with cross-functional teams in an agile environment.',
        ],
        period: 'Sep 2025 - Jan 2026 · 5 months',
      },
      {
        title: 'Undergraduate Research Project',
        company: 'Sólides',
        type: 'Part-time',
        location: 'Belo Horizonte, Minas Gerais, Brazil · Remote',
        responsibilities: [
          'Developed an intelligent agent for the automatic extraction and validation of medical certificates.',
          'Applied artificial intelligence techniques using Python.',
          'Participated in all project phases: problem analysis, solution design, implementation, and validation.',
          'Built document-processing pipelines for data extraction and automation.',
          'Explored information extraction, data reliability, and process automation techniques.',
          'Strengthened skills in applied research, critical analysis, and technical communication.',
        ],
        period: 'Jan 2025 - Dec 2025 · 1 year',
      },
      {
        title: 'Telecommunications Intern',
        company: 'Century',
        type: 'Internship',
        location: 'Contagem, Minas Gerais, Brazil · Hybrid',
        responsibilities: [
          'Worked in networking and telecommunications, supporting infrastructure operations.',
          'Participated in the deployment of corporate voice systems, ensuring reliable and efficient communication.',
          'Performed proactive network monitoring to identify and resolve potential issues.',
          'Assisted with firewall configuration and maintenance, contributing to corporate network security.',
          'Supported service continuity and the protection of sensitive organizational data.',
        ],
        period: 'Apr 2024 - Apr 2025 · 1 year 1 month',
      },
    ],
  },
  pt: {
    heading: 'Minha',
    headingSpan: 'Experiência',
    experiences: [
      {
        title: 'Estagiário de Desenvolvimento de Software',
        company: 'Localiza&Co',
        type: 'Estágio',
        location: 'Belo Horizonte, Minas Gerais, Brasil · Híbrido',
        responsibilities: [
          'Atuação em análise e desenvolvimento de software, com forte foco em back-end utilizando C# e .NET Core.',
          'Design, construção e implantação de aplicações usando Docker e Kubernetes, com foco em escalabilidade, confiabilidade e desempenho.',
          'Gerenciamento de fluxos de desenvolvimento usando Azure DevOps, incluindo organização de projetos, acompanhamento de tarefas e repositórios.',
          'Aplicação do Gitflow para controle de versão e colaboração estruturada em equipe.',
          'Contribuição em arquiteturas orientadas a eventos utilizando Event Sourcing e RabbitMQ.',
          'Participação em cerimônias e fluxos ágeis seguindo a metodologia Scrum.',
        ],
        period: 'Fev 2026 - Set 2026 · 8 meses',
      },
      {
        title: 'Estagiário de Desenvolvimento de Software',
        company: 'Group Software',
        type: 'Estágio',
        location: 'Belo Horizonte, Minas Gerais, Brasil · Presencial',
        responsibilities: [
          'Atuação como estagiário full-stack, com foco principal em desenvolvimento front-end usando Angular.',
          'Papel de destaque no desenvolvimento de aplicações mobile usando Flutter e Dart.',
          'Desenvolvimento e manutenção de aplicações mobile multiplataforma, com foco em desempenho, usabilidade e boas práticas de código limpo.',
          'Desenvolvimento de interfaces responsivas, componentes reutilizáveis e integração de APIs RESTful.',
          'Contribuição no back-end em Java implementando serviços e regras de negócio.',
          'Correção de bugs, melhoria de desempenho da aplicação e refatoração de código.',
          'Uso do Git para controle de versão e colaboração com equipes multidisciplinares em ambiente ágil.',
        ],
        period: 'Set 2025 - Jan 2026 · 5 meses',
      },
      {
        title: 'Projeto de Iniciação Científica',
        company: 'Sólides',
        type: 'Meio período',
        location: 'Belo Horizonte, Minas Gerais, Brasil · Remoto',
        responsibilities: [
          'Desenvolvimento de um agente inteligente para extração e validação automática de atestados médicos.',
          'Aplicação de técnicas de inteligência artificial usando Python.',
          'Participação em todas as fases do projeto: análise do problema, desenho da solução, implementação e validação.',
          'Construção de pipelines de processamento de documentos para extração e automação de dados.',
          'Estudo de técnicas de extração de informação, confiabilidade de dados e automação de processos.',
          'Fortalecimento de habilidades em pesquisa aplicada, análise crítica e comunicação técnica.',
        ],
        period: 'Jan 2025 - Dez 2025 · 1 ano',
      },
      {
        title: 'Estagiário de Telecomunicações',
        company: 'Century',
        type: 'Estágio',
        location: 'Contagem, Minas Gerais, Brasil · Híbrido',
        responsibilities: [
          'Atuação em redes e telecomunicações, apoiando operações de infraestrutura.',
          'Participação na implantação de sistemas de voz corporativos, garantindo comunicação confiável e eficiente.',
          'Monitoramento proativo de rede para identificar e resolver possíveis problemas.',
          'Apoio na configuração e manutenção de firewall, contribuindo para a segurança da rede corporativa.',
          'Suporte à continuidade dos serviços e à proteção de dados sensíveis da organização.',
        ],
        period: 'Abr 2024 - Abr 2025 · 1 ano e 1 mês',
      },
    ],
  },
};

@Component({
  imports: [Footer],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  private readonly i18n = inject(LanguageService);

  readonly content = computed(() => CONTENT[this.i18n.lang()]);
  readonly expandedIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }
}

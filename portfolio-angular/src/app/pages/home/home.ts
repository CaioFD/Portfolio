import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { LanguageService } from '../../core/i18n/language.service';

const CONTENT = {
  en: {
    hello: 'Hello,',
    namePrefix: 'My name is',
    name: 'Caio Diniz',
    role: "I'm a full-stack Developer",
    intro:
      "Welcome to my portfolio! Here you'll find a collection of my latest and most challenging projects, driven by my passion for technology, innovation, and development. Focused on practical and creative solutions, each project reflects my commitment to excellence and continuous improvement.",
    downloadCv: 'Download CV',
    cvFile: 'assets/CV-CaioDiniz-EN.pdf',
    aboutHeading: 'About',
    aboutHeadingSpan: 'Me',
    aboutSubtitle: 'Full-stack',
    aboutSubtitleSpan: 'Developer',
    aboutParagraphs: [
      'I am a Computer Science student passionate about technology, innovation, and developing intelligent solutions. I have solid programming skills in Python, Java, Go, C, and C#, as well as experience with full-stack, web, and mobile development (Flutter and Android), software development, and artificial intelligence through academic projects.',
      'Proactive, creative, and results-oriented, I have gained experience in requirements analysis, information security fundamentals, and project leadership, always focusing on teamwork and effective communication.',
      'I constantly strive to improve my technical and interpersonal skills, with the goal of working in areas such as software development, artificial intelligence, and cybersecurity. I aim to contribute to challenging projects in collaborative and innovative environments while continuing to grow professionally and support digital transformation.',
    ],
    technicalSkills: 'Technical Skills',
    projects: 'Projects',
  },
  pt: {
    hello: 'Olá,',
    namePrefix: 'Meu nome é',
    name: 'Caio Diniz',
    role: 'Sou desenvolvedor full-stack',
    intro:
      'Bem-vindo ao meu portfólio! Aqui você encontra uma coleção dos meus projetos mais recentes e desafiadores, movidos pela minha paixão por tecnologia, inovação e desenvolvimento. Focado em soluções práticas e criativas, cada projeto reflete meu compromisso com a excelência e a melhoria contínua.',
    downloadCv: 'Baixar Currículo',
    cvFile: 'assets/CV-CaioDiniz-PT.pdf',
    aboutHeading: 'Sobre',
    aboutHeadingSpan: 'Mim',
    aboutSubtitle: 'Desenvolvedor',
    aboutSubtitleSpan: 'Full-stack',
    aboutParagraphs: [
      'Sou estudante de Ciência da Computação apaixonado por tecnologia, inovação e desenvolvimento de soluções inteligentes. Tenho sólidos conhecimentos de programação em Python, Java, Go, C e C#, além de experiência com desenvolvimento full-stack, web e mobile (Flutter e Android), engenharia de software e inteligência artificial através de projetos acadêmicos.',
      'Proativo, criativo e orientado a resultados, tenho experiência em análise de requisitos, fundamentos de segurança da informação e liderança de projetos, sempre priorizando o trabalho em equipe e a comunicação eficaz.',
      'Busco constantemente aprimorar minhas competências técnicas e interpessoais, com o objetivo de atuar em áreas como desenvolvimento de software, inteligência artificial e cibersegurança. Meu objetivo é contribuir para projetos desafiadores em ambientes colaborativos e inovadores, enquanto continuo crescendo profissionalmente e apoiando a transformação digital.',
    ],
    technicalSkills: 'Habilidades Técnicas',
    projects: 'Projetos',
  },
};

@Component({
  imports: [RouterLink, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly i18n = inject(LanguageService);

  readonly content = computed(() => CONTENT[this.i18n.lang()]);
}

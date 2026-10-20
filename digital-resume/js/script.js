(() => {
  'use strict';

  /* ---------- i18n ---------- */
  const LANG_KEY = 'digital-resume-lang';

  const CONTENT = {
    en: {
      nav: { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', education: 'Education', contact: 'Contact' },
      common: { downloadCV: 'Download CV', getInTouch: 'Get in touch' },
      hero: {
        eyebrow: "Hello, I'm",
        roles: ['Computer Science Student', 'Full-Stack Developer', 'Software Engineer', 'AI & Cybersecurity Enthusiast'],
        locations: ['Belo Horizonte, MG — Brazil', 'Paris, France']
      },
      about: {
        title: 'About Me',
        paragraph1: 'Computer Science student with a strong interest in technology, innovation, and the development of intelligent and scalable solutions. Solid programming skills in Python, Java, C, C# and C++, with experience in full-stack development, web and mobile application development (Flutter, Android), and software engineering.',
        paragraph2: 'My academic and applied projects gave me hands-on experience in artificial intelligence, letting me apply theoretical concepts to real problems. I bring a proactive, analytical and results-driven mindset, foundational knowledge in information security, and a strong focus on teamwork, clear communication and technical rigor — always aiming to contribute to impactful, collaborative projects.'
      },
      skills: { title: 'Skills', programmingLanguages: 'Programming Languages', toolsPlatforms: 'Tools & Platforms' },
      softSkills: {
        heading: 'Soft Skills',
        languagesHeading: 'Languages',
        lang: { pt: 'Portuguese', en: 'English', fr: 'French (Learning)' },
        tags: ['Logical & analytical thinking', 'Leadership', 'Teamwork', 'Continuous learning', 'Creative thinking']
      },
      experience: {
        title: 'Experience',
        jobs: [
          {
            role: 'Software Development Intern',
            company: 'Localiza · Asset Regularization and Legal Team · Belo Horizonte, Brazil',
            bullets: [
              'Developed and maintained back-end applications using C# and .NET Core.',
              'Built and deployed applications with Docker and Kubernetes; managed workflows via Azure DevOps.',
              'Applied Gitflow best practices and contributed to event-driven architectures using RabbitMQ and Event Sourcing.',
              'Actively participated in agile ceremonies following the Scrum methodology.'
            ]
          },
          {
            role: 'Software Development Intern',
            company: 'Group Software · RHTECH Team · Belo Horizonte, Brazil',
            bullets: [
              'Developed and maintained web and mobile applications for the Human Resources sector.',
              'Implemented features, fixed bugs, tested, and monitored deployment cycles.',
              'Collaborated with the team on continuous improvements in performance and usability.'
            ]
          },
          {
            role: 'Project Engineering Intern',
            company: 'Century Telecom · Voice Corporate Team · Contagem, Brazil',
            bullets: [
              'Implementation of voice systems including analog technologies, R2 Digital, and SIP PBX solutions.',
              'Worked in the networking area using PHIPAM, SUMMIT, and Multi PuTTY Manager.'
            ]
          }
        ]
      },
      projects: {
        title: 'Projects',
        items: [
          {
            role: 'Undergraduate Research Project',
            company: 'Sólides · Part-time · Belo Horizonte, MG — Brazil (Remote)',
            bullets: [
              'Developed an intelligent agent for the automatic extraction and validation of medical certificates.',
              'Applied Artificial Intelligence techniques using Python.',
              'Participated in all project phases: problem analysis, solution design, implementation, and validation.',
              'Built document processing pipelines for data extraction and automation.',
              'Explored information extraction, data reliability, and process automation techniques.',
              'Strengthened skills in applied research, critical analysis, and technical communication.'
            ]
          }
        ]
      },
      education: {
        title: 'Education',
        items: [
          { title: "Bachelor's Degree in Computer Science", desc: 'Pontifical Catholic University of Minas Gerais — Morning Program · Belo Horizonte, Brazil' },
          { title: 'Exchange Program', desc: 'Epitech · Paris, France' }
        ]
      },
      contact: {
        title: 'Get in Touch',
        intro: 'Open to new opportunities and collaborations. Feel free to reach out!',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        form: {
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'Email',
          emailPlaceholder: 'you@example.com',
          subject: 'Subject',
          subjectPlaceholder: 'What is this about?',
          message: 'Message',
          messagePlaceholder: 'Your message...',
          send: 'Send Message',
          sending: 'Sending...',
          success: '✓ Thanks! Your message has been sent.',
          error: 'Something went wrong. Please try again or email me directly.'
        },
        errors: {
          name: 'Please enter your full name.',
          email: 'Please enter a valid email address.',
          subject: 'Subject must be at least 3 characters.',
          message: 'Message must be at least 10 characters.'
        }
      }
    },
    pt: {
      nav: { home: 'Início', about: 'Sobre', skills: 'Habilidades', experience: 'Experiência', projects: 'Projetos', education: 'Educação', contact: 'Contato' },
      common: { downloadCV: 'Baixar CV', getInTouch: 'Entre em contato' },
      hero: {
        eyebrow: 'Olá, eu sou',
        roles: ['Estudante de Ciência da Computação', 'Desenvolvedor Full-Stack', 'Engenheiro de Software', 'Entusiasta de IA e Cibersegurança'],
        locations: ['Belo Horizonte, MG — Brasil', 'Paris, França']
      },
      about: {
        title: 'Sobre Mim',
        paragraph1: 'Estudante de Ciência da Computação com forte interesse em tecnologia, inovação e desenvolvimento de soluções inteligentes e escaláveis. Sólidos conhecimentos de programação em Python, Java, C, C# e C++, com experiência em desenvolvimento full-stack, aplicações web e mobile (Flutter, Android) e engenharia de software.',
        paragraph2: 'Meus projetos acadêmicos e aplicados me deram experiência prática em inteligência artificial, permitindo aplicar conceitos teóricos a problemas reais. Tenho um perfil proativo, analítico e orientado a resultados, conhecimento fundamental em segurança da informação e forte foco em trabalho em equipe, comunicação clara e rigor técnico — sempre buscando contribuir com projetos impactantes e colaborativos.'
      },
      skills: { title: 'Skills', programmingLanguages: 'Linguagens de Programação', toolsPlatforms: 'Ferramentas e Plataformas' },
      softSkills: {
        heading: 'Soft Skills',
        languagesHeading: 'Idiomas',
        lang: { pt: 'Português', en: 'Inglês', fr: 'Francês (Aprendendo)' },
        tags: ['Pensamento lógico e analítico', 'Liderança', 'Trabalho em equipe', 'Aprendizado contínuo', 'Pensamento criativo']
      },
      experience: {
        title: 'Experiência',
        jobs: [
          {
            role: 'Estagiário de Desenvolvimento de Software',
            company: 'Localiza · Equipe de Regularização de Ativos e Jurídico · Belo Horizonte, Brasil',
            bullets: [
              'Desenvolveu e manteve aplicações back-end usando C# e .NET Core.',
              'Construiu e implantou aplicações com Docker e Kubernetes; gerenciou fluxos de trabalho via Azure DevOps.',
              'Aplicou boas práticas de Gitflow e contribuiu para arquiteturas orientadas a eventos usando RabbitMQ e Event Sourcing.',
              'Participou ativamente de cerimônias ágeis seguindo a metodologia Scrum.'
            ]
          },
          {
            role: 'Estagiário de Desenvolvimento de Software',
            company: 'Group Software · Equipe RHTECH · Belo Horizonte, Brasil',
            bullets: [
              'Desenvolveu e manteve aplicações web e mobile para o setor de Recursos Humanos.',
              'Implementou funcionalidades, corrigiu bugs, testou e monitorou ciclos de implantação.',
              'Colaborou com a equipe em melhorias contínuas de performance e usabilidade.'
            ]
          },
          {
            role: 'Estagiário de Engenharia de Projetos',
            company: 'Century Telecom · Equipe Corporativa de Voz · Contagem, Brasil',
            bullets: [
              'Implementação de sistemas de voz incluindo tecnologias analógicas, R2 Digital e soluções SIP PBX.',
              'Atuou na área de redes utilizando PHIPAM, SUMMIT e Multi PuTTY Manager.'
            ]
          }
        ]
      },
      projects: {
        title: 'Projetos',
        items: [
          {
            role: 'Projeto de Iniciação Científica',
            company: 'Sólides · Meio período · Belo Horizonte, MG — Brasil (Remoto)',
            bullets: [
              'Desenvolveu um agente inteligente para extração e validação automática de atestados médicos.',
              'Aplicou técnicas de Inteligência Artificial usando Python.',
              'Participou de todas as fases do projeto: análise do problema, design da solução, implementação e validação.',
              'Construiu pipelines de processamento de documentos para extração de dados e automação.',
              'Explorou técnicas de extração de informação, confiabilidade de dados e automação de processos.',
              'Fortaleceu habilidades em pesquisa aplicada, análise crítica e comunicação técnica.'
            ]
          }
        ]
      },
      education: {
        title: 'Educação',
        items: [
          { title: 'Bacharelado em Ciência da Computação', desc: 'Pontifícia Universidade Católica de Minas Gerais — Período da Manhã · Belo Horizonte, Brasil' },
          { title: 'Programa de Intercâmbio', desc: 'Epitech · Paris, França' }
        ]
      },
      contact: {
        title: 'Entre em Contato',
        intro: 'Aberto a novas oportunidades e colaborações. Fique à vontade para entrar em contato!',
        phoneLabel: 'Telefone',
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        form: {
          name: 'Nome',
          namePlaceholder: 'Seu nome',
          email: 'Email',
          emailPlaceholder: 'voce@exemplo.com',
          subject: 'Assunto',
          subjectPlaceholder: 'Sobre o que é?',
          message: 'Mensagem',
          messagePlaceholder: 'Sua mensagem...',
          send: 'Enviar Mensagem',
          sending: 'Enviando...',
          success: '✓ Obrigado! Sua mensagem foi enviada.',
          error: 'Algo deu errado. Tente novamente ou me envie um email diretamente.'
        },
        errors: {
          name: 'Por favor, informe seu nome completo.',
          email: 'Por favor, informe um email válido.',
          subject: 'O assunto deve ter pelo menos 3 caracteres.',
          message: 'A mensagem deve ter pelo menos 10 caracteres.'
        }
      }
    }
  };

  const getPath = (obj, path) => path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);

  const CV_PATHS = {
    en: 'assets/CV-CaioDiniz-EN.pdf',
    pt: 'assets/CV-CaioDiniz-PT.pdf'
  };
  const cvLinks = document.querySelectorAll('.cv-download');
  const updateCvLinks = () => {
    const path = CV_PATHS[currentLang];
    cvLinks.forEach((link) => {
      link.setAttribute('href', path);
      link.setAttribute('download', path.split('/').pop());
    });
  };

  const langToggle = document.getElementById('langToggle');

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'pt') currentLang = saved;
  } catch (e) { /* storage unavailable */ }

  const applyTranslations = () => {
    const dict = CONTENT[currentLang];
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = getPath(dict, el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const value = getPath(dict, el.dataset.i18nPlaceholder);
      if (typeof value === 'string') el.placeholder = value;
    });

    if (langToggle) langToggle.textContent = currentLang === 'en' ? 'PT' : 'EN';
    updateCvLinks();
  };

  const setLang = (lang) => {
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyTranslations();
    restartTypedEffects();
  };

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLang(currentLang === 'en' ? 'pt' : 'en');
    });
  }

  /* ---------- Theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const THEME_KEY = 'resume-theme';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeToggle.querySelector('.theme-icon').textContent = theme === 'light' ? '☀️' : '🌙';
  };

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  } catch (e) { /* storage unavailable */ }
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Header scroll state + progress bar + active nav ---------- */
  const header = document.getElementById('siteHeader');
  const progressBar = document.getElementById('scrollProgress');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;

    let currentId = sections[0] ? sections[0].id : '';
    const probe = window.scrollY + window.innerHeight * 0.3;
    sections.forEach((section) => {
      if (probe >= section.offsetTop) currentId = section.id;
    });
    if (currentId === 'soft-skills') currentId = 'skills';
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Typed role + location effect ---------- */
  const typedEl = document.getElementById('typedRole');
  const typedLocationEl = document.getElementById('typedLocation');
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let roleTimeoutId = null;

  const typeLoop = () => {
    const roles = CONTENT[currentLang].hero.roles;
    const current = roles[roleIndex % roles.length];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        roleTimeoutId = setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    roleTimeoutId = setTimeout(typeLoop, deleting ? 40 : 80);
  };

  let locationIndex = 0;
  let locationCharIndex = 0;
  let locationDeleting = false;
  let locationTimeoutId = null;

  const typeLocationLoop = () => {
    const locations = CONTENT[currentLang].hero.locations;
    const current = locations[locationIndex % locations.length];
    if (!locationDeleting) {
      locationCharIndex++;
      typedLocationEl.textContent = current.slice(0, locationCharIndex);
      if (locationCharIndex === current.length) {
        locationDeleting = true;
        locationTimeoutId = setTimeout(typeLocationLoop, 2200);
        return;
      }
    } else {
      locationCharIndex--;
      typedLocationEl.textContent = current.slice(0, locationCharIndex);
      if (locationCharIndex === 0) {
        locationDeleting = false;
        locationIndex = (locationIndex + 1) % locations.length;
      }
    }
    locationTimeoutId = setTimeout(typeLocationLoop, locationDeleting ? 40 : 80);
  };

  function restartTypedEffects() {
    if (typedEl) {
      clearTimeout(roleTimeoutId);
      roleIndex = 0;
      charIndex = 0;
      deleting = false;
      typeLoop();
    }
    if (typedLocationEl) {
      clearTimeout(locationTimeoutId);
      locationIndex = 0;
      locationCharIndex = 0;
      locationDeleting = false;
      typeLocationLoop();
    }
  }

  if (typedEl) typeLoop();
  if (typedLocationEl) typeLocationLoop();

  /* ---------- Apply initial translations ---------- */
  applyTranslations();

  /* ---------- Scroll reveal + skill bars + counters ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const barFills = document.querySelectorAll('.bar-fill');
  const counters = document.querySelectorAll('.stat-number');

  const animateCounter = (el) => {
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      if (entry.target.id === 'skills' || entry.target.id === 'soft-skills') {
        barFills.forEach((bar) => bar.classList.add('animate'));
      }
      if (entry.target.id === 'about') {
        counters.forEach(animateCounter);
      }
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => io.observe(el));
  sections.forEach((el) => io.observe(el));

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (form) {
    const EMAILJS_SERVICE_ID = 'service_0ka8kto';
    const EMAILJS_TEMPLATE_ID = 'template_dj9qhxj';
    const EMAILJS_PUBLIC_KEY = 'WWfcMwdLgkTVrn3Rp';
    if (window.emailjs) emailjs.init(EMAILJS_PUBLIC_KEY);

    const submitBtn = form.querySelector('.form-submit');
    const btnText = submitBtn.querySelector('.btn-text');

    const validators = {
      name: (v) => v.trim().length >= 2 || CONTENT[currentLang].contact.errors.name,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || CONTENT[currentLang].contact.errors.email,
      subject: (v) => v.trim().length >= 3 || CONTENT[currentLang].contact.errors.subject,
      message: (v) => v.trim().length >= 10 || CONTENT[currentLang].contact.errors.message
    };

    const validateField = (field) => {
      const row = field.closest('.form-row');
      const errorEl = row.querySelector('.form-error');
      const result = validators[field.name](field.value);
      const isValid = result === true;
      row.classList.toggle('invalid', !isValid);
      errorEl.textContent = isValid ? '' : result;
      return isValid;
    };

    form.querySelectorAll('input, textarea').forEach((field) => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.closest('.form-row').classList.contains('invalid')) {
          validateField(field);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successMsg.classList.remove('visible', 'error');

      const fields = [...form.querySelectorAll('input, textarea')];
      const allValid = fields.map(validateField).every(Boolean);
      if (!allValid) return;

      submitBtn.disabled = true;
      btnText.textContent = CONTENT[currentLang].contact.form.sending;

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form).then(
        () => {
          successMsg.textContent = CONTENT[currentLang].contact.form.success;
          successMsg.classList.add('visible');
          form.reset();
          setTimeout(() => successMsg.classList.remove('visible'), 5000);
        },
        (err) => {
          console.error('EmailJS send failed:', err);
          successMsg.textContent = CONTENT[currentLang].contact.form.error;
          successMsg.classList.add('visible', 'error');
        }
      ).finally(() => {
        submitBtn.disabled = false;
        btnText.textContent = CONTENT[currentLang].contact.form.send;
      });
    });
  }
})();

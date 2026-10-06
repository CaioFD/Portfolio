# Caio Diniz — Portfolio

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](#license)

My personal portfolio, a fast, bilingual, single-page site built with Angular's
standalone components and signals. No frameworks on top of frameworks, no CMS,
no bloat: just a clean build that ships straight to Vercel on every push to `main`.

## ✨ Highlights

- 🌎 **EN/PT language toggle** — built with Angular signals, remembers your
  choice via `localStorage` ([`language.service.ts`](portfolio-angular/src/app/core/i18n/language.service.ts)).
- ⚡ **Standalone Angular 22** — no `NgModule` ceremony, lean component tree.
- 📬 **Working contact form** — sends real emails via [EmailJS](https://www.emailjs.com/), no backend required.
- 🧩 **Six focused sections** — Home, Experience, Projects, Technical Skills, Education, Contact.
- 📱 **Responsive by default** — looks right from phone to ultrawide.
- 🚀 **Zero-touch deploys** — merge to `main`, Vercel does the rest.

## 🗂️ Structure

```
Portfolio/
└── portfolio-angular/           # The entire site — one Angular app
    ├── public/                   # Static assets (favicon, images, etc.)
    ├── src/
    │   ├── app/
    │   │   ├── core/
    │   │   │   └── i18n/         # Language service (EN/PT toggle)
    │   │   ├── pages/            # One folder per route
    │   │   │   ├── home/
    │   │   │   ├── experience/
    │   │   │   ├── projects/
    │   │   │   ├── technical-skills/
    │   │   │   ├── education/
    │   │   │   └── contact/      # EmailJS-powered contact form
    │   │   └── shared/           # Reusable building blocks
    │   │       ├── header/
    │   │       ├── footer/
    │   │       ├── info-card/
    │   │       └── skill-card/
    │   ├── index.html
    │   └── main.ts
    ├── angular.json
    ├── package.json
    └── vercel.json                # SPA rewrite rules for Vercel
```

Every component keeps the same three-file shape: `*.ts` (logic), `*.html`
(template), `*.css` (styles) — no surprises, easy to navigate.

## 🛠️ Tech stack

| Layer      | Choice                                      |
| ---------- | -------------------------------------------- |
| Framework  | Angular 22 (standalone components, signals) |
| Language   | TypeScript                                   |
| Forms/mail | `@emailjs/browser`                           |
| Testing    | Vitest                                       |
| Hosting    | Vercel                                       |

## 🚀 Getting started

```bash
cd portfolio-angular
npm install
npm start
```

Then open `http://localhost:4200` — the app hot-reloads on every save.

Run the test suite with:

```bash
npm test
```

## 📦 Publication process

The site auto-deploys to **[Vercel](https://vercel.com)**. Every push to
`main` triggers a fresh build and goes live — no manual steps, no CI scripts
to babysit:

```bash
npm run build
```

- Output goes to `portfolio-angular/dist/portfolio-angular`.
- `vercel.json` rewrites every route to `index.html`, so client-side routing
  (Angular Router) survives page refreshes and direct links.
- Previews: Vercel also builds a preview deployment for every pull request,
  so changes can be reviewed live before merging.

## 📄 License

This project is personal portfolio code shared for reference. Feel free to
browse it for inspiration, but please don't republish it as your own.

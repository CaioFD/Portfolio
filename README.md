# Caio Diniz — Digital Resume

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-contact%20form-FF7139)](https://www.emailjs.com/)
[![No build step](https://img.shields.io/badge/build-none-brightgreen)](#-getting-started)

My digital resume: a bilingual, two-page static site in plain HTML, CSS and
JavaScript. No framework, no bundler, no `node_modules` — open `index.html`
and it runs. One `<script>` tag drives the whole thing.

## ✨ Highlights

- 🌎 **EN/PT toggle** — every string lives in a single `CONTENT` object in
  [`script.js`](digital-resume/js/script.js); `data-i18n` attributes get swapped
  on click and the choice is remembered in `localStorage`. The CV download link
  follows the language too (EN or PT PDF).
- 🌓 **Dark / light theme** — CSS custom properties redefined under
  `:root[data-theme="light"]`, toggled and persisted in `localStorage`.
  Dark is the default.
- ⌨️ **Typed hero** — role and location cycle with a typewriter effect, and
  restart in the new language when you flip the toggle.
- 📈 **Scroll feedback** — a top progress bar, `IntersectionObserver` reveal
  animations, animated skill bars and nav links that highlight the section
  you're in.
- 📬 **Working contact form** — client-side validation per field (on blur and
  on input) plus real email delivery through [EmailJS](https://www.emailjs.com/),
  with no backend. Error messages are translated as well.
- ♿ **Accessible by default** — skip link, `aria-expanded` on the menu toggle,
  `aria-label`s on icon buttons, `role="status"` on the form feedback, and a
  `prefers-reduced-motion` block that cuts animations.
- 📱 **Responsive** — breakpoints at 860 / 720 / 480 / 400 px, hamburger menu
  on small screens.

## 🗂️ Structure

```
Portfolio/
├── README.md
└── digital-resume/               # The whole site
    ├── index.html                # Hero, About, Skills, Soft Skills,
    │                             # Experience, Projects, Education
    ├── contact.html              # Contact page + EmailJS form
    ├── css/
    │   ├── reset.css             # Normalize + prefers-reduced-motion
    │   └── style.css             # Design tokens and every component
    ├── js/
    │   └── script.js             # i18n, theme, nav, typed effect,
    │                             # reveals, form validation, EmailJS
    ├── assets/
    │   ├── profile.jpg
    │   ├── CV-CaioDiniz-EN.pdf
    │   └── CV-CaioDiniz-PT.pdf
    └── Portfolio.code-workspace  # VS Code workspace (Live Server)
```

Three files hold all the behaviour and style: `style.css` for looks,
`script.js` for logic, `reset.css` for the baseline. Both pages share the same
header, footer and script.

## 🛠️ Tech stack

| Layer      | Choice                                             |
| ---------- | -------------------------------------------------- |
| Markup     | HTML5, semantic sections                           |
| Styling    | Plain CSS with custom properties (design tokens)   |
| Behaviour  | Vanilla JS (ES2020), one IIFE, no dependencies     |
| Mail       | `@emailjs/browser` 4.3.3 via CDN (contact page)    |
| Fonts      | Space Grotesk + Inter (Google Fonts)               |
| Build      | None                                               |

## 🚀 Getting started

```bash
git clone https://github.com/CaioFD/Portfolio.git
cd Portfolio/digital-resume
```

Then either:

- **Open `index.html` directly** in a browser — everything works, including the
  language and theme toggles.
- **Serve it** for a nicer dev loop (live reload, clean URLs):

  ```bash
  npx serve .          # or: python -m http.server 8000
  ```

  In VS Code, open `Portfolio.code-workspace` and hit *Go Live*
  (Live Server extension) — the workspace already points at this folder.

## ⚙️ Configuration

Everything configurable sits at the top of its own block in
[`script.js`](digital-resume/js/script.js):

| What                | Where                                                  |
| ------------------- | ------------------------------------------------------ |
| All copy (EN + PT)  | the `CONTENT` object                                   |
| CV file paths       | `CV_PATHS`                                             |
| EmailJS credentials | `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY` |
| Colors, radii, fonts| `:root` tokens in [`style.css`](digital-resume/css/style.css) |

To point the form at your own inbox, create a service and a template on EmailJS
and replace those three identifiers. They are public by design (EmailJS keys are
meant to live in the browser), so there is no secret to leak — but do set the
template's allowed domains in the EmailJS dashboard.

Adding a section means: markup in `index.html` with `data-i18n` keys, the
matching keys under both `en` and `pt` in `CONTENT`, and a nav link. Styling
reuses the existing `.section`, `.timeline` and `.skill-block` classes.

## 📦 Publication

Static files, so any host works — GitHub Pages, Netlify, Vercel, Cloudflare
Pages, or plain nginx. Point it at `digital-resume/` as the publish directory;
there is no build command and no output folder to configure.

## 📄 License

This project is personal portfolio code shared for reference. Feel free to
browse it for inspiration, but please don't republish it as your own.

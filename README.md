# SSK Handlooms 🧵

> **Tradition Woven Into Every Celebration.**
> A premium e-commerce web application showcasing authentic Kerala handlooms — sarees, ethnic wear, and festive collections for the modern soul.

---

## 📌 Overview

SSK Handlooms is a beautifully crafted, responsive front-end website for a traditional handloom brand established in 2008, based in Coimbatore, Tamil Nadu, India. The site blends elegant design with rich Indian heritage — featuring smooth animations, curated product galleries, newsletter engagement, and a fully browsable collections catalogue.

---

## ✨ Features

- 🏠 **Home Page** — Cinematic hero section, featured categories, product carousels, testimonials, brand story, and more
- 🛍️ **Collections Page** — Filterable product grid (All Categories, Men, Women, Kids, Family Sets) with best sellers and new arrivals sections
- 💌 **Newsletter Popup** — Elegant email subscription popup with smooth animation
- 📱 **Fully Responsive** — Optimised for all screen sizes (mobile, tablet, desktop)
- ✨ **Framer Motion Animations** — Scroll-triggered and entrance animations throughout
- 🎨 **Premium Design** — Warm brand palette, serif + sans-serif typography, glassmorphism accents

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.7 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0.2 | Type Safety |
| [Vite](https://vite.dev/) | ^8.1.1 | Build Tool & Dev Server |
| [React Router DOM](https://reactrouter.com/) | ^7.18.1 | Client-side Routing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3.2 | Utility-first Styling |
| [Framer Motion](https://www.framer.com/motion/) | ^12.42.2 | Animations |
| [Lucide React](https://lucide.dev/) | ^0.446.0 | Icon Library |
| [clsx](https://github.com/lukeed/clsx) | ^2.1.1 | Conditional Class Merging |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | ^3.6.0 | Tailwind Class Conflict Resolution |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | ^1.71.0 | Fast JavaScript Linter |

---

## 📁 Project Structure

```
ssk-handlooms/
├── public/                   # Static public assets
├── src/
│   ├── assets/               # Images, logos, and media files
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Top navigation bar
│   │   │   └── Footer.tsx    # Site footer with links & contacts
│   │   └── ui/
│   │       ├── Button.tsx    # Reusable button component
│   │       ├── Card.tsx      # Reusable card component
│   │       ├── Heading.tsx   # Styled heading component
│   │       └── NewsletterPopup.tsx  # Email subscription modal
│   ├── lib/                  # Utility functions and helpers
│   ├── pages/
│   │   ├── Home.tsx          # Landing page with all sections
│   │   └── Collections.tsx   # Product collections & catalogue
│   ├── App.tsx               # Root component with routing
│   ├── App.css               # Global app styles
│   ├── index.css             # Base styles and CSS variables
│   └── main.tsx              # Application entry point
├── index.html                # HTML shell
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── .oxlintrc.json            # Linter configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or higher**
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ssk-handlooms.git
   cd ssk-handlooms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and visit **`http://localhost:5173`**

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run Oxlint to check for code issues |

---

## 🌐 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, featured categories, gallery, testimonials |
| `/collections` | Collections | Full product catalogue with category filters |
| `/collections?category=women` | Collections (Women) | Pre-filtered to Women's wear |
| `/collections?category=men` | Collections (Men) | Pre-filtered to Men's wear |
| `/collections?category=kids` | Collections (Kids) | Pre-filtered to Kids' wear |
| `/collections?category=wedding` | Collections (Wedding) | Pre-filtered to Wedding wear |
| `/collections?category=festive` | Collections (Festive) | Pre-filtered to Festive collections |

---

## 🎨 Brand Identity

The design uses a carefully curated warm brand palette inspired by Kerala's golden heritage:

| Token | Color | Usage |
|---|---|---|
| `brand-light` | `#fdfcf7` | Page background |
| Dark Rich Brown | `#231a0e` | Footer / dark sections |
| Heritage Brown | `#2c2214` | Hero background |
| Gold Accent | `#dcae5b` | Highlights, tags |
| Gold Dark | `#9a7b4f` | Icons, dividers |

**Typography:** Serif (`font-serif`) for headings and display text; Sans-serif (`font-sans`) for body copy.

---

## 📦 Production Build

To create an optimised production bundle:

```bash
npm run build
```

The output will be in the `dist/` directory — ready to deploy to any static hosting provider such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

> **Note:** Since this is a Single Page Application (SPA) using client-side routing, ensure your hosting provider is configured to redirect all routes to `index.html`.

---

## 📞 Contact

**SSK Handlooms**
📧 hello@sskhandlooms.com
📍 Coimbatore, Tamil Nadu, India

---

## 📄 License

© 2026 SSK Handlooms. All rights reserved.

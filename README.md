# SSK Handlooms 🧵

> **Tradition Woven Into Every Celebration.**
> A premium, luxury e-commerce web application presenting authentic Kerala handlooms — set mundu, kasavu sarees, and ethnic collections crafted for the modern soul.

---

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animation-green?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## 📌 Overview

**SSK Handlooms** is an ultra-premium, high-fidelity responsive front-end experience representing a heritage brand established in 2008 in Coimbatore, Tamil Nadu, India. The application bridges the gap between historical craft and modern design by integrating advanced scroll-driven animations, high-fidelity typography, and responsive design structures built entirely on **React 19**, **Tailwind CSS v4**, and **GSAP ScrollTrigger**.

---

## ✨ Key Features

- 🏠 **Home Page Experience** — Absolute pixel-perfect matching of standard desktop layouts featuring smooth parallax backgrounds, custom transitions, and interactive slider lists.
- 🛍️ **Filterable Collections Catalogue** — Standardized dynamic grids filtering through Men's, Women's, Kids', and Family Combo wear with single-source-of-truth card elements.
- ⚙️ **Advanced Scroll Pinning** — Full-screen immersive storytelling using GSAP ScrollTrigger to capture, hold, and transition users through the weaver's journey.
- 📐 **Mobile-First Responsive Grids** — Hand-crafted breakpoint grids and collapsing drawer menus ensuring zero horizontal overflow, scaling flawlessly from 375px mobile screens up to 1440px+ viewports.
- 🎨 **Luxury Brand Styling** — Glassmorphic components, warm ambient color glows, gold gradients, and custom diamond-cut separator dividers.

---

## 🛠️ Immersive Animation Systems

The interface incorporates premium, high-performance interactions powered by GreenSock (GSAP) and Framer Motion:

1. **Circular Image Reveal**
   - Renders a 20-image orbiting ring surrounding centralized typography.
   - Triggers an expanding circular viewport mask clip-path on scroll to seamlessly reveal subsequent full-screen sections.
2. **Staggered Checkerboard Grid**
   - Pins the viewport to transition through staggered multi-card story boards.
   - Zooms and fades image assets as text shifts into alignment based on scroll momentum.
3. **Festive Combo Section**
   - Intertwines entry, pin, and exit timelines to create continuous parallax transitions.

---

## 📐 Figma Specification & Colors

All components are strictly audited against standard design guidelines:

| Token | Color Hex | Role |
|---|---|---|
| `--color-brand-light` | `#fdfcf7` | Default Page Background |
| `--color-brand-dark` | `#2c2214` | High-contrast backgrounds / Hero base |
| `--color-brand-gold` | `#b8905c` | Primary highlights & luxury borders |
| `--color-brand-text` | `#2c2c2c` | Neutral body copy |
| Gold Accent | `#E3C89B` | Borders & outline buttons |

### Typography Guidelines
- **Primary Display Headings:** Playfair Display (`font-serif`) with custom letter tracking and italic emphasis.
- **Body & Tag Copy:** Satoshi / Inter (`font-sans`) providing modern readability.

---

## 📁 Directory Structure

```
ssk-handlooms/
├── src/
│   ├── assets/               # Local optimized webp image and graphic assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Mobile-responsive header with Framer Motion drawer menu
│   │   │   └── Footer.tsx    # Widescreen-optimized responsive layout footer
│   │   ├── ui/
│   │   │   ├── Card.tsx      # Reusable styled UI container cards
│   │   │   └── NewsletterPopup.tsx  # Scroll-delayed email collection popup
│   │   ├── CircularImageReveal.tsx      # GSAP Orbit reveal wrapper
│   │   ├── FestiveComboSection.tsx      # ScrollTrigger Parallax Banner
│   │   └── StaggeredCheckerboardGrid.tsx # Pinned staggered sequence grid
│   ├── pages/
│   │   ├── Home.tsx          # Dynamic responsive homepage
│   │   └── Collections.tsx   # Reusable product grid catalog page
│   ├── index.css             # Tailwind v4 directives & variable overrides
│   └── main.tsx              # Application entry point
├── vite.config.ts            # Build configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version **18.0.0** or higher)
- [npm](https://www.npmjs.com/) (installed automatically with Node)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arjunmb01/SSK.git
   cd ssk-handlooms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Spin up the local development server:
   ```bash
   npm run dev
   ```
   *The application will boot, typically accessible at `http://localhost:5173/` or `http://localhost:5174/`.*

---

## 📜 Available Commands

| Script | Description |
|---|---|
| `npm run dev` | Launches the local dev server with HMR. |
| `npm run build` | Validates types and compiles an optimized build in `dist/`. |
| `npm run preview` | Spins up a local port to test the production bundle. |
| `npm run lint` | Runs the Oxlint linter to scan files. |

---

## 📦 Deployment

To bundle the application for production:
```bash
npm run build
```
Upload the compiled folder `dist/` directly to static web hosting providers (such as Vercel, Netlify, or Firebase Hosting). Ensure your provider is configured to route all incoming traffic to `index.html` for single-page client routing.

---

## 📞 Contact Details

- **SSK Handlooms**
- 📧 hello@sskhandlooms.com
- 📍 Coimbatore, Tamil Nadu, India

---

## 📄 License
© 2026 SSK Handlooms. All rights reserved. Registered trademark.

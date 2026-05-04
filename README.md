# Portfolio Website

A personal portfolio website built with React and Vite to showcase projects, skills, and contact information. This repository contains the source code for a fast, responsive, and accessible portfolio site using modern frontend tooling.

## Summary

- **Purpose:** Present portfolio projects, case studies, and contact details in a clean, professional layout.
- **Stack:** React, Vite, Sass, plain JavaScript, and ESLint.
- **Customizable content:** Update your personal details, projects, and copy inside `src/constants`.

## Features

- Responsive layout across devices
- Component-driven structure for easy reuse
- Fast development experience with Vite HMR
- Styles written with Sass for modular styling
- Accessible and semantic HTML

## Getting Started

Prerequisites: Node.js (LTS) and npm or Yarn installed.

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Run development server

```bash
npm run dev
# or
yarn dev
```

3. Build for production

```bash
npm run build
# or
yarn build
```

4. Preview production build locally

```bash
npm run preview
# or
yarn preview
```

## Project Structure

- `src/` — application source code
  - `components/` — reusable UI components
  - `sections/` and `pages/` — layout and page-level components
  - `assets/` — images and icons
  - `constants/` — site data (projects, skills, contact) — update this to change site content
- `public/` — static assets served at root

## Customize Content

Edit the data files in `src/constants/` to update your name, bio, projects, and links. Components read from these constants so content changes propagate site-wide.

## Deployment

You can deploy the built `dist/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, Firebase Hosting, etc.). The typical flow is:

```bash
npm run build
# then upload the contents of dist/
```

## Contributing

This is a personal portfolio — contributions are optional. If you want help testing or improving content, open an issue or contact me.

## License & Author

This project is a personal portfolio. Add your name and license details here.

---

If you'd like, I can:

- replace the placeholder author with your name and links
- add deployment instructions for a specific provider (Vercel/Netlify)
- generate a short project summary for the home page

Tell me which of these you'd like next.

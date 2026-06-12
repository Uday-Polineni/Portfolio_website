# Portfolio Website

Personal portfolio for **Uday Kiran Polineni** — Software Engineer focused on distributed systems, backend APIs, and cloud platforms.

Live site: deploy via [Vercel](https://vercel.com) (or any static host).

## Tech stack

- React 19 + TypeScript
- Vite
- Framer Motion
- CSS (custom design system)

## Sections

- **Hero** — intro with animated request-flow simulator
- **What I Do** — scroll-driven sticky stack (Backend → Database → Full Stack)
- **Experience** — unified career & education timeline
- **Projects** — showcase carousel with live demos
- **Skills** — categorized skill hashmap

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Updating content

Edit [`src/data/content.ts`](src/data/content.ts) for profile, experience, projects, skills, and navigation links.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repository in Vercel.
3. Set **Build Command** to `npm run build`.
4. Set **Output Directory** to `dist`.

## License

© Uday Kiran Polineni. All rights reserved.

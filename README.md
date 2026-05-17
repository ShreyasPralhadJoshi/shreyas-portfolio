# Personal Portfolio — Fresher Edition

A production-grade personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Dark-first, editorial aesthetic designed for fresh graduates and entry-level developers.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS animations
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Fonts:** Space Grotesk (display) + DM Sans (body)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All portfolio content lives in a single file:

```
lib/data.ts
```

Update `personalInfo`, `skills`, `projects`, `experience`, `education`, and `certifications` to personalize the site. Replace:

- `/public/images/profile-placeholder.svg` — your profile photo
- `/public/resume.pdf` — your resume PDF

## Project Structure

```
app/              # Next.js App Router pages & layout
components/       # UI components
hooks/            # Custom React hooks
lib/              # Data, types, utilities
public/           # Static assets
styles/           # Global CSS & variables
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Deployment

Deploy to [Vercel](https://vercel.com), Netlify, or any platform supporting Next.js:

```bash
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` in your environment variables for production.

## Features

- Responsive design (320px → 1440px+)
- Fixed sidebar navigation with active section highlighting
- Scroll-triggered animations
- Custom cursor (desktop)
- Scroll progress bar
- Contact form with validation
- SEO metadata & Open Graph tags
- Custom 404 page

## License

MIT — use freely for your personal portfolio.

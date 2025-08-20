# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with React Router. The development server will run and watch for changes.
- `npm run build` - Build the application for production (prerendered static site)
- `npm run typecheck` - Run TypeScript type checking and generate type definitions

## Architecture Overview

This is a personal portfolio website built with React Router v7 (migrated from Remix). The site is configured as a **prerendered static site** (`prerender: true`) with SSR disabled (`ssr: false`), making it suitable for deployment on GitHub Pages.

### Key Architecture Details

- **React Router v7**: Uses file-based routing with flat routes configuration
- **Static Generation**: Site is prerendered at build time for static hosting
- **Styling**: TailwindCSS with DaisyUI component library
- **Layout**: Single root layout with header/footer, main content area uses `<Outlet />`
- **Italian Content**: Site content is primarily in Italian (`lang="it"`)

### Project Structure

- `app/root.tsx` - Main layout component with header, footer, and analytics
- `app/routes/` - File-based routes including case studies, services, and tech stack pages
- `app/components/` - Reusable UI components (NewsCard, ProjectContainer, etc.)
- `app/icons/` - Custom SVG icon components
- `app/section/` - Section-specific components
- `public/` - Static assets including project images and tech stack icons

### Route Organization

- Landing page: `_index.tsx`
- Case studies: `case_study.*.tsx` (Boids, CaribeBay, Distress, etc.)
- Service pages: `services.tsx`, `techstack.tsx`
- Special routes: `BoidSimulator.tsx` (interactive component)

### Styling System

- Uses TailwindCSS v4 with PostCSS
- DaisyUI for component styling
- Custom CSS variables and animations
- Outfit font family from Google Fonts
- Neutral color scheme for header/footer

### Analytics & External Services

- Plausible Analytics integration
- External links to GitHub, GitLab profiles
- Contact information and Italian business details in footer
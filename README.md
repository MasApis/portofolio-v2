# Abdul Hafidz — Portfolio

Personal portfolio site built with Next.js 16, React 19, and Tailwind CSS 4.

- **Production:** https://pundong.my.id
- **Stack:** Next.js (App Router, Cache Components, Turbopack) · TypeScript · Tailwind CSS 4 · MDX
- **Lint/format:** Biome
- **Hosting:** Vercel · DNS: Netlify

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Run the production server |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Biome check |
| `npm run lint:fix` | Biome check with `--write` |
| `npm run format` | Biome format |
| `npm run verify` | typecheck + lint + build (the CI command) |

## Project layout

```
content/          MDX posts and project case studies
public/           Static assets served from the root
src/app/          App Router routes, layout, metadata
src/components/   UI primitives, layout, sections, blog
src/content/      Zod schemas and content loaders
src/lib/          site.config.ts (single source of truth), utilities
```

## Personalising the site

Almost all content lives in **one file**: `src/lib/site.config.ts`. Edit
name, role, links, skills, and experience there. Drop your avatar into
`public/images/avatar.jpg`. Nothing else needs to change.

## Adding a blog post

Create `content/blog/<slug>.mdx` with frontmatter in JSON block format:

```mdx
---
title: My First Post
description: A short summary that shows up on the index and meta tags.
date: 2026-01-15
tags: [nextjs, tailwind]
draft: false
---

Your content in MDX.
```

Frontmatter is a JSON block (`{...}` between the `---` fences), parsed by
`src/content/schema.ts` at build time. Invalid frontmatter fails the build.

## Deployment

Pushes to `main` deploy automatically via Vercel. See `.env.example` for
required environment variables.

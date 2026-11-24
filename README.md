# Nullify.one

Nullify is a research project about machine learning that finds bad traffic on small networks. It is not a company and it has no product. This repository is the source for https://nullify.one.

## Stack

- Next.js 16 static export (`output: "export"`, trailing slash). React 19. TypeScript 7.
- No JavaScript is necessary to read the page. One CSS animation (the red strike). Reduced motion turns it off.
- Brand: the black italic wordmark and the slashed-N icon from the original Nullify files, in `public/brand/`. Accent red `#ED1C24` comes from the icon.

## Edit the page

All text is in `app/page.tsx`. The lists `idea`, `status`, and `history` are at the top of the file. Status values: `done`, `planned`, `not started`, `not now`.

## Run locally

```sh
npm ci
npm run dev
```

## Deploy

The build writes a static site to `out/`.

| Host | Settings |
|---|---|
| Vercel | Framework preset: Next.js. No other settings. |
| Cloudflare Pages | Build command: `npm run build`. Output directory: `out`. Node version: 24 (environment variable `NODE_VERSION=24`). |

Point the project at branch `main` of this repository.

## History

- 2022: first site (repository `BiscuitNuke/Nullify.one`, Next 11 and Bootstrap).
- 2024: NullifyNEXT, a rebuild on a purchased template. It was not finished.
- 2026: this version. The template, its demo text, and the background video were removed.

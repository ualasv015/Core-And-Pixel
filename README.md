# Core & Pixel

An English-language PC hardware education and buying-guidance site for readers in the United States and euro area. The name remains provisional.

## Local development

1. Install Node.js 22.12 or newer and pnpm 10 or newer.
2. Run `pnpm install`.
3. Run `pnpm dev` and open the local URL shown in the terminal.

Create a production build with `pnpm build`; preview it with `pnpm preview`.

## Indexing and launch status

The domain is not selected. Do not set `PUBLIC_SITE_URL` until the production domain is approved and points to the intended host. Pages remain `noindex`, `robots.txt` disallows crawling, and the sitemap endpoint is unavailable unless both `PUBLIC_SITE_URL` and `PUBLIC_INDEXING_ENABLED=true` are supplied at build time. Keep indexing disabled until the content, owner details, legal pages and production checks are complete.

The rankings contain no live product claims or benchmark data. They remain noindex until comparable sources and verified, market-specific prices are added. Editorial drafts are also noindex until reviewed and marked `published` in their frontmatter.

Privacy, cookies, contact, and ownership details contain explicit completion notes. They are not legal advice or ready-to-publish policy text. Complete them with the actual owner, hosting, consent, advertising, and data-processing details before launch.

## Content workflow

Guide drafts live in `src/content/guides/`. Add frontmatter that conforms to `src/content.config.ts`. Set `status: review` while the owner reviews English and technical clarity. Set `status: published` only after source checking, copy review, and any necessary price or test-data verification. Keep source links beside claims they support.

The initial approved architecture is recorded in `output/pdf/core-and-pixel-phase1-seo-architecture.pdf`; the visual prototype is in `output/pdf/core-and-pixel-phase2-design-prototype.pdf`.

import { defineConfig } from 'astro/config';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite ? new URL(configuredSite).origin : undefined;

export default defineConfig({
  ...(site ? { site: site.replace(/\/+$/, '') } : {}),
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

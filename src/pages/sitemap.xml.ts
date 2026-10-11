import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const corePaths = ['/', '/cpus/', '/gpus/', '/pc-building/', '/benchmarks/'];

export const GET: APIRoute = async ({ site }) => {
  if (!site || import.meta.env.PUBLIC_INDEXING_ENABLED !== 'true') {
    return new Response('Set the production site URL and explicitly enable indexing to generate the sitemap.', { status: 404 });
  }

  const publishedGuides = await getCollection('guides', ({ data }) => data.status === 'published');
  const locations = [...corePaths, ...publishedGuides.map(({ data }) => data.path)]
    .map((path) => new URL(path, site).toString());
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locations.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

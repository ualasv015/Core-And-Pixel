import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const body = site && import.meta.env.PUBLIC_INDEXING_ENABLED === 'true'
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site).toString()}\n`
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

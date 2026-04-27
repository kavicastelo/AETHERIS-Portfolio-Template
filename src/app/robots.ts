import { MetadataRoute } from 'next';
import { config } from '@/data/config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  };
}

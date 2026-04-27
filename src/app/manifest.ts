import { MetadataRoute } from 'next';
import { config } from '@/data/config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.title,
    short_name: 'Aetheris',
    description: config.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: config.themeColor,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

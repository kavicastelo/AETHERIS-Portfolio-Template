'use client';

import { config } from '@/data/config';

export function PersonSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.author[0],
    jobTitle: 'Senior Software Architect',
    url: config.siteUrl,
    sameAs: [
      // Add social links from config if available
      'https://github.com/kavicastelo',
      'https://linkedin.com/in/kavicastelo',
    ],
    knowsAbout: ['Software Engineering', 'AI Engineering', 'Next.js', 'React', 'TypeScript', 'Data Analysis'],
    description: config.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.title,
    url: config.siteUrl,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.author[0],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

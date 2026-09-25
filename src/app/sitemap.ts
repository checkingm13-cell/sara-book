import type { MetadataRoute } from 'next';
import { FEATURED_BOOKS } from '@/data/books';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sarapublication.com';

  // Core static landing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/author-guidelines`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bookshelf`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/publish`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic individual book detail pages
  const bookRoutes: MetadataRoute.Sitemap = FEATURED_BOOKS.map((book) => ({
    url: `${baseUrl}/book/${book.slug}`,
    lastModified: new Date(`${book.year}-01-01`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...bookRoutes];
}

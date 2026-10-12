import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/links';
import { projects } from '@/data/portfolio';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ['', ...projects.map(project => `/projects/${project.slug}`)].map(path => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly', priority: path ? 0.8 : 1 }));
}

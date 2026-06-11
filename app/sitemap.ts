import type { MetadataRoute } from 'next';

const BASE = 'https://trysam.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,             lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/private`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/charter`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/security`,     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}

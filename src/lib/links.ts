import { profile } from '@/data/portfolio';
export function validUrl(value: string): boolean {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; } catch { return false; }
}
export const emailHref = /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(profile.email) ? `mailto:${profile.email}` : null;
export const resumeHref = /^\/(?!\/)[\w/.-]+\.pdf$/i.test(profile.resume) ? profile.resume : null;
export const siteUrl = validUrl(process.env.NEXT_PUBLIC_SITE_URL ?? '') ? new URL(process.env.NEXT_PUBLIC_SITE_URL!).origin : undefined;

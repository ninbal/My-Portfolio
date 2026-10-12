import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { profile } from '@/data/portfolio';
import { siteUrl } from '@/lib/links';
import './globals.css';
const geist = localFont({ src: '../../public/fonts/Geist-Variable.ttf', weight: '100 900', variable: '--font-geist', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: 'Janine Ubal | Full-Stack Software Engineer', template: '%s | Janine Ubal' },
  description: profile.description,
  openGraph: { title: 'Janine Ubal | Full-Stack Software Engineer', description: profile.description, type: 'website', locale: 'en_US', siteName: 'Janine Ubal' },
  twitter: { card: 'summary_large_image' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body id="top" className="font-sans antialiased"><a className="fixed top-4 left-4 z-[100] -translate-y-24 rounded-lg bg-accent px-5 py-3 text-background focus:translate-y-0" href="#main-content">Skip to content</a><Navigation />{children}<Footer /></body></html>;
}

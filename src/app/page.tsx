import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';
import { siteUrl } from '@/lib/links';
export const metadata: Metadata = { alternates: siteUrl ? { canonical: siteUrl } : undefined };
export default function Home() { return <main id="main-content"><Hero /><About /><Projects /><Experience /><Skills /><Contact /></main>; }

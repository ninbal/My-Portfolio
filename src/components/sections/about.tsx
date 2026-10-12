import { ArrowUpRight, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
export function About() {
  return <section id="about" className="section-space container-shell"><Reveal className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]"><div><SectionHeading number="01" label="ABOUT ME" title="A little about me." /><p className="flex items-center gap-2 text-sm text-muted"><MapPin size={15} className="text-accent" aria-hidden="true" />Based in Cebu, Philippines</p></div><div><p className="text-lg leading-9 text-muted">{profile.about}</p><div className="mt-7 flex flex-wrap gap-2">{['React', 'Next.js', 'TypeScript', 'REST APIs', 'Laravel'].map(tech => <span className="tag" key={tech}>{tech}</span>)}</div><a href="#experience" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-violet-200">More about my experience<ArrowUpRight size={15} aria-hidden="true" /></a></div></Reveal></section>;
}

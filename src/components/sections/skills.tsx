import { Braces, Database, Layers, Wrench, Workflow } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
const icons = [Layers, Braces, Database, Wrench, Workflow];
export function Skills() {
  return <section id="skills" className="section-space container-shell"><SectionHeading number="04" label="TECH STACK" title="Technologies I Work With" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group, index) => { const Icon = icons[index]; return <Reveal key={group.title} className={index === 0 ? 'sm:col-span-2' : index === 4 ? 'lg:col-span-3' : ''}><div className="h-full rounded-xl border border-border bg-surface/40 p-7"><Icon size={21} strokeWidth={1.5} className="mb-6 text-accent" aria-hidden="true" /><h3 className="mb-5 text-base font-medium">{group.title}</h3><ul className="flex flex-wrap gap-2">{group.items.map(item => <li key={item} className="tag">{item}</li>)}</ul>{index === 4 && <p className="mt-4 text-xs leading-6 text-muted">AWS EC2 deployment participation under technical-lead guidance.</p>}</div></Reveal>; })}</div></section>;
}

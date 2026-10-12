import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, LockKeyhole, Check } from 'lucide-react';
import type { Metadata } from 'next';
import { projects, type Project } from '@/data/portfolio';
import { ProjectIllustration } from '@/components/ui/project-illustration';
import { siteUrl } from '@/lib/links';
export function caseStudyMetadata(project: Project): Metadata {
  return { title: project.title, description: project.summary, alternates: siteUrl ? { canonical: `${siteUrl}/projects/${project.slug}` } : undefined, openGraph: { title: `${project.title} | Janine Ubal`, description: project.summary, type: 'article' } };
}
export function CaseStudy({ project }: { project: Project }) {
  const other = projects.find(item => item.slug !== project.slug)!;
  return <main id="main-content" className="container-shell pb-20"><div className="pt-10 md:pt-16"><Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground"><ArrowLeft size={16} aria-hidden="true" />All projects</Link><p className="eyebrow mt-10 mb-6 text-accent">PROFESSIONAL PROJECT / {project.year}</p><h1 className="max-w-4xl text-4xl leading-[1.15] font-semibold tracking-[-0.045em] md:text-6xl">{project.title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-muted">{project.summary}</p><p className="mt-6 flex items-center gap-2 text-xs text-muted"><LockKeyhole size={14} aria-hidden="true" />Private / Proprietary Project</p></div>
    <div className="my-12 overflow-hidden rounded-2xl border border-border md:my-16"><ProjectIllustration kind={project.kind} /></div>
    <div className="grid gap-12 lg:grid-cols-[230px_1fr] lg:gap-20"><aside><h2 className="eyebrow mb-5">TECHNOLOGIES I USED</h2><ul className="flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="tag">{tech}</li>)}</ul><p className="mt-7 text-xs leading-6 text-muted">Software engineering contributions<br />{project.year}</p></aside><div className="space-y-14">
      <section><h2 className="text-2xl font-medium tracking-tight">Project overview</h2><p className="mt-5 leading-8 text-muted">{project.summary}</p></section>
      <section><h2 className="text-2xl font-medium tracking-tight">My role & responsibilities</h2><p className="mt-5 leading-8 text-muted">{project.role}</p></section>
      <section><h2 className="text-2xl font-medium tracking-tight">Key contributions</h2><ul className="mt-6 space-y-5">{project.contributions.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted"><Check className="mt-1.5 shrink-0 text-accent" size={15} aria-hidden="true" />{item}</li>)}</ul></section>
      <section><h2 className="mb-7 text-2xl font-medium tracking-tight">Engineering challenges & solutions</h2><div className="space-y-5">{project.challenges.map((challenge, index) => <article key={challenge.title} className="rounded-xl border border-border bg-surface/40 p-6 sm:p-8"><p className="eyebrow mb-4 text-accent">CHALLENGE 0{index + 1}</p><h3 className="text-lg font-medium">{challenge.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{challenge.problem}</p><p className="mt-5 text-sm leading-7 text-muted"><span className="font-medium text-foreground">My contribution. </span>{challenge.solution}</p></article>)}</div></section>
      <section className="border-t border-border pt-8"><h2 className="flex items-center gap-2 text-sm font-medium"><LockKeyhole size={16} className="text-accent" aria-hidden="true" />Confidentiality notice</h2><p className="mt-4 text-sm leading-7 text-muted">This is a private, proprietary professional project. Client and internal project names have been omitted. The original mockup above is illustrative and is not a screenshot of an actual company system. No private source code, internal tickets, endpoints, database schemas, or proprietary architecture are shared.</p></section>
    </div></div>
    <div className="mt-20 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"><Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-white"><ArrowLeft size={16} aria-hidden="true" />Back to all projects</Link><Link href={`/projects/${other.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-violet-200">Next case study<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">: {other.title}</span></Link></div>
  </main>;
}

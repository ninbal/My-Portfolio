import { ArrowUpRight, Mail } from 'lucide-react';
import { emailHref } from '@/lib/links';
import { SocialLinks } from '@/components/ui/social-links';
import { Reveal } from '@/components/ui/reveal';
export function Contact() {
  return <section id="contact" className="container-shell py-24 md:py-32"><Reveal className="contact-panel relative overflow-hidden rounded-2xl border border-border px-6 py-16 text-center sm:px-12 md:py-20"><p className="eyebrow mb-7"><span className="text-accent">05</span> / CONTACT</p><h2 className="mx-auto max-w-2xl text-4xl leading-tight font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">Let’s build<br />something <span className="text-accent">great.</span></h2><p className="mt-6 text-sm leading-7 text-muted sm:text-base">Interested in working together? Feel free to reach out.</p><div className="mt-8 flex justify-center">{emailHref ? <a href={emailHref} className="button-primary"><Mail size={17} aria-hidden="true" />Say hello<ArrowUpRight size={17} aria-hidden="true" /></a> : <div><button disabled className="button-secondary cursor-not-allowed opacity-60"><Mail size={17} aria-hidden="true" />Email coming soon</button><p className="mt-3 text-xs text-muted">Contact details will be available here soon.</p></div>}</div><div className="mt-5 flex justify-center"><SocialLinks /></div></Reveal></section>;
}

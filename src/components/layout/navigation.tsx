'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const sections = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -55% 0px' });
    sections.forEach(name => { const element = document.getElementById(name.toLowerCase()); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [pathname]);
  return <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
    <div className="container-shell flex h-20 items-center justify-between">
      <Link href="/" aria-label="Janine Ubal home" className="text-2xl font-bold tracking-tighter">JU<span className="text-accent">.</span></Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">{sections.map(name => <Link key={name} href={`/#${name.toLowerCase()}`} aria-current={pathname === '/' && active === name.toLowerCase() ? 'location' : undefined} className="nav-link">{name}{name === 'Contact' && <ArrowUpRight size={14} aria-hidden="true" />}</Link>)}</nav>
      <button ref={toggle} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex size-11 items-center justify-center rounded-lg border border-border md:hidden">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile navigation" className={`${open ? 'flex' : 'hidden'} container-shell flex-col pb-5 md:hidden`}>{sections.map(name => <Link className="nav-link min-h-12" key={name} aria-current={pathname === '/' && active === name.toLowerCase() ? 'location' : undefined} href={`/#${name.toLowerCase()}`} onClick={() => setOpen(false)}>{name}</Link>)}</nav>
  </header>;
}

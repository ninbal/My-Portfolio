import { ArrowUp } from 'lucide-react';
export function Footer() {
  return <footer className="container-shell flex flex-col gap-6 border-t border-border py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Janine Ubal<span className="mx-3 text-border">/</span>Built with Next.js.</p><a href="#top" className="inline-flex min-h-11 items-center gap-3 self-start transition-colors hover:text-foreground">Back to top<ArrowUp size={15} aria-hidden="true" /></a></footer>;
}

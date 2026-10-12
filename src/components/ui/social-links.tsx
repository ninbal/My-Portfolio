import { Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/brand-icons';
import { profile } from '@/data/portfolio';
import { emailHref, validUrl } from '@/lib/links';
export function SocialLinks() {
  const links = [
    { label: 'GitHub', href: validUrl(profile.github) ? profile.github : null, Icon: GitHubIcon },
    { label: 'LinkedIn', href: validUrl(profile.linkedin) ? profile.linkedin : null, Icon: LinkedInIcon },
    { label: 'Email', href: emailHref, Icon: Mail },
  ].filter(link => link.href);
  if (!links.length) return null;
  return <div className="flex flex-wrap gap-x-6 gap-y-2">{links.map(({ label, href, Icon }) => <a className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground" key={label} href={href!} {...(href!.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><Icon size={16} aria-hidden="true" />{label}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</div>;
}

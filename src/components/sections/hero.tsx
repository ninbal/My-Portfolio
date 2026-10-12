import { ArrowDown, ArrowUpRight, Download, MapPin, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { resumeHref } from "@/lib/links";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/ui/social-links";
import { HeroPortrait } from "@/components/ui/hero-portrait";
export function Hero() {
  return (
    <section className="hero relative border-b border-border/70">
      <div className="container-shell relative py-20 md:py-28 lg:py-32">
        <Reveal className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="min-w-0">
            <div className="mb-9 flex flex-wrap items-center gap-4">
              <p className="eyebrow flex items-center gap-2">
                <MapPin size={13} className="text-accent" aria-hidden="true" />
                {profile.location}
              </p>
              {profile.openToOpportunities && (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-violet-200">
                  Open to Work
                </span>
              )}
            </div>
            <h1 className="text-[clamp(3.1rem,5.5vw,4.6rem)] leading-[1.08] font-semibold tracking-[-0.065em]">
              Hi, I’m Janine<span className="text-accent">.</span>
              <span className="mt-4 block text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.15] tracking-[-0.055em] text-accent">
                Full-Stack
                <br />
                Software Engineer.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted md:text-lg">
              {profile.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary">
                View My Work
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              {resumeHref ? (
                <a href={resumeHref} download className="button-secondary">
                  Download Resume
                  <Download size={16} aria-hidden="true" />
                </a>
              ) : (
                <button
                  disabled
                  title="Resume will be available soon"
                  className="button-secondary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Download Resume
                  <Download size={16} aria-hidden="true" />
                  <span className="text-[10px]">Soon</span>
                </button>
              )}
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <HeroPortrait />
          </div>
        </Reveal>
        <div className="mt-16 flex items-center justify-between gap-4 border-t border-border/60 pt-6 md:mt-20">
          <p className="flex items-center gap-2 text-xs text-muted">
            <Code2 size={16} className="text-accent" aria-hidden="true" />
            Thoughtful interfaces. Reliable applications.
          </p>
          <a
            href="#about"
            className="flex min-h-11 items-center gap-3 text-xs text-muted"
          >
            <span className="hidden sm:inline">Scroll to explore</span>
            <ArrowDown size={16} aria-hidden="true" />
            <span className="sr-only sm:hidden">Scroll to about</span>
          </a>
        </div>
      </div>
    </section>
  );
}

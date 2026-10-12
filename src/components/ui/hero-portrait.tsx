import Image from "next/image";
import { profile } from "@/data/portfolio";

export function HeroPortrait() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[340px] lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-2 inset-y-8 -z-10 rounded-full bg-[radial-gradient(ellipse_at_65%_45%,#8b7cf64d,transparent_70%)] blur-2xl"
      />
      <div className="relative aspect-[4/5]">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 380px, (min-width: 400px) 340px, calc(100vw - 80px)"
            className="hero-portrait-image object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="text-8xl font-semibold tracking-[-0.08em] text-accent/70"
            >
              JU<span className="text-foreground">.</span>
            </span>
            <span className="eyebrow">Portrait Photo</span>
          </div>
        )}
      </div>
    </div>
  );
}

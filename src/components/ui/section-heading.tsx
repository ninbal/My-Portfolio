export function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="mb-10 md:mb-14"><p className="eyebrow mb-5"><span className="text-accent">{number}</span> / {label}</p><h2 className="section-title">{title}</h2></div>;
}

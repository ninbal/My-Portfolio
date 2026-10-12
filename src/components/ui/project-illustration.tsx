import { Check, FileText, LayoutGrid, Users, Globe2, ShieldCheck, ArrowRight, ListChecks } from 'lucide-react';
export function ProjectIllustration({ kind }: { kind: 'workforce' | 'training' }) {
  const workforce = kind === 'workforce';
  return <figure className={`project-art ${workforce ? 'workforce-art' : 'training-art'}`}>
    <div className="mockup-window" role="img" aria-label={workforce ? 'Illustrative personnel workspace with records and document workflow' : 'Illustrative training workspace with scenario and evaluation steps'}>
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3"><div className="flex gap-1.5"><i /><i /><i /></div><span className="text-[9px] tracking-[0.18em] text-slate-400">{workforce ? 'PEOPLE WORKSPACE' : 'TRAINING WORKSPACE'}</span><LayoutGrid size={12} /></div>
      <div className="flex min-h-56">
        <div className="flex w-12 shrink-0 flex-col items-center gap-6 border-r border-white/10 py-6 text-slate-500"><LayoutGrid size={15} /><Users size={15} className={workforce ? 'text-violet-300' : ''} /><FileText size={15} /><Globe2 size={15} /></div>
        <div className="min-w-0 flex-1 p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between"><div><p className="mb-1 text-[9px] text-slate-400">{workforce ? 'WORKSPACE / PERSONNEL' : 'EXERCISES / OVERVIEW'}</p><p className="text-sm font-semibold">{workforce ? 'Personnel overview' : 'Emergency preparedness'}</p></div><span className="rounded-md bg-violet-400/15 p-2 text-violet-300">{workforce ? <Users size={16} /> : <ShieldCheck size={16} />}</span></div>
          {workforce ? <div className="space-y-2">{['Personnel record', 'Affiliated workplace', 'Application documents'].map((label, i) => <div key={label} className="flex items-center gap-3 rounded-md border border-white/7 bg-white/3 p-3"><div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-400/10 text-[10px] text-violet-300">0{i + 1}</div><div className="flex-1"><p className="text-[10px] text-slate-300">{label}</p><div className="mt-2 h-1 w-3/5 rounded bg-slate-700" /></div><Check size={12} className="text-violet-300" /></div>)}</div> : <><div className="rounded-lg border border-teal-300/15 bg-teal-300/5 p-4"><div className="mb-3 flex items-center gap-2 text-[9px] tracking-widest text-teal-200"><span className="size-1.5 rounded-full bg-teal-300" />ILLUSTRATIVE SCENARIO</div><p className="text-xs">A plan for the unexpected.</p><div className="mt-4 flex gap-1.5">{[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <div key={n} className="h-5 flex-1 rounded-sm bg-teal-200/15" style={{ opacity: n < 8 ? 1 : 0.3 }} />)}</div></div><div className="mt-3 flex items-center justify-between rounded-md border border-white/10 p-3 text-[10px] text-slate-300"><ListChecks size={14} /><span>Scenario</span><ArrowRight size={11} /><span>Evaluation</span><ArrowRight size={11} /><span>Report</span></div></>}
        </div>
      </div>
    </div>
    <figcaption className="mt-6 text-center text-[10px] tracking-[0.08em] text-muted">ILLUSTRATIVE MOCKUP · NOT AN ACTUAL SYSTEM SCREENSHOT</figcaption>
  </figure>;
}

import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { HeroMark } from "@/components/illustrations/HeroMark";

const PROMISES = [
  ["Clear before you start", "Know the documents, fee and next step before you invest your time."],
  ["No silent waiting", "Every application gets a real explanation, not a generic status line."],
  ["Help when it matters", "A guided path for payments, documents and your RTO visit."],
];

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden">
      <TopBar />
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-trust-light px-3 py-1.5 text-[12px] font-bold tracking-wide text-trust"><span className="h-1.5 w-1.5 rounded-full bg-trust" /> LEARNER’S LICENCE, MADE CLEAR</p>
          <h1 className="max-w-xl font-display text-[42px] font-bold leading-[1.02] tracking-[-0.065em] text-ink sm:text-[58px] lg:text-[66px]">A calmer way to get your learner’s licence.</h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink/65">Sahaj replaces confusing status screens with a step-by-step journey that tells you what you need, why you need it, and what happens next.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/login" className="btn-primary px-7">Start my application <span aria-hidden className="ml-2">→</span></Link><Link href="/status/LL-2026-4471209" className="btn-secondary">View a real example</Link></div>
          <p className="mt-5 text-[12.5px] text-ink/50">Demo only · No Aadhaar, SMS, payment or government system is used</p>
        </div>
        <div className="relative mt-12 lg:mt-0"><div className="absolute inset-8 rounded-[40px] bg-trust-light/80 blur-3xl" /><HeroMark className="relative mx-auto w-full max-w-[470px]" /></div>
      </section>
      <section className="border-y border-line/80 bg-white/60"><div className="mx-auto grid max-w-6xl gap-0 px-4 py-3 sm:grid-cols-3 sm:px-6">{PROMISES.map(([title, detail], index) => <div key={title} className={"px-2 py-6 sm:px-7 " + (index < 2 ? "sm:border-r sm:border-line" : "")}><p className="text-[14px] font-bold text-ink">{title}</p><p className="mt-1.5 max-w-xs text-[13.5px] leading-relaxed text-ink/60">{detail}</p></div>)}</div></section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"><div className="rounded-3xl bg-ink px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:px-10"><div><p className="text-[12px] font-bold tracking-widest text-[#9CD8C8]">BUILT FOR A BETTER CITIZEN JOURNEY</p><h2 className="mt-2 font-display text-[25px] font-bold tracking-[-0.04em] sm:text-[30px]">No surprise rejections. No status black hole.</h2></div><Link href="/about-this-build" className="mt-5 inline-flex text-[14px] font-semibold text-[#C7F2E6] underline underline-offset-4 sm:mt-0">How this prototype works →</Link></div></section>
    </main>
  );
}

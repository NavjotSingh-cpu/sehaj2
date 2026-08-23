import Link from "next/link";

export function TopBar({ back }: { back?: { href: string; label: string } }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {back ? <Link href={back.href} className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink/70 transition-colors hover:text-trust"><span aria-hidden>←</span> {back.label}</Link> : <Link href="/" className="font-display text-[22px] font-bold tracking-[-0.05em] text-ink">sahaj<span className="text-trust">.</span></Link>}
        <Link href="/about-this-build" className="text-[12px] font-semibold text-ink/55 transition-colors hover:text-trust">About this demo</Link>
      </div>
    </header>
  );
}

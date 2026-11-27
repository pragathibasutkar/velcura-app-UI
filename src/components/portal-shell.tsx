"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Building2, ChevronLeft, FileText, LayoutDashboard, Menu, Package, Ruler, Settings, ShieldCheck, X } from "lucide-react";

const links = [
  { href: "/hospital", label: "Overview", icon: LayoutDashboard },
  { href: "/hospital/quotes-orders", label: "Quotes & orders", icon: FileText },
  { href: "/hospital/team", label: "Team sizes", icon: Ruler },
  { href: "/hospital/quotes/new/customisation", label: "Design studio", icon: ShieldCheck },
  { href: "/hospital", label: "Invoices", icon: Package },
];

export function PortalLayout({ children, title, eyebrow }: { children: ReactNode; title: string; eyebrow?: string }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-canvas text-ink">
    <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-sand bg-surface p-5 transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex items-center justify-between border-b border-sand pb-6">
        <Link href="/hospital" className="flex items-center gap-3 text-primary" onClick={() => setOpen(false)}><span className="grid size-10 place-items-center rounded-control bg-primary text-white"><Building2 size={19} /></span><span><span className="block font-display text-xl font-semibold">Velcura</span><span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Institutional</span></span></Link>
        <button className="rounded p-2 text-muted lg:hidden" aria-label="Close navigation" onClick={() => setOpen(false)}><X size={20} /></button>
      </div>
      <div className="mt-7 rounded-card bg-mint p-4"><p className="text-xs font-semibold uppercase tracking-wide text-muted">Workspace</p><p className="mt-1 font-semibold text-primary">Aster Care Hospital</p><p className="mt-1 text-xs text-muted">Procurement group · Bengaluru</p></div>
      <nav className="mt-7 grid gap-1" aria-label="Hospital navigation">{links.map(({ href, label, icon: Icon }) => <Link key={label} href={href} className="flex min-h-11 items-center gap-3 rounded-control px-3 text-sm font-semibold text-muted hover:bg-mint hover:text-primary" onClick={() => setOpen(false)}><Icon size={18} />{label}</Link>)}</nav>
      <div className="absolute bottom-5 left-5 right-5 grid gap-1 border-t border-sand pt-4"><Link href="/hospital" className="flex min-h-11 items-center gap-3 rounded-control px-3 text-sm font-semibold text-muted hover:bg-mint"><Settings size={18} />Workspace settings</Link><Link href="/" className="flex min-h-11 items-center gap-3 rounded-control px-3 text-sm font-semibold text-muted hover:bg-mint"><ChevronLeft size={18} />Back to storefront</Link></div>
    </aside>
    {open && <button className="fixed inset-0 z-30 bg-primary-dark/30 lg:hidden" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    <main className="lg:pl-72"><header className="sticky top-0 z-20 border-b border-sand bg-canvas/95 backdrop-blur"><div className="flex min-h-20 items-center justify-between px-5 lg:px-10"><button className="rounded-control border border-sand bg-surface p-3 text-primary lg:hidden" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu size={20} /></button><div className="hidden lg:block"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow ?? "Institutional workspace"}</p><h1 className="font-display text-2xl font-semibold text-primary">{title}</h1></div><div className="ml-auto flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-semibold">Ananya Rao</p><p className="text-xs text-muted">Procurement lead</p></div><span className="grid size-11 place-items-center rounded-full bg-primary text-sm font-bold text-white">AR</span></div></div></header><div className="px-5 py-8 lg:px-10 lg:py-10">{children}</div></main>
  </div>;
}

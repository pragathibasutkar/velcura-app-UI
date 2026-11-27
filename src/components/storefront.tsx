"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, UserRound, X, ChevronRight, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button, Drawer } from "@/components/ui";
import { useCartStore } from "@/lib/stores/cart";
import { products } from "@/lib/mock-data";
import { MiniCartDrawer } from "@/components/mini-cart";
import { FitSizeHint } from "@/components/fit-size-hint";

const navGroups = [
  { label: "Women", href: "/women", links: ["Women's Scrubs", "Scrub Sets", "Joggers & Pants", "Clinical Accessories"] },
  { label: "Men", href: "/search?q=men", links: ["Men's Scrubs", "Athletic Tops", "Cargo Joggers", "Lab Coats"] },
  { label: "Lab Coats", href: "/search?q=lab+coats", links: ["Consultation Coats", "Surgeon Coats", "Barrier-Plus", "Custom Embroidery"] },
  { label: "Fabric", href: "/fabric", links: ["Silver-Weave Antimicrobial", "Fluid Barrier Repel-X", "Thermoregulatory Fibers", "Autoclave Durability"] },
  { label: "For Hospitals", href: "/hospital", links: ["Hospital Procurement", "Custom Crest Embroidery", "Annual Linen Contracts", "RFP Portal"] },
];

export function StorefrontHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const itemCount = useCartStore((state) => state.itemCount);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query || "navy scrub")}`);
    setSearchOpen(false);
  }

  return <>
    <div className="bg-primary-dark px-4 py-1.5 text-center text-xs text-white">Free shipping above ₹1,999 · Bulk pricing for hospitals <span className="float-right hidden items-center gap-1 sm:inline-flex"><MessageCircle size={12} /> WhatsApp</span></div>
    <header className="sticky top-0 z-40 border-b border-sand bg-surface">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8">
        <button className="p-2 md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={20} /></button>
        <Link href="/" className="shrink-0 leading-none text-primary"><span className="font-display text-xl font-semibold">Velcura</span><span className="block text-[9px] uppercase tracking-[0.25em]">by Vastram</span></Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex" aria-label="Primary navigation">
          {navGroups.map((group) => <div key={group.label} className="relative" onMouseEnter={() => setMegaOpen(group.label)} onMouseLeave={() => setMegaOpen(null)}>
            <Link href={group.href} className={`block py-5 ${pathname === group.href ? "text-primary underline decoration-saffron decoration-2 underline-offset-4" : "hover:text-primary"}`}>{group.label}</Link>
            {megaOpen === group.label && <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 border border-sand bg-surface p-4 shadow-modal" onMouseEnter={() => setMegaOpen(group.label)}><p className="mb-3 text-xs uppercase tracking-widest text-muted">Clinical collections</p>{group.links.map((link) => <Link key={link} href={`${group.href}?category=${encodeURIComponent(link)}`} className="flex min-h-10 items-center justify-between text-sm hover:text-primary">{link}<ChevronRight size={14} /></Link>)}</div>}
          </div>)}
          <Link href="/help" className="py-5 hover:text-primary">Journal</Link>
        </nav>
        <div className="flex items-center gap-1">
          <button className="rounded p-2 hover:bg-mint" aria-label="Search" onClick={() => setSearchOpen(true)}><Search size={18} /></button>
          <Link className="hidden rounded p-2 hover:bg-mint sm:block" aria-label="Wishlist" href="/account/wishlist"><Heart size={18} /></Link>
          <Link className="hidden rounded p-2 hover:bg-mint sm:block" aria-label="Account" href="/account"><UserRound size={18} /></Link>
          <button className="relative rounded p-2 hover:bg-mint" aria-label={`Open cart, ${itemCount} items`} onClick={() => setCartOpen(true)}><ShoppingBag size={18} /><span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-saffron text-[9px] font-bold text-ink">{itemCount}</span></button>
        </div>
      </div>
    </header>
    <Drawer open={menuOpen} title="Clinical collections" onClose={() => setMenuOpen(false)}><nav className="grid gap-2" aria-label="Mobile navigation">{navGroups.map((group) => <div key={group.label} className="border-b border-sand pb-2"><Link className="flex min-h-11 items-center justify-between font-semibold text-primary" href={group.href} onClick={() => setMenuOpen(false)}>{group.label}<ChevronRight size={16} /></Link>{group.links.map((link) => <Link className="block py-2 text-sm text-muted" key={link} href={`${group.href}?category=${encodeURIComponent(link)}`} onClick={() => setMenuOpen(false)}>{link}</Link>)}</div>)}<Link className="min-h-11 py-3 font-semibold" href="/help" onClick={() => setMenuOpen(false)}>Help & Support</Link></nav></Drawer>
    <MiniCartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    {searchOpen && <div className="fixed inset-0 z-50 overflow-y-auto bg-surface" role="dialog" aria-modal="true" aria-label="Search overlay"><div className="mx-auto max-w-5xl px-6 py-8"><div className="flex items-center justify-between"><span className="font-display text-2xl font-semibold text-primary">Engineered scrubs & workwear</span><button className="rounded p-2 hover:bg-mint" aria-label="Close search" onClick={() => setSearchOpen(false)}><X /></button></div><form onSubmit={submitSearch} className="mt-8 flex items-center gap-3 border-b-2 border-primary pb-3"><Search className="text-muted" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search navy scrub, lab coats, fabric..." className="min-h-12 flex-1 bg-transparent text-xl outline-none placeholder:text-muted" /><span className="hidden text-xs text-muted sm:block">ESC to close</span></form><div className="mt-10 grid gap-8 md:grid-cols-3"><div><p className="mb-3 text-xs uppercase tracking-widest text-muted">Popular searches</p>{["Antimicrobial V-Neck Top", "Caduceus 9-Pocket Cargo Jogger", "100% Bleach-Safe White Coat", "High-Rise Scrub Pant"].map((term, index) => <button key={term} className="flex w-full items-center gap-3 py-3 text-left hover:text-primary" onClick={() => { setQuery(term); router.push(`/search?q=${encodeURIComponent(term)}`); setSearchOpen(false); }}><span className="text-muted">{index + 1}</span>{term}</button>)}</div><div className="md:col-span-2"><p className="mb-3 text-xs uppercase tracking-widest text-muted">Clinical collections</p><div className="grid gap-3 sm:grid-cols-2">{navGroups.flatMap((group) => group.links.slice(0, 2)).map((link) => <Link key={link} href={`/search?q=${encodeURIComponent(link)}`} onClick={() => setSearchOpen(false)} className="rounded-card border border-sand p-4 hover:border-primary hover:bg-mint">{link}<ChevronRight className="mt-2 text-primary" size={16} /></Link>)}</div></div></div></div></div>}
  </>;
}

export function StorefrontFooter() { return <footer className="bg-primary-dark text-white"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-6"><div className="lg:col-span-2"><Link href="/" className="font-display text-2xl">Velcura</Link><p className="mt-1 text-xs uppercase tracking-widest text-white/60">by Vastram</p><p className="mt-4 max-w-xs text-sm leading-6 text-white/75">Precision clinical apparel and biological textile systems engineered for rigorous healthcare environments.</p></div>{[{ title: "Shop", links: ["Women's Scrubs", "Men's Scrubs", "Lab Coats", "Clinical Footwear"] }, { title: "Institutional", links: ["Hospital Procurement", "Custom Crest Embroidery", "Annual Linen Contracts", "RFP Portal"] }, { title: "Technology", links: ["Silver-Weave Antimicrobial", "Fluid Barrier Repel-X", "Thermoregulatory Fibers", "Autoclave Durability"] }, { title: "About", links: ["The Vastram Heritage", "Clinical Advisory Board", "Manufacturing Units", "Careers"] }].map((column) => <div key={column.title}><p className="mb-3 text-xs uppercase tracking-widest text-white/60">{column.title}</p><div className="grid gap-2 text-sm text-white/80">{column.links.map((link) => <Link key={link} href={`/search?q=${encodeURIComponent(link)}`} className="hover:text-saffron">{link}</Link>)}</div></div>)}<div><p className="mb-3 text-xs uppercase tracking-widest text-white/60">Support</p><div className="grid gap-2 text-sm text-white/80"><Link href="/size-guide">Fit & Sizing Guide</Link><Link href="/help">Track Bulk Shipment</Link><Link href="/contact">Contact Concierge</Link></div></div></div><div className="border-t border-white/15 px-6 py-4"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 text-xs text-white/60"><span>UPI · RuPay · VISA · MASTERCARD · GSTIN: 27AABCY1234F1ZX</span><span>© 2026 Velcura by Vastram. All rights reserved.</span></div></div></footer>; }

export function StorefrontLayout({ children }: { children: ReactNode }) { return <><StorefrontHeader />{children}<FitSizeHint /><StorefrontFooter /></>; }

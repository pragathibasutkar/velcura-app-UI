"use client";

import { usePathname } from "next/navigation";
import { Ruler } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui";

export function FitSizeHint() { const pathname = usePathname(); const [size, setSize] = useState<string | null>(null); useEffect(() => { if (!pathname.startsWith("/products/")) return; const stored = window.localStorage.getItem("velcura:profile-fit"); if (!stored) return; const fit = JSON.parse(stored) as { chest?: string }; const chest = Number(fit.chest); setSize(chest <= 96 ? "S" : chest <= 102 ? "M" : chest <= 108 ? "L" : "XL"); }, [pathname]); if (!size) return null; return <div className="fixed bottom-5 left-5 z-30 rounded-card border border-sand bg-surface p-3 shadow-modal"><Badge tone="success"><Ruler size={13} /> Saved fit suggests Size {size}</Badge><p className="mt-1 text-xs text-muted">Based on your clinical measurements</p></div>; }

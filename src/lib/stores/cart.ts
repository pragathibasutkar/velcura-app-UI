import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products } from "@/lib/mock-data";

export type CartLine = { lineId: string; productId: string; quantity: number; size: string; color: string };
type CartState = { lines: CartLine[]; itemCount: number; add: (quantity?: number) => void; addItem: (productId: string, quantity?: number, size?: string, color?: string) => void; updateQuantity: (lineId: string, quantity: number) => void; removeItem: (lineId: string) => void; clear: () => void };

const initialLines: CartLine[] = [
  { lineId: "classic-v-neck-m", productId: "classic-v-neck", quantity: 1, size: "M", color: "Deep Teal" },
  { lineId: "caduceus-jogger-m", productId: "caduceus-jogger", quantity: 1, size: "M", color: "Dusty Blue" },
  { lineId: "botanical-cap-one", productId: "botanical-cap", quantity: 1, size: "One Size", color: "Deep Teal" },
];
const countLines = (lines: CartLine[]) => lines.reduce((sum, line) => sum + line.quantity, 0);

export const useCartStore = create<CartState>()(persist((set) => ({
  lines: initialLines,
  itemCount: countLines(initialLines),
  add: (quantity = 1) => set((state) => { const lines = state.lines.length ? state.lines.map((line, index) => index === 0 ? { ...line, quantity: line.quantity + quantity } : line) : state.lines; return { lines, itemCount: countLines(lines) }; }),
  addItem: (productId, quantity = 1, size, color) => set((state) => {
    const product = products.find((item) => item.id === productId);
    const lineId = `${productId}-${(size ?? product?.sizes[0] ?? "one").toLowerCase().replaceAll(" ", "-")}`;
    const existing = state.lines.find((line) => line.lineId === lineId);
    const lines = existing ? state.lines.map((line) => line.lineId === lineId ? { ...line, quantity: line.quantity + quantity } : line) : [...state.lines, { lineId, productId, quantity, size: size ?? product?.sizes[0] ?? "One Size", color: color ?? product?.color ?? "Deep Teal" }];
    return { lines, itemCount: countLines(lines) };
  }),
  updateQuantity: (lineId, quantity) => set((state) => { const lines = quantity <= 0 ? state.lines.filter((line) => line.lineId !== lineId) : state.lines.map((line) => line.lineId === lineId ? { ...line, quantity } : line); return { lines, itemCount: countLines(lines) }; }),
  removeItem: (lineId) => set((state) => { const lines = state.lines.filter((line) => line.lineId !== lineId); return { lines, itemCount: countLines(lines) }; }),
  clear: () => set({ lines: [], itemCount: 0 }),
}), { name: "velcura-cart", partialize: (state) => ({ lines: state.lines, itemCount: state.itemCount }) }));

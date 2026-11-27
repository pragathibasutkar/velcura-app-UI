export type Product = { id: string; name: string; category: string; price: number; color: string; sizes: string[]; image: string; inventory: number };
export type Order = { id: string; customer: string; total: number; status: "Pending" | "In Transit" | "Delivered" | "Attention"; placedAt: string };

export const products: Product[] = [
  { id: "classic-v-neck", name: "Ayur-Flex™ Classic V-Neck Scrub Top", category: "Women's Scrubs", price: 1499, color: "Deep Teal", sizes: ["XS", "S", "M", "L", "XL"], image: "/images/high-resolution-front-view-photograph-of-a-premium-deep-teal-medical-scrub-top.png", inventory: 42 },
  { id: "caduceus-jogger", name: "Caduceus Ergonomic Scrub Jogger", category: "Men's Scrubs", price: 1899, color: "Dusty Blue", sizes: ["S", "M", "L", "XL"], image: "/images/studio-catalog-photography-of-indian-female-surgeon-healthcare-worker-wearing.png", inventory: 18 },
  { id: "botanical-cap", name: "Botanical Scrub Cap & Mask Set", category: "Accessories", price: 699, color: "Sage Green", sizes: ["One Size"], image: "/images/textile-swatches-of-rich-deep-teal-terracotta-dusty-blue-and-plum-hospital.png", inventory: 76 },
  { id: "kinetic-athletic", name: "Kinetic Athletic Scrub Top", category: "Women's Scrubs", price: 1899, color: "Dusty Blue", sizes: ["XS", "S", "M", "L", "XL"], image: "/images/studio-catalog-photography-of-indian-female-doctor-wearing-deep-teal-four-way.png", inventory: 31 },
  { id: "consul-mandarin", name: "Consul Mandarin Scrub Set", category: "Women's Scrubs", price: 3199, color: "Plum Aubergine", sizes: ["S", "M", "L", "XL"], image: "/images/studio-fashion-shot-of-indian-female-nurse-doctor-wearing-slim-tailored-olive.png", inventory: 22 },
  { id: "prana-layer", name: "Prana Underscrub Thermal Layer", category: "Women's Scrubs", price: 1199, color: "Deep Navy", sizes: ["XS", "S", "M", "L", "XL"], image: "/images/studio-catalog-photography-of-indian-female-surgeon-healthcare-worker-wearing.png", inventory: 12 },
  { id: "aethelgard-pant", name: "Aethelgard High-Rise Pant", category: "Women's Scrubs", price: 1799, color: "Deep Teal", sizes: ["XS", "S", "M", "L", "XL", "2XL"], image: "/images/clean-modern-hospital-procurement-director-inspecting-folded-premium-teal-and.png", inventory: 44 },
];
export const orders: Order[] = [
  { id: "VLC-9204", customer: "Dr. Priya Sharma", total: 3498, status: "In Transit", placedAt: "18 Nov 2026" },
  { id: "VLC-9188", customer: "Dr. Radhika Iyer", total: 7896, status: "Delivered", placedAt: "02 Nov 2026" },
];
export const assets = { hero: "/images/editorial-healthcare-fashion-banner-with-measuring-tape-ergonomic-textile.png", founder: "/images/professional-editorial-portrait-of-an-indian-woman-founder-and-textile-engineer.png", sizeGuide: "/images/technical-scrub-top-measurement-diagram.png", map: "/images/stylized-modern-minimal-clean-vector-map-thumbnail-of-bengaluru-indiranagar.png" } as const;

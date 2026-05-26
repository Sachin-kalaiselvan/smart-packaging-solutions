import { createFileRoute, Link } from "@tanstack/react-router";
import { Box, Layers, PackageCheck, Sparkles, Gift, ShoppingBag, BookOpen, Cookie, ChevronDown, ChevronUp, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Smart Packaging Solutions" },
      { name: "description", content: "Corrugated boxes, mono cartons, e-commerce mailers and custom printed packaging — full specs, GSM ratings and volume pricing." },
    ],
  }),
  component: ProductsPage,
});

const items = [
  {
    icon: Box,
    name: "3-Ply Corrugated Boxes",
    desc: "Lightweight shippers ideal for products under 5 kg.",
    specs: ["120–150 GSM liner", "Custom L×W×H", "Brown / White kraft", "Burst strength 5–8 kg/cm²", "Flute: B or C flute"],
    priceRange: "₹8 – ₹22 per unit",
    moq: "MOQ: 500 units",
    bestFor: "FMCG, daily essentials, light e-commerce",
  },
  {
    icon: Layers,
    name: "5-Ply Corrugated Boxes",
    desc: "Heavy-duty boxes for fragile or heavy goods up to 25 kg.",
    specs: ["150–200 GSM liner", "Burst strength 12+ kg/cm²", "Edge crush tested (ECT)", "Flute: BC double flute", "Compression: 300–500 kg"],
    priceRange: "₹18 – ₹35 per unit",
    moq: "MOQ: 500 units",
    bestFor: "Electronics, glassware, heavy FMCG",
  },
  {
    icon: PackageCheck,
    name: "7-Ply Heavy Boxes",
    desc: "Industrial-grade cartons for export & long-haul logistics.",
    specs: ["200+ GSM liner", "Stackable (500+ kg)", "Pan-India transit tested", "Flute: EB triple wall", "Export-grade quality"],
    priceRange: "₹35 – ₹60 per unit",
    moq: "MOQ: 1,000 units",
    bestFor: "Auto parts, machinery, industrial export",
  },
  {
    icon: Sparkles,
    name: "Premium Mono Cartons",
    desc: "Retail-ready cartons with luxe finishes — matte, gloss, foil.",
    specs: ["300–1200 GSM SBS board", "Spot UV / Lamination", "Hot foil stamping", "Embossing / Debossing", "Pantone colour matching"],
    priceRange: "₹12 – ₹45 per unit",
    moq: "MOQ: 500 units",
    bestFor: "Retail FMCG, cosmetics, pharma",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce Mailers",
    desc: "Self-locking mailer boxes engineered for D2C unboxing.",
    specs: ["3-ply or 5-ply corrugated", "Tear-strip easy-open", "Inside print available", "Right-sized for any SKU", "Tape-free self-lock"],
    priceRange: "₹15 – ₹30 per unit",
    moq: "MOQ: 500 units",
    bestFor: "D2C brands, Shopify stores, subscription boxes",
  },
  {
    icon: Gift,
    name: "Gift & Subscription Boxes",
    desc: "Magnetic-close rigid boxes for premium gifting.",
    specs: ["Rigid 2mm greyboard", "Magnetic closure", "Ribbon & tissue inserts", "Custom printed lid", "Microfibre / EVA foam lining"],
    priceRange: "₹55 – ₹120 per unit",
    moq: "MOQ: 200 units",
    bestFor: "Luxury gifting, wedding favours, subscription kits",
  },
  {
    icon: Cookie,
    name: "Food & Bakery Cartons",
    desc: "Food-safe printed cartons for bakery, snacks & cloud kitchens.",
    specs: ["Food-grade PE-coated board", "Vegetable-based inks", "Grease & moisture resistant", "Compostable options", "FSSAI-compliant materials"],
    priceRange: "₹6 – ₹18 per unit",
    moq: "MOQ: 500 units",
    bestFor: "Cloud kitchens, bakeries, snack brands",
  },
  {
    icon: BookOpen,
    name: "Custom Printed Packaging",
    desc: "Your artwork — sampled, approved, produced.",
    specs: ["Up to 6 colour flexo/offset", "Digital printing available", "CMYK + Pantone", "Dieline provided free", "Proof before production"],
    priceRange: "Depends on box + print",
    moq: "MOQ: 500 units",
    bestFor: "Any brand wanting custom branded packaging",
  },
];

const volumeDiscounts = [
  { qty: "500 – 1,999 units", discount: "Standard price", saving: "Base rate", color: "bg-muted" },
  { qty: "2,000 – 4,999 units", discount: "Up to 18% off", saving: "Save ₹2–5 per box", color: "bg-accent/10" },
  { qty: "5,000 – 9,999 units", discount: "Up to 32% off", saving: "Save ₹4–10 per box", color: "bg-accent/20" },
  { qty: "10,000+ units", discount: "Up to 45% off", saving: "Save ₹8–18 per box", color: "bg-gradient-brand text-accent-foreground" },
];

function ProductsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <section className="bg-gradient-hero py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Products</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">Built to fit, made to last.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every product is fully customisable in size, ply, print and finish. Click any product to see full specs and pricing.
          </p>
        </div>
      </section>

      {/* Products Grid with expandable specs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => {
              const isOpen = expanded === p.name;
              return (
                <Reveal key={p.name} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-border bg-gradient-card overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground shadow-soft">
                          <p.icon className="h-6 w-6" />
                        </div>
                        <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          <Tag className="h-3 w-3" />{p.moq}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-primary">{p.name}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>

                      <div className="mt-3 font-semibold text-accent">{p.priceRange}</div>

                      {/* Expandable specs */}
                      <button
                        onClick={() => setExpanded(isOpen ? null : p.name)}
                        className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
                      >
                        {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                        {isOpen ? "Hide specs" : "View full specs"}
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2 border-t border-border mt-3">
                          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technical Specs</div>
                          <ul className="space-y-1.5">
                            {p.specs.map((s) => (
                              <li key={s} className="flex items-center gap-2 text-xs text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {s}
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2">
                            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Best For</div>
                            <div className="mt-1 text-xs text-foreground/80">{p.bestFor}</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
              <Link to="/contact">Request a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Volume Pricing</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Order more, pay less per box.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our volume discount structure rewards growing brands. These savings apply across all box types.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {volumeDiscounts.map((tier, i) => (
              <Reveal key={tier.qty} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl p-6 ${tier.color} border border-border shadow-soft`}
                >
                  <div className="font-display text-lg font-bold text-primary">{tier.qty}</div>
                  <div className="mt-2 text-2xl font-bold text-accent">{tier.discount}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{tier.saving}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-primary">Looking for even lower rates?</div>
                  <div className="text-sm text-muted-foreground">Annual contracts and monthly replenishment orders get the best pricing.</div>
                </div>
                <Button asChild className="bg-gradient-brand text-accent-foreground hover:opacity-90">
                  <Link to="/contact">Discuss Bulk Pricing</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { motion } from "motion/react";
import { PriceCalculator } from "@/components/PriceCalculator";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Smart Packaging Solutions" },
      { name: "description", content: "Transparent pricing for corrugated boxes, mono cartons and custom packaging. Volume discounts available. MOQ from 500 units." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    qty: "500 – 2,000 units",
    priceRange: "₹8 – ₹22",
    unit: "per box",
    highlight: false,
    desc: "Perfect for D2C brands launching their first packaging run.",
    features: [
      "3-ply or 5-ply corrugated",
      "Standard brown kraft or white",
      "1–2 colour flexo print",
      "Custom L×W×H dimensions",
      "48-hour sample",
      "Pan-India delivery",
    ],
  },
  {
    name: "Growth",
    qty: "2,000 – 10,000 units",
    priceRange: "₹5 – ₹15",
    unit: "per box",
    highlight: true,
    desc: "Our most popular tier. Best value for scaling brands.",
    features: [
      "3-ply, 5-ply or 7-ply options",
      "Full-colour flexo or offset print",
      "Custom inside print available",
      "Brand-matching Pantone colours",
      "Priority production queue",
      "Dedicated account manager",
      "QC photos before dispatch",
    ],
  },
  {
    name: "Enterprise",
    qty: "10,000+ units",
    priceRange: "₹3 – ₹10",
    unit: "per box",
    highlight: false,
    desc: "Bulk pricing with the lowest per-unit cost. Ideal for large FMCG & logistics.",
    features: [
      "All ply options including 7-ply",
      "Automated production lines",
      "ISO-style batch QC",
      "Palletised bulk delivery",
      "Dedicated factory line",
      "Invoicing & credit terms",
      "Monthly replenishment schedule",
    ],
  },
];

const productPricing = [
  { product: "3-Ply Corrugated Box (Brown)", moq: "500", price500: "₹18–22", price2k: "₹12–15", price10k: "₹7–9", note: "Standard shipping box" },
  { product: "5-Ply Corrugated Box", moq: "500", price500: "₹25–35", price2k: "₹18–24", price10k: "₹11–15", note: "Heavy goods, e-commerce" },
  { product: "7-Ply Heavy Duty Box", moq: "1,000", price500: "₹45–60", price2k: "₹30–40", price10k: "₹20–28", note: "Export & industrial" },
  { product: "Mono Carton (Unprinted)", moq: "500", price500: "₹8–14", price2k: "₹5–9", price10k: "₹3–6", note: "Retail packaging" },
  { product: "Mono Carton (4-colour print)", moq: "1,000", price500: "₹18–28", price2k: "₹12–18", price10k: "₹7–12", note: "Brand packaging" },
  { product: "E-commerce Mailer Box", moq: "500", price500: "₹20–30", price2k: "₹13–20", price10k: "₹8–13", note: "D2C unboxing" },
  { product: "Gift / Rigid Box", moq: "200", price500: "₹60–100", price2k: "₹40–70", price10k: "₹25–45", note: "Premium gifting" },
];

function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Pricing</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            Simple, transparent pricing.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No hidden charges. Price depends on box type, quantity and print complexity. The more you order, the less you pay per box.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full rounded-3xl border p-8 shadow-soft ${
                    tier.highlight
                      ? "border-accent bg-gradient-navy text-primary-foreground"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-bold text-accent-foreground">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={tier.highlight ? "text-primary-foreground" : "text-primary"}>
                    <div className="font-display text-2xl font-bold">{tier.name}</div>
                    <div className="mt-1 text-sm opacity-70">{tier.qty}</div>
                    <div className="mt-4 font-display text-4xl font-bold">
                      {tier.priceRange}
                      <span className="ml-1 text-base font-normal opacity-60">{tier.unit}</span>
                    </div>
                    <p className="mt-3 text-sm opacity-80">{tier.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className={`mt-8 w-full ${
                      tier.highlight
                        ? "bg-gradient-brand text-accent-foreground hover:opacity-90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <Link to="/contact">
                      Get a Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Estimate</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary">
              Get an instant estimate
            </h2>
            <p className="mt-3 mb-8 text-muted-foreground">
              Enter your box dimensions and quantity for a ballpark price. We'll send you an exact quote within 1 hour.
            </p>
            <PriceCalculator />
          </Reveal>
        </div>
      </section>
      
      {/* Product Price Table */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Price Reference</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Per-product pricing guide
            </h2>
            <p className="mt-3 text-muted-foreground">
              Indicative prices per unit based on standard dimensions. Final price varies by size, print, and finish.
            </p>
          </Reveal>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border shadow-soft">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product</th>
                  <th className="px-4 py-4 text-center font-semibold">MOQ</th>
                  <th className="px-4 py-4 text-center font-semibold">500 units</th>
                  <th className="px-4 py-4 text-center font-semibold">2,000 units</th>
                  <th className="px-4 py-4 text-center font-semibold">10,000+ units</th>
                  <th className="px-4 py-4 text-left font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {productPricing.map((row, i) => (
                  <motion.tr
                    key={row.product}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-secondary/40 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-primary">{row.product}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{row.moq}</td>
                    <td className="px-4 py-4 text-center font-semibold text-foreground">{row.price500}</td>
                    <td className="px-4 py-4 text-center font-semibold text-accent">{row.price2k}</td>
                    <td className="px-4 py-4 text-center font-bold text-primary">{row.price10k}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.note}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * All prices are indicative and exclude GST (18%). Final quote based on exact dimensions and print requirements. <Link to="/contact" className="text-accent underline">Request exact quote →</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-primary">Not sure what you need?</h2>
            <p className="mt-3 text-muted-foreground">
              Call us or send your specs — we'll send a sample, a dieline and a firm quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
                <Link to="/contact">Get Exact Quote <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+919964462999"><Phone className="mr-2 h-4 w-4" /> +91 99644 62999</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

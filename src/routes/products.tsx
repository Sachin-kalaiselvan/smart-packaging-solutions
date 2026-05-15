import { createFileRoute, Link } from "@tanstack/react-router";
import { Box, Layers, PackageCheck, Sparkles, Gift, ShoppingBag, BookOpen, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Smart Packaging Solutions" },
      { name: "description", content: "Corrugated boxes, mono cartons, e-commerce mailers and custom printed packaging — explore our full range." },
    ],
  }),
  component: ProductsPage,
});

const items = [
  { icon: Box, name: "3-Ply Corrugated Boxes", desc: "Lightweight shippers ideal for products under 5 kg.", specs: ["120–150 GSM", "Custom L×W×H", "Brown / White kraft"] },
  { icon: Layers, name: "5-Ply Corrugated Boxes", desc: "Heavy-duty boxes for fragile or heavy goods up to 25 kg.", specs: ["150–200 GSM", "Burst strength 12+ kg", "Edge crush certified"] },
  { icon: PackageCheck, name: "7-Ply Heavy Boxes", desc: "Industrial-grade cartons for export & long-haul logistics.", specs: ["200+ GSM", "Stackable", "Pan-India tested"] },
  { icon: Sparkles, name: "Premium Mono Cartons", desc: "Retail-ready cartons with luxe finishes — matte, gloss, foil.", specs: ["Up to 1200 GSM", "Spot UV / Foil", "Embossing"] },
  { icon: ShoppingBag, name: "E-commerce Mailers", desc: "Self-locking mailer boxes engineered for D2C unboxing.", specs: ["Tear-strip option", "Inner print", "Right-sized"] },
  { icon: Gift, name: "Gift & Subscription Boxes", desc: "Magnetic-close rigid boxes for premium gifting.", specs: ["Rigid board", "Ribbon / inserts", "Custom dieline"] },
  { icon: Cookie, name: "Food & Bakery Cartons", desc: "Food-safe printed cartons for bakery, snacks & cloud kitchens.", specs: ["Food-grade ink", "Grease resistant", "Compostable"] },
  { icon: BookOpen, name: "Custom Printed Packaging", desc: "Your artwork — sampled, approved, produced.", specs: ["Up to 6 colours", "Flexo / Offset / Digital", "MOQ from 500"] },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Products</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">Built to fit, made to last.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse our most-loved packaging formats. Every product is fully customisable in size, ply, print and finish.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-gradient-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground shadow-soft">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-foreground/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
              <Link to="/contact">Request a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

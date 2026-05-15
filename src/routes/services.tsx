import { createFileRoute, Link } from "@tanstack/react-router";
import { Pencil, Hammer, Printer, Truck, Recycle, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Smart Packaging Solutions" },
      { name: "description", content: "Design, manufacturing, printing, fulfilment & sustainability consulting for packaging." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Pencil, title: "Structural Design", desc: "Free dieline design tailored to your product, weight and freight class." },
  { icon: Hammer, title: "Manufacturing", desc: "Automated corrugation, die-cutting and finishing in our Bengaluru unit." },
  { icon: Printer, title: "Branded Printing", desc: "Flexo, offset and digital printing up to 6 colours with Pantone matching." },
  { icon: Truck, title: "Logistics & Dispatch", desc: "Pan-India delivery with batch tracking and palletised loads." },
  { icon: Recycle, title: "Sustainability Audit", desc: "Material right-sizing & FSC-certified board options to lower your footprint." },
  { icon: Headphones, title: "Account Management", desc: "Dedicated relationship manager for forecasting and reorders." },
];

const steps = [
  { n: "01", title: "Discover", desc: "Share specs & brand brief — we audit your product and freight needs." },
  { n: "02", title: "Design & Sample", desc: "We deliver a structural dieline + printed sample within 48 hours." },
  { n: "03", title: "Approve & Produce", desc: "Sign off on the sample. We schedule production with full QC." },
  { n: "04", title: "Dispatch", desc: "Inspected, palletised and shipped to your warehouse on time." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">What we do</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">End-to-end packaging, one partner.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Design, manufacturing, printing, dispatch — all under one roof so you ship faster and stress less.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition group-hover:bg-gradient-brand group-hover:text-accent-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">From idea to dispatch in 4 steps</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-5xl font-bold text-gradient-brand opacity-90">{s.n}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
              <Link to="/contact">Start your project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

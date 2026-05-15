import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import factory from "@/assets/factory.jpg";
import { Leaf, Target, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Smart Packaging Solutions" },
      { name: "description", content: "Smart Packaging Solutions is a Bengaluru-based carton manufacturer building sustainable, brand-grade packaging since 2012." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, title: "Sustainable by default", desc: "We design for recyclability and source FSC-friendly board wherever possible." },
  { icon: Target, title: "Precision-obsessed", desc: "Every box is dimensionally checked. Tolerances are tighter than industry norms." },
  { icon: Heart, title: "Partner, not vendor", desc: "We grow with our clients — from startups shipping their first 100 to scale-ups shipping millions." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">About Us</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            Crafting packaging with purpose since 2012.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Smart Packaging Solutions began as a small corrugation unit in Bengaluru. Today, we manufacture millions of cartons a year for some of India's most loved brands — without losing the personal touch we started with.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <img
              src={factory}
              alt="Smart Packaging Solutions factory"
              width={1400}
              height={1000}
              loading="lazy"
              className="rounded-3xl shadow-soft ring-1 ring-border"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Our story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded by a team passionate about manufacturing, Smart Packaging Solutions was built to bridge a gap we saw daily — fast-growing brands struggling to find packaging partners who cared about quality, brand integrity and the planet.
            </p>
            <p className="mt-4 text-muted-foreground">
              From our facility in Soladevanahalli, we now design and produce a full range of corrugated and mono cartons — combining automation with the craftsmanship that earned us our first 100 customers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Values</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">What we stand for</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

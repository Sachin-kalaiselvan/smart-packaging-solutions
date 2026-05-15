import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Recycle, ShieldCheck, Truck, Sparkles, Box, Layers, Printer, PackageCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import heroBoxes from "@/assets/hero-boxes.jpg";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Packaging Solutions — Custom Carton Boxes, Bengaluru" },
      { name: "description", content: "Premium corrugated cartons, mono cartons and printed packaging crafted in Bengaluru. Made-to-order, eco-friendly, fast turnaround." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Recycle, title: "Eco-conscious", desc: "100% recyclable kraft & corrugated material sourced responsibly." },
  { icon: ShieldCheck, title: "Burst-tested strength", desc: "3-ply, 5-ply & 7-ply boxes built to survive every shipping route." },
  { icon: Printer, title: "Brand-grade print", desc: "Flexo, offset & digital printing up to 6 colours with crisp finish." },
  { icon: Truck, title: "On-time delivery", desc: "Pan-India dispatch with dedicated logistics from our Bengaluru unit." },
];

const products = [
  { icon: Box, title: "Corrugated Boxes", desc: "Heavy-duty shipping & storage cartons in any dimension.", tag: "Best seller" },
  { icon: Layers, title: "Mono Cartons", desc: "Premium retail-ready cartons with high-end print finishes." },
  { icon: PackageCheck, title: "E-commerce Mailers", desc: "Right-sized mailer boxes engineered for D2C unboxing." },
  { icon: Sparkles, title: "Custom Printed", desc: "Your artwork, your brand — sampled, approved, produced." },
];

const stats = [
  { v: "12+", l: "Years of experience" },
  { v: "500+", l: "Brands packaged" },
  { v: "2M+", l: "Boxes shipped / yr" },
  { v: "48h", l: "Sample turnaround" },
];

const testimonials = [
  { name: "Anjali R.", role: "Founder, Bloom & Brew", quote: "Their printed mailer boxes elevated our unboxing — customers literally post about it." },
  { name: "Karthik V.", role: "Ops Lead, Kindle D2C", quote: "Reliable, fast and the burst strength is genuinely better than our previous vendor." },
  { name: "Meera S.", role: "Founder, Saachi Studio", quote: "Smart Packaging took our brand colours and delivered cartons that feel premium end-to-end." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-card/70 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Bengaluru's trusted packaging partner since 2012
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] text-primary sm:text-5xl lg:text-6xl"
            >
              Carton boxes that <span className="text-gradient-brand">protect, perform & impress.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              From sturdy corrugated shippers to gorgeous printed mono cartons — Smart Packaging Solutions designs and manufactures packaging tailored to your brand and your supply chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground shadow-soft hover:opacity-90">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/products">Explore Products</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-4 gap-4 max-w-lg"
            >
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-primary sm:text-3xl">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
            <img
              src={heroBoxes}
              alt="Stack of premium corrugated carton boxes"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-soft ring-1 ring-border"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft border border-border"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground">
                <PackageCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-primary">2M+ boxes / year</div>
                <div className="text-xs text-muted-foreground">Trusted by 500+ brands</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Why Smart Packaging</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Engineered for protection. Designed for shelves.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every carton we make is tested for compression, drop and burst — so your product arrives exactly as you intended.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-gradient-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground shadow-soft transition group-hover:scale-110">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Range</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Packaging for every product</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:bg-primary/5">
              <Link to="/products">See all products <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:shadow-soft">
                  {p.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {p.tag}
                    </span>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition group-hover:bg-gradient-brand group-hover:text-accent-foreground">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY / ABOUT STRIP */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <img
              src={factory}
              alt="Smart Packaging factory floor in Bengaluru"
              width={1400}
              height={1000}
              loading="lazy"
              className="rounded-3xl shadow-soft ring-1 ring-border"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Made in Bengaluru</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              A modern factory. A craftsman's eye.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our 25,000 sq.ft. facility in Soladevanahalli runs automated corrugation, die-cutting and printing lines — backed by a quality team that inspects every batch before dispatch.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Automated 5-ply corrugation line",
                "In-house flexo & offset printing",
                "Die-cutting up to 1200 GSM board",
                "Strict ISO-style QC at every stage",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-accent-foreground">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/about">More about us</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Loved by brands</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">What our clients say</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm text-foreground/85">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-navy px-8 py-14 text-center shadow-glow sm:px-14">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-glow/30 blur-3xl" />
              <h2 className="relative font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to upgrade your packaging?
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/80">
                Send us your specs — we'll respond within 1 business hour with a sample plan and quote.
              </p>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
                  <Link to="/contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:+919964462999">Call +91 99644 62999</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

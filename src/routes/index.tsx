import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight, Recycle, ShieldCheck, Truck, Sparkles, Box, Layers,
  Printer, PackageCheck, Star, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { TiltCard } from "@/components/TiltCard";
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
  { v: 12, suffix: "+", l: "Years experience" },
  { v: 500, suffix: "+", l: "Brands packaged" },
  { v: 2, suffix: "M+", l: "Boxes / year" },
  { v: 48, suffix: "h", l: "Sample turnaround" },
];

const steps = [
  { n: "01", t: "Discover", d: "Share specs & freight needs — we audit and consult." },
  { n: "02", t: "Design", d: "Free dieline + printed sample within 48 hours." },
  { n: "03", t: "Produce", d: "Automated production with batch QC at every stage." },
  { n: "04", t: "Dispatch", d: "Palletised pan-India delivery, on schedule." },
];

const testimonials = [
  { name: "Anjali R.", role: "Founder, Bloom & Brew", quote: "Their printed mailer boxes elevated our unboxing — customers literally post about it." },
  { name: "Karthik V.", role: "Ops Lead, Kindle D2C", quote: "Reliable, fast and the burst strength is genuinely better than our previous vendor." },
  { name: "Meera S.", role: "Founder, Saachi Studio", quote: "Smart Packaging took our brand colours and delivered cartons that feel premium end-to-end." },
];

function FloatingBox({
  className, delay = 0, size = 80, rotate = 0,
}: { className?: string; delay?: number; size?: number; rotate?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className ?? ""}`}
      initial={{ opacity: 0, y: 30, rotate: rotate - 10 }}
      animate={{
        opacity: 1,
        y: [0, -16, 0],
        rotate: [rotate, rotate + 4, rotate],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-xl">
        <defs>
          <linearGradient id={`g${delay}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.21 130)" />
            <stop offset="100%" stopColor="oklch(0.55 0.16 145)" />
          </linearGradient>
        </defs>
        <polygon points="50,10 90,30 90,75 50,95 10,75 10,30" fill={`url(#g${delay})`} stroke="oklch(0.36 0.13 258)" strokeWidth="2" />
        <polyline points="50,10 50,55 90,30" fill="none" stroke="oklch(0.36 0.13 258 / 0.6)" strokeWidth="1.5" />
        <polyline points="50,55 10,30" fill="none" stroke="oklch(0.36 0.13 258 / 0.6)" strokeWidth="1.5" />
        <polyline points="50,55 50,95" fill="none" stroke="oklch(0.36 0.13 258 / 0.6)" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-accent/30 blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] rounded-full bg-brand-lime/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        </div>

        {/* Floating decorative boxes */}
        <FloatingBox className="top-24 right-[8%] hidden lg:block" delay={0} size={70} rotate={-12} />
        <FloatingBox className="top-[55%] right-[3%] hidden lg:block" delay={1.2} size={56} rotate={15} />
        <FloatingBox className="bottom-16 left-[6%] hidden lg:block" delay={0.6} size={64} rotate={8} />
        <FloatingBox className="top-[20%] left-[3%] hidden xl:block" delay={1.8} size={48} rotate={-6} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28"
        >
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

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {"Carton boxes that".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-primary mr-3"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="block text-shimmer"
              >
                protect, perform &amp; impress.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              From sturdy corrugated shippers to gorgeous printed mono cartons — we design and manufacture packaging tailored to your brand and your supply chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="group bg-gradient-brand text-accent-foreground shadow-soft hover:opacity-90">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/products">Explore Products</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 grid grid-cols-4 gap-4 max-w-lg"
            >
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    <CountUp to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-25 blur-2xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.32, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={heroBoxes}
              alt="Stack of premium corrugated carton boxes"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-soft ring-1 ring-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 180 }}
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, type: "spring" }}
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-full bg-card px-3 py-1.5 shadow-soft border border-border"
            >
              <div className="flex -space-x-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-6 w-6 rounded-full ring-2 ring-card" style={{ background: i === 0 ? "var(--brand-leaf)" : i === 1 ? "var(--brand-navy)" : "var(--brand-lime)" }} />
                ))}
              </div>
              <span className="text-xs font-medium text-primary">500+ happy brands</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Marquee />

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

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1200 }}>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <TiltCard className="group relative h-full rounded-2xl border border-border bg-gradient-card p-6 transition-shadow hover:shadow-glow">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground shadow-soft transition-transform group-hover:scale-110 group-hover:-rotate-6">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-4 font-display text-lg font-semibold text-primary">{f.title}</h3>
                  <p className="relative mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-secondary/40 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Range</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Packaging for every product</h2>
            </div>
            <Button asChild variant="ghost" className="group text-primary hover:bg-primary/5">
              <Link to="/products">
                See all products
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1200 }}>
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-glow">
                  {p.tag && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent"
                    >
                      {p.tag}
                    </motion.span>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-accent-foreground group-hover:rotate-6">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              From idea to dispatch in 4 steps
            </h2>
          </Reveal>

          <div className="relative mt-16">
            {/* Animated connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-8 hidden h-0.5 origin-left bg-gradient-to-r from-accent via-brand-lime to-primary md:block"
            />

            <div className="grid gap-6 md:grid-cols-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-accent-foreground font-display font-bold text-lg shadow-glow ring-4 ring-background"
                  >
                    {s.n}
                  </motion.div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-primary">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACTORY STRIP */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-border">
              <img
                src={factory}
                alt="Smart Packaging factory in Bengaluru"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
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
              ].map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-foreground/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-accent-foreground">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/about">More about us</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Loved by brands</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">What our clients say</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3" style={{ perspective: 1200 }}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <TiltCard className="group relative h-full rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition-shadow hover:shadow-glow">
                  <Quote className="absolute right-5 top-5 h-10 w-10 text-accent/20" />
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <motion.div
                        key={k}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + k * 0.05 }}
                      >
                        <Star className="h-4 w-4 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <blockquote className="relative mt-3 text-sm text-foreground/85">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                </TiltCard>
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
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-lime/30 blur-3xl"
              />
              <h2 className="relative font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to upgrade your packaging?
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/80">
                Send us your specs — we'll respond within 1 business hour with a sample plan and quote.
              </p>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="group bg-gradient-brand text-accent-foreground hover:opacity-90">
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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

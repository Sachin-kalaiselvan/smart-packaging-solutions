import { createFileRoute, Link } from "@tanstack/react-router";
import { DeliveryMap } from "@/components/DeliveryMap";
import { Pencil, Hammer, Printer, Truck, Recycle, Headphones, Clock, CheckCircle2, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { motion } from "motion/react";
import { useState } from "react";

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

const timelineSteps = [
  {
    icon: "📞",
    step: "Day 0",
    title: "You Enquire",
    desc: "Send specs via form, WhatsApp or call. We respond within 1 business hour.",
    time: "< 1 hour response",
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: "📐",
    step: "Day 0–1",
    title: "We Design the Dieline",
    desc: "Our structural team creates a custom dieline matching your product dimensions and weight.",
    time: "Free of charge",
    color: "bg-purple-50 border-purple-200",
  },
  {
    icon: "📦",
    step: "Day 1–2",
    title: "Sample Dispatched",
    desc: "A physical printed sample is produced and dispatched to you — anywhere in India.",
    time: "48-hour guarantee",
    color: "bg-accent/10 border-accent/30",
  },
  {
    icon: "✅",
    step: "Day 3–5",
    title: "You Approve",
    desc: "Review the sample. Request tweaks if needed. We revise until you're happy.",
    time: "Unlimited revisions",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: "🏭",
    step: "Day 5–14",
    title: "Production",
    desc: "Full batch runs on our automated lines with QC inspections at every stage.",
    time: "7–10 working days",
    color: "bg-orange-50 border-orange-200",
  },
  {
    icon: "🚚",
    step: "Day 12–16",
    title: "Dispatch & Delivery",
    desc: "Palletised and shipped pan-India. Tracking number shared on dispatch.",
    time: "2–4 day delivery",
    color: "bg-primary/5 border-primary/20",
  },
];

{/* DELIVERY MAP SECTION */}
<section className="py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Reveal>
      <DeliveryMap />
    </Reveal>
  </div>
</section>

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our standard MOQ is 500 units for corrugated boxes and mono cartons. For rigid gift boxes, MOQ is 200 units. For large custom projects, we can discuss lower MOQs.",
  },
  {
    q: "How long does it take to get a sample?",
    a: "We dispatch samples within 48 hours of receiving your specifications. Delivery to most cities takes 1–2 additional days via courier.",
  },
  {
    q: "Do you charge for the dieline / structural design?",
    a: "No. Structural design and dieline creation are completely free for all customers. You own the dieline once produced.",
  },
  {
    q: "What types of printing do you offer?",
    a: "We offer flexographic (flexo) printing for corrugated boxes (up to 4 colours), offset printing for mono cartons (up to 6 colours + foil/UV), and digital printing for short runs and prototypes.",
  },
  {
    q: "Can you match my exact brand colours (Pantone)?",
    a: "Yes. We support Pantone colour matching for both flexo and offset printing. Please share your Pantone codes when enquiring.",
  },
  {
    q: "Do you deliver outside Bengaluru?",
    a: "Yes — we deliver pan-India. We work with Delhivery, BlueDart and dedicated logistics partners. Delivery typically takes 2–4 working days from dispatch.",
  },
  {
    q: "What is your payment terms?",
    a: "For new customers: 50% advance, 50% before dispatch. For repeat customers with good history, we offer credit terms of 15–30 days.",
  },
  {
    q: "Can I get my existing boxes replicated or improved?",
    a: "Absolutely. Share samples or measurements — we'll create a matching or upgraded dieline and produce accordingly.",
  },
  {
    q: "Do you offer food-safe packaging?",
    a: "Yes. We manufacture food-grade cartons using PE-coated boards and vegetable-based inks that comply with FSSAI guidelines.",
  },
  {
    q: "What is the production lead time after sample approval?",
    a: "Standard production takes 7–10 working days after sample approval. Rush orders (5–7 days) are available at a premium. Large orders (50,000+) may take 14–18 days.",
  },
];

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* Services Grid */}
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

      {/* TURNAROUND TIMELINE */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Turnaround</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              From enquiry to doorstep in 12–16 days.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Here's exactly what happens after you contact us — no surprises, no hidden delays.
            </p>
          </Reveal>

          <div className="mt-10 relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 hidden sm:block" />

            <div className="space-y-4">
              {timelineSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`relative flex gap-6 rounded-2xl border p-5 sm:ml-14 ${step.color}`}
                  >
                    {/* Dot on line */}
                    <div className="absolute -left-[3.25rem] top-5 hidden sm:flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-white text-[10px] font-bold ring-4 ring-background">
                      {i + 1}
                    </div>

                    <div className="text-3xl shrink-0">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{step.step}</span>
                          <h3 className="font-display text-lg font-bold text-primary">{step.title}</h3>
                        </div>
                        <span className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                          <Clock className="h-3 w-3" /> {step.time}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Rush Order Banner */}
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-navy p-6">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <div className="font-display font-bold text-primary-foreground">Need it faster?</div>
                  <div className="text-sm text-primary-foreground/70">Rush orders available. Sample in 24h, production in 5–7 days.</div>
                </div>
              </div>
              <Button asChild className="bg-gradient-brand text-accent-foreground hover:opacity-90 shrink-0">
                <Link to="/contact">Request Rush Order</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-muted-foreground">Everything you need to know before placing your first order.</p>
          </Reveal>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
                    >
                      <span className="font-semibold text-primary text-sm sm:text-base">{faq.q}</span>
                      {isOpen
                        ? <ChevronUp className="h-4 w-4 shrink-0 text-accent" />
                        : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                      }
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-muted-foreground border-t border-border pt-4">
                        <CheckCircle2 className="mr-2 inline h-4 w-4 text-accent" />
                        {faq.a}
                      </div>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl bg-accent/5 border border-accent/20 p-6 text-center">
              <p className="text-sm text-muted-foreground">Still have questions?</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                <Button asChild className="bg-gradient-brand text-accent-foreground hover:opacity-90">
                  <Link to="/contact">Ask Us Directly</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://wa.me/919964462999" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

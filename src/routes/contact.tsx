import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Smart Packaging Solutions" },
      { name: "description", content: "Get a free quote on custom carton boxes, corrugated packaging and printed mono cartons. Bengaluru-based, pan-India delivery." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section className="bg-gradient-hero py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">Let's package something great.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell us what you need — we usually respond within 1 business hour.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  toast.success("Thanks! We'll get back to you within 1 business hour.");
                  (e.target as HTMLFormElement).reset();
                }, 800);
              }}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <h2 className="font-display text-2xl font-bold text-primary">Request a quote</h2>
              <p className="mt-1 text-sm text-muted-foreground">Share your specs and our team will revert with a sample plan.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Company / Brand" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 ..." />
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="msg">Tell us about your packaging needs</Label>
                <Textarea id="msg" required rows={5} placeholder="Box type, dimensions (L×W×H), quantity, printing requirements…" />
              </div>

              <Button type="submit" disabled={loading} size="lg" className="mt-6 w-full bg-gradient-brand text-accent-foreground hover:opacity-90">
                {loading ? "Sending…" : "Send Enquiry"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <InfoCard icon={Phone} title="Call us" body={<a className="hover:text-accent" href="tel:+919964462999">+91 99644 62999</a>} />
              <InfoCard icon={Mail} title="Email" body={<a className="break-all hover:text-accent" href="mailto:smartpackagingsolutions26@gmail.com">smartpackagingsolutions26@gmail.com</a>} />
              <InfoCard
                icon={MapPin}
                title="Visit our factory"
                body={<>#01, SY No.56, Soladevanahalli Village, Kumbarahalli Main Road,<br />Achit Nagar Post, Bengaluru — 560107</>}
              />
              <InfoCard icon={Clock} title="Working hours" body={<>Mon — Sat · 9:30 am — 7:00 pm</>} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-primary">{title}</div>
        <div className="mt-0.5 text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Package, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function SampleRequestForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Sample request sent! We'll dispatch within 48 hours.");
      setOpen(false);
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Package className="h-4 w-4" />
        <span className="hidden sm:inline">Free Sample</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-lg rounded-t-3xl bg-card p-6 shadow-2xl sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-primary">Request a Free Sample</h2>
                  <p className="mt-1 text-sm text-muted-foreground">We dispatch within 48 hours. No cost, no commitment.</p>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-muted transition-colors">
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="s-name">Your Name</Label>
                    <Input id="s-name" required placeholder="Ravi Kumar" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="s-phone">WhatsApp Number</Label>
                    <Input id="s-phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="s-company">Company / Brand</Label>
                  <Input id="s-company" required placeholder="Your brand name" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="s-type">Box Type</Label>
                    <select id="s-type" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select type</option>
                      <option>3-Ply Corrugated</option>
                      <option>5-Ply Corrugated</option>
                      <option>7-Ply Heavy Duty</option>
                      <option>Mono Carton</option>
                      <option>E-commerce Mailer</option>
                      <option>Gift Box</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="s-qty">Monthly Quantity Needed</Label>
                    <select id="s-qty" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Approx. qty</option>
                      <option>100 – 500</option>
                      <option>500 – 2,000</option>
                      <option>2,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="s-dims">Approx. Dimensions (L × W × H cm)</Label>
                  <Input id="s-dims" placeholder="e.g. 30 × 20 × 15 cm" />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-gradient-brand text-accent-foreground hover:opacity-90"
                >
                  {loading ? "Sending…" : (
                    <><Send className="mr-2 h-4 w-4" /> Request My Free Sample</>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Sample delivered anywhere in India · ₹0 cost to you
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

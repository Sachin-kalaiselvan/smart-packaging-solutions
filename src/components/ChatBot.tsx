import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { role: "bot" | "user"; text: string };

const QUICK = [
  "What sizes do you offer?",
  "Minimum order quantity?",
  "Can you do custom printing?",
  "Request a quote",
];

function botReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("size")) return "We custom-make corrugated and mono cartons in any size — 3-ply, 5-ply, and 7-ply. Share dimensions (L×W×H in cm) and we'll quote.";
  if (q.includes("moq") || q.includes("minimum")) return "MOQ starts at 500 units for printed cartons and 100 units for plain corrugated boxes.";
  if (q.includes("print") || q.includes("custom")) return "Yes — flexo, offset, and digital printing up to 6 colours. Send your artwork (PDF/AI) and we'll share a sample.";
  if (q.includes("quote") || q.includes("price")) return "Happy to help! Call +91 99644 62999 or visit our Contact page to send specs.";
  if (q.includes("delivery") || q.includes("ship")) return "Delivery across Karnataka in 3–5 days; pan-India in 7–10 days from order confirmation.";
  if (q.includes("hi") || q.includes("hello") || q.includes("hey")) return "Hello! 👋 I'm Smarty, your packaging assistant. How can I help today?";
  return "Thanks for reaching out! For specifics, call +91 99644 62999 or use the Contact form — our team responds within 1 business hour.";
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi, I'm Smarty 👋 Ask me about box sizes, MOQs, custom printing or get a quote." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "bot", text: botReply(text) }]), 450);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-accent-foreground shadow-glow"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && <span className="absolute -top-1 -right-1 flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" /><span className="relative inline-flex h-3 w-3 rounded-full bg-accent" /></span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", damping: 24, stiffness: 220 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-glow"
          >
            <div className="bg-gradient-navy px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 ring-2 ring-accent/40">
                  <Bot className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Smarty</div>
                  <div className="text-xs text-primary-foreground/70 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Online · replies instantly
                  </div>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-secondary/30">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm bg-card px-3.5 py-2 text-sm text-foreground border border-border"
                    }
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {msgs.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-accent/30 bg-card px-3 py-1.5 text-xs text-foreground/80 hover:bg-accent/10 hover:text-accent transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-2 border-t border-border bg-card p-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-gradient-brand text-accent-foreground hover:opacity-90 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

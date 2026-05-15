import { motion } from "motion/react";

const ITEMS = [
  "D2C Brands",
  "FMCG",
  "Bakery & Food",
  "Pharma",
  "E-commerce",
  "Apparel",
  "Electronics",
  "Cosmetics",
  "Cloud Kitchens",
  "Subscription Boxes",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card py-6">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, var(--card), transparent 12%, transparent 88%, var(--card))",
        }}
      />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-xl font-semibold text-primary/70 sm:text-2xl">
              {it}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

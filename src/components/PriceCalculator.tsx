import { PriceCalculator } from "@/components/PriceCalculator";
import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";

const PLY_RATES: Record<string, number> = {
  "3-Ply": 0.0012,
  "5-Ply": 0.0018,
  "7-Ply": 0.0026,
  "Mono Carton": 0.0009,
};

const PRINT_MULTIPLIER: Record<string, number> = {
  "None (Plain)": 1,
  "1 Colour": 1.25,
  "2 Colour": 1.45,
  "4 Colour Full Print": 1.75,
};

const QTY_DISCOUNT: [number, number][] = [
  [500, 1.0],
  [2000, 0.82],
  [5000, 0.68],
  [10000, 0.55],
];

function getDiscount(qty: number): number {
  let rate = 1.0;
  for (const [threshold, discount] of QTY_DISCOUNT) {
    if (qty >= threshold) rate = discount;
  }
  return rate;
}

export function PriceCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [ply, setPly] = useState("3-Ply");
  const [print, setPrint] = useState("None (Plain)");
  const [qty, setQty] = useState("");
  const [result, setResult] = useState<null | { unit: number; total: number; moq: boolean }>(null);

  function calculate() {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const q = parseInt(qty);

    if (!l || !w || !h || !q) return;

    if (q < 500) {
      setResult({ unit: 0, total: 0, moq: true });
      return;
    }

    const area = 2 * (l * w + w * h + l * h);
    const baseRate = PLY_RATES[ply];
    const printMult = PRINT_MULTIPLIER[print];
    const discount = getDiscount(q);

    const unitPrice = Math.round(area * baseRate * printMult * discount * 100) / 100;
    const total = Math.round(unitPrice * q);

    setResult({ unit: unitPrice, total, moq: false });
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-primary">Price Estimator</h3>
          <p className="text-sm text-muted-foreground">Get an instant ballpark figure</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <Label htmlFor="c-l">Length (cm)</Label>
          <Input id="c-l" type="number" min="1" placeholder="30" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-w">Width (cm)</Label>
          <Input id="c-w" type="number" min="1" placeholder="20" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-h">Height (cm)</Label>
          <Input id="c-h" type="number" min="1" placeholder="15" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <Label htmlFor="c-ply">Box Type</Label>
          <select id="c-ply" value={ply} onChange={(e) => setPly(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {Object.keys(PLY_RATES).map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-print">Print</Label>
          <select id="c-print" value={print} onChange={(e) => setPrint(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {Object.keys(PRINT_MULTIPLIER).map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-qty">Quantity (min 500)</Label>
          <Input id="c-qty" type="number" min="500" placeholder="1000" value={qty} onChange={(e) => setQty(e.target.value)} />
        </div>
      </div>

      <Button onClick={calculate} size="lg" className="mt-6 w-full bg-gradient-brand text-accent-foreground hover:opacity-90">
        Calculate Estimate
      </Button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-6"
        >
          {result.moq ? (
            <p className="text-center text-sm font-medium text-destructive">
              Minimum order quantity is 500 units. Please enter 500 or more.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">Per box (est.)</div>
                  <div className="mt-1 font-display text-3xl font-bold text-primary">₹{result.unit.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Total order (est.)</div>
                  <div className="mt-1 font-display text-3xl font-bold text-accent">₹{result.total.toLocaleString("en-IN")}</div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Estimate only. Excludes GST (18%) and delivery. Exact quote sent within 1 hour.
              </p>
              <Button asChild size="sm" className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">
                  Get Exact Quote <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

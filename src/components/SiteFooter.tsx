import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Smart Packaging Solutions" className="h-12 w-12 rounded-full ring-2 ring-accent/40" />
              <div>
                <div className="font-display font-bold">SMART</div>
                <div className="text-[10px] tracking-[0.18em] text-accent">PACKAGING SOLUTIONS</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Sustainable carton & corrugated packaging crafted in Bengaluru. Built for brands that ship with pride.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/products" className="hover:text-accent">Products</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent">Capabilities</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>Corrugated Boxes</li>
              <li>Mono Cartons</li>
              <li>E-commerce Packaging</li>
              <li>Custom Printing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /># 01, SY No.56, Soladevanahalli Village, Kumbarahalli Main Road, Achit Nagar Post, Bengaluru — 560107</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0" /> +91 99644 62999</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-accent shrink-0" /> smartpackagingsolutions26@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Smart Packaging Solutions. All rights reserved.</p>
          <p>GSTIN: 29AFXFS3689D1Z2</p>
        </div>
      </div>
    </footer>
  );
}

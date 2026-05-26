import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, UserCircle2 } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/LoginDialog";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Smart Packaging Solutions" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30 transition-transform group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-bold text-primary">SMART</div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-accent">PACKAGING SOLUTIONS</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition hover:text-primary hover:bg-muted"
              activeProps={{ className: "text-primary bg-muted" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLoginOpen(true)}
            aria-label="Sign in"
            className="rounded-full text-primary hover:bg-accent/10 hover:text-accent"
          >
            <UserCircle2 className="!h-7 !w-7" />
          </Button>
          <Button
            onClick={() => setLoginOpen(true)}
            className="hidden sm:inline-flex bg-gradient-brand text-accent-foreground shadow-soft hover:opacity-90"
          >
            Sign In
          </Button>
          <button
            className="md:hidden rounded-md p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </header>
  );
}

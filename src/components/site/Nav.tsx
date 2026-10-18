import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { EASE } from "./motion";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 48rem)");

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpointChange);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled && !open
          ? "bg-ivory/85 py-3 shadow-[0_1px_0_var(--border)] backdrop-blur-md"
          : "py-6",
      )}
    >
      <nav className="container-x flex items-center justify-between" aria-label="Main">
        <Link to="/" aria-label="ILANA home" className="relative z-10">
          <Logo light={open} />
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="link-underline text-sm font-medium text-ink"
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary hidden !py-3 md:inline-flex">
          Book a Consultation <ArrowUpRight className="h-4 w-4" />
        </Link>
        <button
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={cn(
              "h-px w-7 transition-all duration-500",
              open ? "translate-y-[3.5px] rotate-45 bg-ivory" : "bg-ink",
            )}
          />
          <span
            className={cn(
              "h-px w-7 transition-all duration-500",
              open ? "-translate-y-[3.5px] -rotate-45 bg-ivory" : "bg-ink",
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-between bg-forest-deep px-6 pb-10 pt-32 text-ivory md:hidden"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <ul className="space-y-2">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, ease: EASE, duration: 0.7 }}
                >
                  <Link to={l.to} className="flex items-baseline gap-4 py-2 font-serif text-5xl">
                    <span className="eyebrow text-gold">0{i + 1}</span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-4">
              <Link to="/contact" className="btn-gold w-full justify-center">
                Book a Consultation
              </Link>
              <a href={`tel:${CONTACT.phoneTel}`} className="block text-center text-sm opacity-80">
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

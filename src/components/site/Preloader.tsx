import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "./motion";

/** Shows on each page load: a seed sprouts into the ILANA mark, then the curtain lifts. */
export function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
    }, 4300);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-deep text-ivory"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: EASE }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 48 48" className="h-24 w-24" fill="none">
            <motion.circle cx="24" cy="44" r="2" className="fill-gold" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }} />
            <motion.path d="M24 44V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: EASE }} />
            <motion.path d="M24 26C24 16 16 10 6 10c0 10 8 16 18 16Z" fill="currentColor"
              style={{ transformOrigin: "24px 26px" }}
              initial={{ scale: 0, rotate: 30 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.8, ease: EASE }} />
            <motion.path d="M24 22C24 12 31 5 42 5c0 11-7 17-18 17Z" className="fill-gold"
              style={{ transformOrigin: "24px 22px" }}
              initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 1, ease: EASE }} />
          </svg>
          <div className="mt-6 overflow-hidden">
            <motion.p className="font-serif text-4xl tracking-[0.4em]"
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 1.2, ease: EASE }}>
              ILANA
            </motion.p>
          </div>
          <motion.p className="eyebrow mt-3 text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
            Nourish · Grow · Thrive
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

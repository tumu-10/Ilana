import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/** Hand-drawn style botanical branch that draws itself on view. */
export function BotanicalBranch({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, delay: 0.3 + i * 0.18, ease: "easeInOut" as const },
    }),
  };
  const leaves = [
    "M100 300 C 80 270, 60 260, 40 262 C 52 285, 75 300, 100 300",
    "M100 250 C 125 222, 148 214, 168 218 C 154 242, 128 254, 100 250",
    "M100 200 C 78 172, 58 160, 36 160 C 48 186, 72 200, 100 200",
    "M100 150 C 122 122, 144 112, 164 114 C 152 140, 128 154, 100 150",
    "M100 105 C 84 80, 72 64, 74 40 C 94 56, 104 80, 100 105",
  ];
  return (
    <motion.svg
      viewBox="0 0 200 380"
      fill="none"
      className={cn("text-forest", className)}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true }}
      aria-hidden="true"
    >
      <motion.path d="M100 380 C 100 300, 96 200, 100 105" stroke="currentColor" strokeWidth="1.2" variants={draw} custom={0} />
      {leaves.map((d, i) => (
        <motion.path key={i} d={d} stroke="currentColor" strokeWidth="1.2" variants={draw} custom={i + 1} />
      ))}
    </motion.svg>
  );
}

/** Rotating circular text badge. */
export function RotatingBadge({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("relative h-32 w-32", className)} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full">
        <defs>
          <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-current text-[9.5px] font-semibold uppercase tracking-[0.3em]">
          <textPath href="#circ">{text}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 48 48" className="absolute inset-0 m-auto h-10 w-10">
        <path d="M24 40V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 26C24 16 16 10 6 10c0 10 8 16 18 16Z" fill="currentColor" />
        <path d="M24 22C24 12 31 5 42 5c0 11-7 17-18 17Z" className="fill-gold" />
      </svg>
    </div>
  );
}

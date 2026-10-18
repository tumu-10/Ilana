import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1.1, delay: i * 0.07, ease: EASE } }),
};

/** Word-by-word masked reveal for headlines. Use `*word*` for italic gold accents. */
export function SplitHeadline({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  let idx = 0;
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : "hidden"}
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-10% 0px" } })}
      aria-label={text.replace(/\*/g, "")}
    >
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.split(" ").map((w, wi) => {
            const accent = w.startsWith("*");
            const word = w.replace(/\*/g, "");
            const i = idx++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className={"inline-block " + (accent ? "italic text-terracotta" : "")}
                  variants={wordVariants}
                  custom={i + delay * 10}
                >
                  {word}
                  {"\u00A0"}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </MotionTag>
  );
}

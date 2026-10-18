import sprout from "@/assets/ilana-sprout.png";
import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        light ? "text-ivory" : "text-forest",
        className,
      )}
    >
      <img
        src={sprout}
        alt=""
        aria-hidden="true"
        className="h-11 w-7 object-contain md:h-12 md:w-8"
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl tracking-[0.18em]">ILANA</span>
        <span className="mt-1 whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.2em] opacity-70">
          Nutrition & Wellness
        </span>
      </span>
    </span>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import ingredients from "@/assets/ingredients.jpg";
import { SplitHeadline, Reveal } from "./motion";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-ivory">
      <img src={ingredients} alt="" loading="lazy" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
      <div className="container-x relative py-32 text-center md:py-44">
        <p className="eyebrow text-gold">Begin here</p>
        <SplitHeadline text={"Your journey to better\nnourishment *starts* here."} className="h-section mx-auto mt-6 max-w-5xl" />
        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-ivory/80">
            Let's build a healthier relationship with food, one practical step at a time.
          </p>
          <Link to="/contact" className="btn-gold mt-10">
            Book a Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

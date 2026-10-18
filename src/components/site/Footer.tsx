import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { CONTACT, SERVICES, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain overflow-hidden bg-forest-deep text-ivory">
      <div className="container-x pt-24 pb-10">
        <p className="font-serif text-[clamp(3.5rem,13vw,13rem)] leading-[0.85] tracking-tight">
          Nourish. <span className="italic text-gold">Grow.</span>
          <br />
          Thrive.
        </p>
        <div className="mt-20 grid gap-12 border-t border-ivory/15 pt-12 md:grid-cols-4">
          <div className="space-y-4">
            <Logo light />
            <p className="max-w-xs text-sm leading-relaxed text-ivory/70">
              Personalised, practical nutrition for every stage of life.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5 text-gold">Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="link-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="link-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-gold">Services</p>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" hash={s.slug} className="link-underline text-ivory/85">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-gold">Get in touch</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a className="link-underline" href={`tel:${CONTACT.phoneTel}`}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="link-underline break-all" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-16 text-xs text-ivory/50">
          © {new Date().getFullYear()} ILANA Nutrition & Wellness. Guidance complements, and does
          not replace, medical care.
        </p>
      </div>
    </footer>
  );
}

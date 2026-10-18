import { motion } from "motion/react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with ILANA on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center gap-0 overflow-hidden rounded-full border border-ivory/40 bg-gradient-to-br from-forest to-forest-deep text-ivory shadow-[0_8px_28px_rgb(0_0_0_/_24%),0_0_0_6px_color-mix(in_oklch,var(--color-gold)_12%,transparent)] transition-[width,transform,box-shadow,border-radius] duration-200 ease-out hover:w-[142px] hover:-translate-y-[3px] hover:justify-start hover:gap-2.5 hover:rounded-[32px] hover:pl-4 hover:pr-4 hover:shadow-[0_12px_34px_rgb(0_0_0_/_28%),0_0_0_7px_color-mix(in_oklch,var(--color-gold)_18%,transparent)] focus-visible:w-[142px] focus-visible:-translate-y-[3px] focus-visible:justify-start focus-visible:gap-2.5 focus-visible:rounded-[32px] focus-visible:pl-4 focus-visible:pr-4 focus-visible:shadow-[0_12px_34px_rgb(0_0_0_/_28%),0_0_0_7px_color-mix(in_oklch,var(--color-gold)_18%,transparent)] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 motion-reduce:transition-none sm:bottom-8 sm:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 2.8,
        type: "spring",
        stiffness: 200,
        damping: 16,
      }}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-bold opacity-0 transition-[max-width,opacity] duration-200 group-hover:max-w-20 group-hover:opacity-100 group-focus-visible:max-w-20 group-focus-visible:opacity-100 motion-reduce:transition-none">
        Chat with us
      </span>
    </motion.a>
  );
}

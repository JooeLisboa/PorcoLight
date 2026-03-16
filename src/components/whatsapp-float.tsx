import { MessageCircle } from "lucide-react";
import { business } from "@/data/business";

export function WhatsAppFloat() {
  return (
    <a
      href={business.primaryWhatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-gradient-to-b from-ember-500 to-ember-600 text-primary-foreground shadow-glow transition hover:scale-105 hover:brightness-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { business, premiumLinks } from "@/data/business";
import { Clock3, Flame, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";

const chips = ["Brasa premium", "Almoço especial", "Pesqueiro", "Buffet Service", "Família"];

export default function CartaoPage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <section className="mx-auto max-w-md">
        <div className="rounded-[32px] border border-gold-500/25 bg-gradient-to-b from-[#2a1a14] via-[#241610] to-[#1c120d] p-5 shadow-glow">
          <div className="rounded-[24px] border border-ember-700/70 bg-[#1c120d]/70 p-5">
            <Badge className="mb-4">Cartão interativo premium</Badge>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-500/40 bg-[#2a1a14] shadow-warm">
                <Flame className="h-8 w-8 text-gold-400" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-[#f7e7d3]">{business.name}</h1>
                <p className="text-sm text-[#cfb499]">Restaurante • Churrascaria • Pesqueiro</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#e7ccb0]">
              Sabor de brasa, tradição regional e atendimento acolhedor para transformar seu almoço em experiência.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-ember-700/70 bg-[#241610] px-3 py-1 text-xs font-semibold text-gold-400"
                >
                  {chip}
                </span>
              ))}
            </div>

            <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer" className="mt-6 block">
              <Button size="xl" className="w-full">
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp agora
              </Button>
            </a>

            <div className="mt-4 space-y-3">
              {premiumLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block">
                  <Button variant="outline" size="xl" className="w-full justify-start px-5">
                    <Sparkles className="h-4 w-4 text-gold-400" /> {link.label}
                  </Button>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-ember-700/70 bg-[#241610] p-4 text-sm text-[#e7ccb0]">
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-gold-400" /> {business.hours}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400" /> {business.locationReference}
              </p>
              <p className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold-400" /> {business.rating} • {business.reviews}
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs tracking-[0.14em] text-[#b99579]">PORCO LIGHT • EXPERIÊNCIA GASTRONÔMICA REGIONAL</p>
        </div>
      </section>
    </main>
  );
}

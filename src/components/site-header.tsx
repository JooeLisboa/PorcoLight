import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Flame, MapPin, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Destaques", href: "#destaques" },
  { label: "Visite", href: "#localizacao" },
  { label: "Contato", href: "#contato" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ember-700/60 bg-[#120b08]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#topo" className="flex items-center gap-2 text-sm font-bold leading-tight text-foreground md:text-base">
          <Flame className="h-4 w-4 text-gold-400" />
          <span>
            Porco Light
            <span className="block text-xs font-medium text-muted-foreground">Brasa • Sabor • Família</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-gold-400">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.routeUrl} target="_blank" rel="noreferrer" className="hidden md:block">
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4" /> Rota
            </Button>
          </a>
          <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer">
            <Button size="sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

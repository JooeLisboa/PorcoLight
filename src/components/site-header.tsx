import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#topo" className="text-sm font-bold leading-tight text-foreground md:text-base">
          Porco Light
          <span className="block text-xs font-medium text-muted-foreground">Pesqueiro & Buffe’s</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.routeUrl} target="_blank" rel="noreferrer" className="hidden md:block">
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4" /> Como chegar
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

import { ContactItem, HighlightItem, ServiceItem } from "@/types/business";

export const business = {
  name: "Porco Light",
  altName: "Porco Light | Restaurante, Churrascaria, Pesqueiro e Buffet Service",
  instagram: "@pesqueiro_porcoligth",
  instagramUrl: "https://instagram.com/pesqueiro_porcoligth",
  address: "Rodovia Augustinho Pereira Oliveira, km 11,5 - Centro, Arealva - SP",
  locationReference: "Próximo ao portal de entrada de Arealva/SP",
  rating: "4,5 estrelas",
  reviews: "518 avaliações reais",
  socialProof: "Carne no ponto, porções caprichadas e clima de sítio premium.",
  hours: "Terça a Domingo • 08h às 17h",
  primaryWhatsapp: {
    label: "WhatsApp principal",
    display: "(16) 99792-0126",
    href: "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20reservar%20mesa%20no%20Porco%20Light."
  },
  routeUrl:
    "https://www.google.com/maps/search/?api=1&query=Rodovia+Augustinho+Pereira+Oliveira+km+11,5+Centro+Arealva+SP",
  menuUrl: "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20quero%20receber%20o%20card%C3%A1pio%20do%20Porco%20Light.",
  reserveUrl:
    "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20reserva%20para%20almo%C3%A7o%20no%20Porco%20Light.",
  bioRoute: "/cartao"
};

export const highlights: HighlightItem[] = [
  { title: "Brasa e Sabor", detail: "Carnes, porções e pratos com assinatura da casa." },
  { title: "Pesqueiro Completo", detail: "Lazer com estrutura para família e amigos." },
  { title: "Buffet Service", detail: "Atendimento para eventos e comemorações." },
  { title: "Autoridade Regional", detail: "Referência de Arealva para almoço especial." }
];

export const services: ServiceItem[] = [
  {
    title: "Almoço especial",
    description: "Buffet e pratos executivos para quem quer comer bem e aproveitar o dia.",
    icon: "UtensilsCrossed"
  },
  {
    title: "Porções de respeito",
    description: "Da chapa à mesa: porções quentes, fartas e perfeitas para compartilhar.",
    icon: "ChefHat"
  },
  {
    title: "Pesca e lazer",
    description: "Estrutura de pesqueiro para transformar o almoço em experiência completa.",
    icon: "Fish"
  },
  {
    title: "Ambiente familiar",
    description: "Espaço acolhedor, atendimento próximo e clima para ficar sem pressa.",
    icon: "Trees"
  },
  {
    title: "Delivery e retirada",
    description: "Praticidade para levar o sabor Porco Light para casa ou trabalho.",
    icon: "Bike"
  },
  {
    title: "Eventos e buffet",
    description: "Pacotes personalizados para aniversários, empresas e encontros especiais.",
    icon: "PartyPopper"
  }
];

export const contacts: ContactItem[] = [
  {
    label: "Reserva e informações",
    value: "(16) 99792-0126",
    phoneHref: "tel:+5516997920126",
    whatsappHref:
      "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20quero%20reservar%20mesa%20e%20saber%20mais%20sobre%20o%20Porco%20Light."
  },
  {
    label: "Buffet e eventos",
    value: "(16) 99961-3232",
    phoneHref: "tel:+5516999613232",
    whatsappHref:
      "https://wa.me/5516999613232?text=Ol%C3%A1%2C%20quero%20or%C3%A7amento%20de%20buffet%20service%20do%20Porco%20Light."
  }
];

export const premiumLinks = [
  { label: "Falar no WhatsApp", href: business.primaryWhatsapp.href },
  { label: "Pedir cardápio", href: business.menuUrl },
  { label: "Reservar almoço", href: business.reserveUrl },
  { label: "Como chegar", href: business.routeUrl },
  { label: "Instagram oficial", href: business.instagramUrl }
];

import {
  ContactItem,
  GalleryPreviewItem,
  HighlightItem,
  QuickInfoItem,
  ServiceItem
} from "@/types/business";

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

export const experienceChips = [
  "Almoço especial",
  "Pesqueiro",
  "Ambiente familiar",
  "Buffet service",
  "Lazer e descanso"
];

export const highlights: HighlightItem[] = [
  {
    title: "Experiência gastronômica",
    detail: "Brasa, buffet e porções com apresentação caprichada e sabor de casa boa."
  },
  {
    title: "Lazer além da mesa",
    detail: "Pesqueiro e clima de sítio para prolongar a visita com tranquilidade."
  },
  {
    title: "Perfeito para família",
    detail: "Espaço acolhedor para almoço de domingo, encontros e momentos sem pressa."
  },
  {
    title: "Chegada simples",
    detail: "Localização prática em Arealva com rota fácil para quem vem passar o dia."
  }
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

export const galleryPreview: GalleryPreviewItem[] = [
  {
    title: "Lago e paisagem",
    detail: "Espaço preparado para fotos reais do pesqueiro e do entorno.",
    accent: "from-[#9a6434]/90 via-[#593521]/80 to-[#211611]/95",
    span: "wide"
  },
  {
    title: "Salão e mesas",
    detail: "Clima acolhedor para almoço em família e encontros especiais.",
    accent: "from-[#6f3d25]/90 via-[#362118]/80 to-[#1f1511]/95"
  },
  {
    title: "Brasa e pratos",
    detail: "Preview para registrar cortes, buffet e porções da casa.",
    accent: "from-[#b56e2e]/85 via-[#6d341b]/85 to-[#251611]/95",
    span: "tall"
  }
];

export const usefulInfo: QuickInfoItem[] = [
  { label: "Funcionamento", value: business.hours },
  { label: "Localização", value: business.address },
  { label: "Referência", value: business.locationReference }
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
  { label: "Conheça o estabelecimento", href: `${business.bioRoute}#ambiente` },
  { label: "Como chegar", href: business.routeUrl },
  { label: "Instagram oficial", href: business.instagramUrl }
];

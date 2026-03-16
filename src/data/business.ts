import { ContactItem, HighlightItem, ServiceItem } from "@/types/business";

export const business = {
  name: "Porco Light | Pesqueiro & Buffe’s Service",
  altName: "Restaurante e Pesqueiro Porco Light",
  instagram: "@pesqueiro_porcoligth",
  instagramUrl: "https://instagram.com/pesqueiro_porcoligth",
  address:
    "Rodovia Augustinho Pereira Oliveira, km 11,5 - Centro, Arealva - SP, 17160-000",
  locationReference: "Próximo ao portal de entrada de Arealva/SP",
  rating: "4,5 estrelas",
  reviews: "518 avaliações",
  socialProof: "Que local absurdo de bom",
  hours: "Terça-feira das 8h às 17h",
  primaryWhatsapp: {
    label: "WhatsApp principal",
    display: "(16) 99792-0126",
    href: "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Porco%20Light."
  },
  routeUrl:
    "https://www.google.com/maps/search/?api=1&query=Rodovia+Augustinho+Pereira+Oliveira+km+11,5+Centro+Arealva+SP"
};

export const highlights: HighlightItem[] = [
  { title: "4,5 estrelas", detail: "518 avaliações" },
  { title: "Local estratégico", detail: "Perto da entrada de Arealva" },
  { title: "Atendimento completo", detail: "Refeição no local e para viagem" },
  { title: "Contato imediato", detail: "Resposta rápida pelo WhatsApp" }
];

export const services: ServiceItem[] = [
  {
    title: "Almoço no local",
    description: "Comida saborosa e ambiente acolhedor para aproveitar sem pressa.",
    icon: "UtensilsCrossed"
  },
  {
    title: "Porções caprichadas",
    description: "Perfeitas para compartilhar entre amigos e família.",
    icon: "ChefHat"
  },
  {
    title: "Pesca esportiva",
    description: "Lazer e experiência regional para quem ama natureza.",
    icon: "Fish"
  },
  {
    title: "Ambiente para família",
    description: "Estrutura com clima interiorano para reunir quem importa.",
    icon: "Trees"
  },
  {
    title: "Para viagem",
    description: "Praticidade para levar o sabor do Porco Light com você.",
    icon: "Bike"
  },
  {
    title: "Buffet e eventos",
    description: "Atendimento para momentos especiais com padrão profissional.",
    icon: "PartyPopper"
  }
];

export const contacts: ContactItem[] = [
  {
    label: "Contato 1",
    value: "(16) 99792-0126",
    phoneHref: "tel:+5516997920126",
    whatsappHref:
      "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20almo%C3%A7o%2C%20pesca%20ou%20buffet%20do%20Porco%20Light."
  },
  {
    label: "Contato 2",
    value: "(16) 99961-3232",
    phoneHref: "tel:+5516999613232",
    whatsappHref:
      "https://wa.me/5516999613232?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20almo%C3%A7o%2C%20pesca%20ou%20buffet%20do%20Porco%20Light."
  }
];

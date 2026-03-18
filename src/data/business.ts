import {
  ContactItem,
  ExperiencePillar,
  HighlightItem,
  PhotoAlbumItem,
  ServiceItem,
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
    href: "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20reservar%20mesa%20no%20Porco%20Light.",
  },
  routeUrl:
    "https://www.google.com/maps/search/?api=1&query=Rodovia+Augustinho+Pereira+Oliveira+km+11,5+Centro+Arealva+SP",
  bioRoute: "/cartao",
  galleryRoute: "/conheca-o-porco-light",
};

export const highlights: HighlightItem[] = [
  { title: "Brasa e Sabor", detail: "Carnes, porções e pratos com assinatura da casa." },
  { title: "Pesqueiro Completo", detail: "Lazer com estrutura para família e amigos." },
  { title: "Buffet Service", detail: "Atendimento para eventos e comemorações." },
  { title: "Autoridade Regional", detail: "Referência de Arealva para almoço especial." },
];

export const services: ServiceItem[] = [
  {
    title: "Almoço especial",
    description: "Buffet e pratos executivos para quem quer comer bem e aproveitar o dia.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Porções de respeito",
    description: "Da chapa à mesa: porções quentes, fartas e perfeitas para compartilhar.",
    icon: "ChefHat",
  },
  {
    title: "Pesca e lazer",
    description: "Estrutura de pesqueiro para transformar o almoço em experiência completa.",
    icon: "Fish",
  },
  {
    title: "Ambiente familiar",
    description: "Espaço acolhedor, atendimento próximo e clima para ficar sem pressa.",
    icon: "Trees",
  },
  {
    title: "Delivery e retirada",
    description: "Praticidade para levar o sabor Porco Light para casa ou trabalho.",
    icon: "Bike",
  },
  {
    title: "Eventos e buffet",
    description: "Pacotes personalizados para aniversários, empresas e encontros especiais.",
    icon: "PartyPopper",
  },
];

export const contacts: ContactItem[] = [
  {
    label: "Reserva e informações",
    value: "(16) 99792-0126",
    phoneHref: "tel:+5516997920126",
    whatsappHref:
      "https://wa.me/5516997920126?text=Ol%C3%A1%2C%20quero%20reservar%20mesa%20e%20saber%20mais%20sobre%20o%20Porco%20Light.",
  },
  {
    label: "Buffet e eventos",
    value: "(16) 99961-3232",
    phoneHref: "tel:+5516999613232",
    whatsappHref:
      "https://wa.me/5516999613232?text=Ol%C3%A1%2C%20quero%20or%C3%A7amento%20de%20buffet%20service%20do%20Porco%20Light.",
  },
];

export const premiumLinks = [
  { label: "Falar no WhatsApp", href: business.primaryWhatsapp.href, external: true },
  { label: "Conheça o Porco Light", href: business.galleryRoute, external: false },
  { label: "Como chegar", href: business.routeUrl, external: true },
  { label: "Instagram oficial", href: business.instagramUrl, external: true },
];

export const experiencePillars: ExperiencePillar[] = [
  { title: "Ambiente para família", detail: "Espaço gostoso para almoçar sem pressa e curtir junto." },
  { title: "Comida boa", detail: "Brasa, porções e pratos que convidam a repetir a visita." },
  { title: "Lazer e descanso", detail: "Pesqueiro, ar livre e clima de refúgio a poucos minutos da cidade." },
  { title: "Experiência acolhedora", detail: "Atendimento próximo e atmosfera que faz a visita render memória." },
];

export const photoAlbum: PhotoAlbumItem[] = [
  {
    title: "Chegada com clima de refúgio",
    description: "Entrada e área externa com sensação de passeio e tempo desacelerado.",
    src: "/conheca-porco-light/chegada.svg",
    alt: "Mock de foto da chegada do Porco Light para substituir pela imagem final do estabelecimento.",
    accent: "from-[#f3d4ab]/25 via-[#d97745]/15 to-transparent",
  },
  {
    title: "Salão acolhedor",
    description: "Mesas, madeira e luz quente para almoço em família ou encontro demorado.",
    src: "/conheca-porco-light/salao.svg",
    alt: "Mock de foto do salão do Porco Light para substituir pela imagem final do estabelecimento.",
    accent: "from-[#c97c3a]/25 via-[#6a3c24]/15 to-transparent",
  },
  {
    title: "Sabores da casa",
    description: "Pratos e porções que combinam fartura, apresentação e desejo de provar.",
    src: "/conheca-porco-light/sabores.svg",
    alt: "Mock de foto dos pratos do Porco Light para substituir pela imagem final do estabelecimento.",
    accent: "from-[#f59e0b]/20 via-[#b45309]/15 to-transparent",
  },
  {
    title: "Pesqueiro e paisagem",
    description: "Água, verde e tranquilidade para transformar a visita em experiência completa.",
    src: "/conheca-porco-light/pesqueiro.svg",
    alt: "Mock de foto do pesqueiro do Porco Light para substituir pela imagem final do estabelecimento.",
    accent: "from-[#6ee7b7]/20 via-[#0f766e]/15 to-transparent",
  },
  {
    title: "Cantinhos para ficar mais",
    description: "Detalhes visuais pensados para quem quer descansar, conversar e aproveitar.",
    src: "/conheca-porco-light/lazer.svg",
    alt: "Mock de foto de uma área de lazer do Porco Light para substituir pela imagem final do estabelecimento.",
    accent: "from-[#f5c87b]/20 via-[#a16207]/15 to-transparent",
  },
];

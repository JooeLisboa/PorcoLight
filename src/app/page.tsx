import {
  Bike,
  ChefHat,
  Fish,
  Flame,
  Instagram,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  Sparkles,
  Trees,
  UtensilsCrossed
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { business, contacts, highlights, services } from "@/data/business";

const iconMap = { UtensilsCrossed, ChefHat, Fish, Trees, Bike, PartyPopper };

const menuHighlights = [
  { title: "Parrilla da casa", description: "Cortes suculentos na brasa com finalização autoral." },
  { title: "Porções de boteco premium", description: "Entradas quentes para compartilhar sem economia." },
  { title: "Buffet especial de almoço", description: "Sabores regionais com apresentação de restaurante de referência." }
];

export default function Home() {
  return (
    <main id="topo">
      <SiteHeader />

      <section className="bg-hero-fire px-4 pb-14 pt-10 md:px-6 md:pb-20 md:pt-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <AnimatedSection>
            <Badge className="mb-5">Restaurante • Churrascaria • Pesqueiro • Buffet Service</Badge>
            <h1 className="text-4xl font-black leading-tight text-[#f7e7d3] md:text-6xl">
              O ponto de encontro de Arealva para viver fogo, madeira e sabor de verdade.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#e7ccb0] md:text-xl">
              Almoço especial, porções caprichadas, pesqueiro e ambiente familiar em uma experiência gastronômica memorável.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer">
                <Button size="xl" className="w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Quero reservar no WhatsApp
                </Button>
              </a>
              <a href={business.bioRoute}>
                <Button size="xl" variant="outline" className="w-full sm:w-auto">
                  <Sparkles className="h-5 w-5" /> Cartão interativo premium
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-[#cda98c]">{business.socialProof}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="border-gold-500/30 bg-gradient-to-br from-[#2a1a14] to-[#1c120d]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Experiência Porco Light</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Churrasco na brasa", "Almoço premium", "Pesqueiro", "Porções", "Espaço família", "Eventos"].map((item) => (
                  <div key={item} className="rounded-2xl border border-ember-700/70 bg-[#241610] px-4 py-3 text-sm font-medium text-[#f7e7d3]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 text-sm text-[#e7ccb0]">
                <p>{business.hours}</p>
                <p>{business.locationReference}</p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.05}>
              <Card className="h-full border-ember-700/80">
                <p className="text-lg font-bold text-[#f7e7d3]">{item.title}</p>
                <p className="mt-2 text-sm text-[#cfb499]">{item.detail}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section id="experiencia" className="px-4 py-12 md:px-6">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl rounded-[30px] border border-gold-500/20 bg-gradient-to-r from-[#2a1a14] via-[#241610] to-[#1c120d] p-7 shadow-elegant md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-400">Venha viver essa experiência</p>
            <h2 className="mt-3 text-3xl font-black text-[#f7e7d3] md:text-5xl">Tradição regional com assinatura de brasa e acolhimento.</h2>
            <p className="mt-4 max-w-3xl text-base text-[#e7ccb0] md:text-lg">
              Do almoço executivo às porções para compartilhar, tudo foi pensado para entregar sabor, conforto e memória afetiva.
              O Porco Light une gastronomia quente, lazer no pesqueiro e atendimento próximo para transformar cada visita em momento especial.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section id="destaques" className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#f7e7d3] md:text-4xl">Destaques do sabor</h2>
          </AnimatedSection>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {menuHighlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <Card className="h-full border-gold-500/20">
                  <Flame className="h-7 w-7 text-gold-400" />
                  <h3 className="mt-4 text-xl font-bold text-[#f7e7d3]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#cfb499]">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#f7e7d3] md:text-4xl">Serviços e experiências</h2>
          </AnimatedSection>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <AnimatedSection key={service.title} delay={index * 0.05}>
                  <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <Icon className="h-8 w-8 text-gold-400" />
                    <h3 className="mt-4 text-xl font-bold text-[#f7e7d3]">{service.title}</h3>
                    <p className="mt-2 text-sm text-[#cfb499]">{service.description}</p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section id="localizacao" className="px-4 py-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
          <AnimatedSection>
            <Card className="h-full">
              <MapPin className="h-7 w-7 text-gold-400" />
              <h3 className="mt-4 text-xl font-bold text-[#f7e7d3]">Localização estratégica</h3>
              <p className="mt-2 text-sm text-[#cfb499]">{business.address}</p>
              <a href={business.routeUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block">
                <Button variant="outline">Traçar rota agora</Button>
              </a>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <Card className="h-full">
              <Phone className="h-7 w-7 text-gold-400" />
              <h3 className="mt-4 text-xl font-bold text-[#f7e7d3]">Contato rápido</h3>
              {contacts.map((contact) => (
                <div key={contact.value} className="mt-3 rounded-2xl border border-ember-700/60 bg-[#241610] p-4">
                  <p className="text-xs uppercase tracking-wider text-gold-400">{contact.label}</p>
                  <p className="mt-1 font-semibold text-[#f7e7d3]">{contact.value}</p>
                  <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="mt-3 inline-block">
                    <Button size="sm">Chamar no WhatsApp</Button>
                  </a>
                </div>
              ))}
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <Card className="h-full">
              <Instagram className="h-7 w-7 text-gold-400" />
              <h3 className="mt-4 text-xl font-bold text-[#f7e7d3]">Acompanhe o dia a dia</h3>
              <p className="mt-2 text-sm text-[#cfb499]">Conteúdo real de pratos, rotina do pesqueiro e bastidores do restaurante.</p>
              <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block">
                <Button variant="outline">{business.instagram}</Button>
              </a>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section id="contato" className="px-4 pb-20 pt-12 md:px-6">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl rounded-[32px] border border-gold-500/20 bg-gradient-to-r from-[#2a1a14] via-[#241610] to-[#1c120d] px-7 py-12 text-center shadow-glow md:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-400">Reserve agora</p>
            <h2 className="mt-3 text-3xl font-black text-[#f7e7d3] md:text-5xl">Seu próximo almoço especial começa com uma mensagem.</h2>
            <p className="mt-4 text-base text-[#cfb499] md:text-lg">
              Atendimento ágil para reservas, porções, pesqueiro e buffet service. Clique e fale direto com nossa equipe.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer">
                <Button size="xl" className="w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
                </Button>
              </a>
              <a href={business.routeUrl} target="_blank" rel="noreferrer">
                <Button size="xl" variant="outline" className="w-full sm:w-auto">
                  <MapPin className="h-5 w-5" /> Ver localização
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

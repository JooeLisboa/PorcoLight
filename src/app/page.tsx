import {
  Bike,
  ChefHat,
  Fish,
  Instagram,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  Star,
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

export default function Home() {
  return (
    <main id="topo">
      <SiteHeader />

      <section className="bg-hero-glow px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <AnimatedSection>
            <Badge className="mb-5">Restaurante • Pesqueiro • Buffet</Badge>
            <h1 className="text-4xl font-black leading-tight text-foreground md:text-6xl">
              {business.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Almoço, porções e pesca esportiva em um só lugar, perto da entrada de Arealva.
            </p>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              Experiência regional com clima familiar, estrutura para receber bem e atendimento que facilita seu próximo almoço,
              passeio ou evento.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer">
                <Button size="lg">
                  <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
                </Button>
              </a>
              <a href={business.routeUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline">
                  <MapPin className="h-5 w-5" /> Ver rota
                </Button>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="border-[#c0ab7c] bg-[#f8f4eb]">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#765e2f]">Experiência Porco Light</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  "Restaurante",
                  "Pesqueiro",
                  "Porções",
                  "Pesca esportiva",
                  "Ambiente familiar",
                  "Buffet"
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm font-medium text-foreground">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{business.hours} (estrutura pronta para atualização dos horários).</p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <Card className="h-full p-5">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section id="sobre" className="px-4 py-14 md:px-6">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-[#13271d] p-8 text-[#f2e7ce] shadow-elegant md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d9c497]">Sobre o Porco Light</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Mais que restaurante: uma experiência local que reúne sabor e lazer.</h2>
            <p className="mt-4 max-w-3xl text-base text-[#eadfc7] md:text-lg">
              O Porco Light é o ponto de encontro de quem busca comida boa, clima acolhedor e momentos especiais em família. Entre almoço,
              porções, pesca esportiva e atendimento para buffet, o espaço oferece uma presença forte na região de Arealva e confiança de quem
              já conhece o local.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section id="experiencias" className="px-4 py-8 md:px-6 md:py-14">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-black md:text-4xl">Experiências e serviços</h2>
          </AnimatedSection>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <AnimatedSection key={service.title} delay={index * 0.05}>
                  <Card className="h-full transition hover:-translate-y-1 hover:shadow-elegant">
                    <Icon className="h-8 w-8 text-[#7b6332]" />
                    <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <AnimatedSection>
            <Card className="h-full bg-[#f0e4c8]">
              <Star className="h-7 w-7 text-[#7d6127]" />
              <p className="mt-4 text-3xl font-black">4,5</p>
              <p className="text-sm text-muted-foreground">Com base em 518 avaliações</p>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <Card className="h-full md:col-span-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Prova social</p>
              <p className="mt-4 text-2xl font-bold md:text-3xl">“{business.socialProof}”</p>
              <p className="mt-3 text-sm text-muted-foreground">Espaço preparado para incluir depoimentos reais e reforçar ainda mais a credibilidade.</p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section id="localizacao" className="px-4 py-10 md:px-6">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl rounded-[28px] border border-border bg-card p-7 md:p-10">
            <h2 className="text-3xl font-black md:text-4xl">Visite o Porco Light</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{business.address}</p>
            <p className="mt-2 text-sm font-semibold text-[#6e5528]">{business.locationReference}</p>
            <a href={business.routeUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block">
              <Button size="lg">
                <MapPin className="h-5 w-5" /> Como chegar
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section id="contato" className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-black md:text-4xl">Contato rápido</h2>
          </AnimatedSection>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <AnimatedSection key={contact.value} delay={index * 0.07}>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{contact.label}</p>
                  <p className="mt-1 text-2xl font-black">{contact.value}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                      <Button>
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </Button>
                    </a>
                    <a href={contact.phoneHref}>
                      <Button variant="outline">
                        <Phone className="h-4 w-4" /> Ligar
                      </Button>
                    </a>
                    <a href={business.routeUrl} target="_blank" rel="noreferrer">
                      <Button variant="secondary">
                        <MapPin className="h-4 w-4" /> Abrir rota
                      </Button>
                    </a>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl rounded-[28px] border border-border bg-[#e7dcc1] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6f5729]">Instagram e presença social</p>
            <h2 className="mt-2 text-3xl font-black">Acompanhe o dia a dia do Porco Light</h2>
            <p className="mt-3 text-muted-foreground">
              Veja novidades, pratos, rotina do pesqueiro e movimentação do local pelo Instagram oficial.
            </p>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block">
              <Button variant="outline" size="lg">
                <Instagram className="h-5 w-5" /> {business.instagram}
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-4 pb-20 pt-12 md:px-6">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl rounded-[32px] bg-[#15281e] px-8 py-12 text-center text-[#efe4cd] shadow-elegant md:px-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d8c08f]">Pronto para decidir?</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Planeje seu almoço, passeio em família ou pesca esportiva hoje.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#e5d9be] md:text-base">
              Fale agora com o Porco Light e garanta uma experiência regional completa com atendimento rápido e confiável.
            </p>
            <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer" className="mt-7 inline-block">
              <Button size="lg">
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-4 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-dashed border-border bg-card/50 p-6 text-sm text-muted-foreground">
          Área preparada para futura galeria de fotos e vídeos do restaurante, pesqueiro e eventos.
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

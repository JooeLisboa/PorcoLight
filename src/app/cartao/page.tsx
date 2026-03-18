import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  business,
  contacts,
  experienceChips,
  galleryPreview,
  highlights,
  usefulInfo
} from "@/data/business";
import {
  ArrowUpRight,
  Clock3,
  Fish,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Trees
} from "lucide-react";

const quickActions = [
  {
    label: "Como chegar",
    href: business.routeUrl,
    icon: MapPin,
    external: true
  },
  {
    label: "Instagram",
    href: business.instagramUrl,
    icon: Instagram,
    external: true
  }
];

const heroStats = [
  { label: business.rating, value: business.reviews },
  { label: "Clima do lugar", value: "gastronomia + lazer" }
];

export default function CartaoPage() {
  return (
    <main className="min-h-screen px-3 py-4 sm:px-4 sm:py-6">
      <section className="mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-[34px] border border-gold-500/20 bg-[#140d0a]/95 p-[1px] shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,184,92,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(182,70,30,0.18),transparent_32%)]" />
          <div className="relative overflow-hidden rounded-[33px] border border-white/5 bg-[linear-gradient(180deg,rgba(42,26,20,0.96)_0%,rgba(24,15,12,0.98)_100%)] p-4 sm:p-5">
            <div className="absolute inset-x-8 top-0 h-32 rounded-full bg-gold-500/10 blur-3xl" />

            <AnimatedSection>
              <div className="relative overflow-hidden rounded-[28px] border border-gold-500/20 bg-[linear-gradient(160deg,rgba(58,34,25,0.96),rgba(25,16,12,0.98))] p-5 shadow-elegant">
                <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-gold-500/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-ember-500/10 blur-2xl" />

                <Badge className="mb-4 border-gold-500/30 bg-[#221611]/90 text-[#f4ddc3]">
                  Cartão interativo premium
                </Badge>

                <div className="flex items-start justify-between gap-3">
                  <div className="relative h-16 w-28 overflow-hidden rounded-2xl border border-gold-500/20 bg-[#231611]/80 shadow-warm">
                    <Image
                      src="/logo-porco-light.png"
                      alt="Logo Porco Light"
                      fill
                      className="object-contain p-2.5"
                      priority
                    />
                  </div>

                  <div className="rounded-full border border-gold-500/20 bg-[#211611]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                    Arealva • SP
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a381]">
                      Restaurante • Churrascaria • Pesqueiro
                    </p>
                    <h1 className="mt-2 text-[2rem] font-black leading-[0.95] text-[#fff1df]">
                      {business.name}
                    </h1>
                  </div>

                  <p className="max-w-md text-sm leading-relaxed text-[#ecd4ba] sm:text-[15px]">
                    Almoço de valor, clima de pesqueiro e acolhimento familiar em uma experiência que convida a ficar mais um pouco.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/8 bg-white/5 px-3 py-3 backdrop-blur-sm"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-[#b99477]">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-[#fff1df]">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer" className="block">
                    <Button size="xl" className="w-full">
                      <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
                    </Button>
                  </a>

                  <a href="#ambiente" className="block">
                    <Button variant="outline" size="xl" className="w-full border-gold-500/35 bg-white/5">
                      <Sparkles className="h-5 w-5 text-gold-400" /> Conheça o estabelecimento
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <div className="mt-4 flex flex-wrap gap-2">
                {experienceChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-gold-500/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#eed7bc]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="mt-4 overflow-hidden border-gold-500/15 bg-[linear-gradient(160deg,rgba(34,22,17,0.92),rgba(24,16,13,0.88))] p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl border border-gold-500/20 bg-gold-500/10 p-2.5">
                    <Star className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c09b7b]">
                      Por que visitar
                    </p>
                    <h2 className="mt-1 text-xl font-black text-[#fff1df]">
                      Um cartão compacto com desejo real de visita.
                    </h2>
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  {highlights.map((item, index) => {
                    const icons = [Sparkles, Fish, Trees, MapPin];
                    const Icon = icons[index] ?? Sparkles;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-white/8 bg-white/[0.035] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-xl border border-gold-500/20 bg-[#201510] p-2">
                            <Icon className="h-4 w-4 text-gold-400" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#fff1df]">{item.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-[#d9bca0]">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <section id="ambiente" className="mt-4">
                <Card className="border-gold-500/15 bg-[linear-gradient(160deg,rgba(30,20,15,0.96),rgba(20,14,11,0.94))] p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c09b7b]">
                        Conheça o estabelecimento
                      </p>
                      <h2 className="mt-1 text-xl font-black text-[#fff1df]">
                        Espaço pensado para abrir o apetite e convidar para a visita.
                      </h2>
                    </div>
                    <div className="rounded-full border border-gold-500/20 bg-white/5 px-3 py-1 text-[11px] text-gold-400">
                      galeria premium
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#d9bca0]">
                    Estrutura preparada para receber fotos reais do ambiente, pratos e paisagem — já com uma composição que valoriza a experiência presencial.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {galleryPreview.map((item) => (
                      <div
                        key={item.title}
                        className={[
                          "group relative overflow-hidden rounded-[24px] border border-white/8 p-4 shadow-elegant",
                          "bg-gradient-to-br",
                          item.accent,
                          item.span === "wide" ? "col-span-2 min-h-32" : "min-h-40",
                          item.span === "tall" ? "row-span-2 min-h-[19rem]" : ""
                        ].join(" ")}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(14,10,8,0.82))]" />
                        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fff1df] backdrop-blur-sm">
                          preview
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-base font-bold text-[#fff4e7]">{item.title}</p>
                          <p className="mt-1 max-w-[18rem] text-xs leading-relaxed text-[#f0d7bc]">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className="block"
                    >
                      <Card className="h-full border-white/8 bg-white/[0.03] p-4 transition-transform duration-300 hover:-translate-y-0.5">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl border border-gold-500/20 bg-gold-500/10 p-2.5">
                              <Icon className="h-5 w-5 text-gold-400" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-[#fff1df]">{action.label}</p>
                              <p className="text-xs text-[#c8a688]">
                                {action.label === "Como chegar"
                                  ? "Abra a rota em um toque"
                                  : "Veja bastidores e pratos"}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-gold-400" />
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <Card className="mt-4 border-gold-500/15 bg-[linear-gradient(160deg,rgba(32,21,16,0.94),rgba(18,13,10,0.94))] p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-gold-500/20 bg-gold-500/10 p-2.5">
                    <Clock3 className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c09b7b]">
                      Informações úteis
                    </p>
                    <h2 className="text-xl font-black text-[#fff1df]">Tudo o que importa para decidir rápido.</h2>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {usefulInfo.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[20px] border border-white/8 bg-white/[0.035] px-4 py-3.5"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#f1dbc4]">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {contacts.map((contact) => (
                    <div
                      key={contact.value}
                      className="rounded-[22px] border border-gold-500/15 bg-[#1d1410]/90 p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c09b7b]">
                        {contact.label}
                      </p>
                      <p className="mt-2 text-lg font-bold text-[#fff1df]">{contact.value}</p>
                      <div className="mt-3 flex gap-2">
                        <a href={contact.phoneHref} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full px-3">
                            <Phone className="h-4 w-4" /> Ligar
                          </Button>
                        </a>
                        <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="flex-1">
                          <Button size="sm" className="w-full px-3">
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.26}>
              <section className="mt-4 rounded-[28px] border border-gold-500/20 bg-[linear-gradient(160deg,rgba(45,27,20,0.95),rgba(24,16,12,0.96))] p-5 text-center shadow-elegant">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
                  Visite, prove, aproveite
                </p>
                <h2 className="mt-2 text-2xl font-black text-[#fff1df]">
                  O próximo almoço especial pode começar agora.
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#dfc2a5]">
                  Fale com a equipe, veja o caminho e venha sentir o ambiente de perto — com comida boa, clima acolhedor e lazer em um só lugar.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer" className="block">
                    <Button size="xl" className="w-full">
                      <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
                    </Button>
                  </a>
                  <a href={business.routeUrl} target="_blank" rel="noreferrer" className="block">
                    <Button variant="outline" size="xl" className="w-full border-gold-500/35 bg-white/5">
                      <MapPin className="h-5 w-5 text-gold-400" /> Ver localização
                    </Button>
                  </a>
                </div>
              </section>
            </AnimatedSection>

            <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#b99579]">
              {business.name} • gastronomia, pesqueiro e lazer familiar
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

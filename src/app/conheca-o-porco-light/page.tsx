import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { business, experiencePillars, photoAlbum } from "@/data/business";
import { ArrowLeft, Images, MapPin, MessageCircle } from "lucide-react";

const [featuredPhoto, ...albumPhotos] = photoAlbum;

export default function ConhecaOPorcoLightPage() {
  return (
    <main className="min-h-screen px-4 py-6 pb-16">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-6 flex items-center justify-between gap-3">
            <Link href={business.bioRoute}>
              <Button variant="outline" size="sm" className="px-4">
                <ArrowLeft className="h-4 w-4" /> Voltar ao cartão
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <section className="rounded-[32px] border border-gold-500/20 bg-gradient-to-b from-[#2a1a14] via-[#241610] to-[#1c120d] p-4 shadow-glow sm:p-5 md:p-7">
          <AnimatedSection>
            <div className="mx-auto max-w-md text-center sm:text-left">
              <Badge className="mx-auto sm:mx-0">Conheça o Porco Light</Badge>
              <h1 className="mt-4 text-3xl font-black leading-tight text-[#f7e7d3] sm:text-4xl">
                Um álbum curto para sentir o clima antes da visita.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[#d9bda1] sm:text-base">
                Ambiente agradável, comida boa, pesqueiro e aquele acolhimento
                que transforma almoço em passeio.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {experiencePillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/8 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-[#f7e7d3]">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#cfae92]">{item.detail}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <section className="mt-6 space-y-4">
            <AnimatedSection delay={0.1}>
              <article className="overflow-hidden rounded-[28px] border border-gold-500/20 bg-[#120b08] shadow-elegant">
                <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                  <Image
                    src={featuredPhoto.src}
                    alt={featuredPhoto.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${featuredPhoto.accent}`} />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-[24px] border border-white/10 bg-[#120b08]/68 p-4 backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
                        Destaque do álbum
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-[#f7e7d3]">
                        {featuredPhoto.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#d9bda1]">
                        {featuredPhoto.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
                {albumPhotos.map((photo, index) => (
                  <article
                    key={photo.title}
                    className="group min-w-[78%] snap-center overflow-hidden rounded-[24px] border border-white/8 bg-[#18100c] shadow-elegant sm:min-w-0"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${photo.accent}`} />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="rounded-[20px] border border-white/10 bg-[#120b08]/70 p-3 backdrop-blur-md">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                            Cena {index + 2}
                          </p>
                          <h3 className="mt-1 text-base font-bold text-[#f7e7d3]">
                            {photo.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-[#d5b495]">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </AnimatedSection>
          </section>

          <AnimatedSection delay={0.2}>
            <section className="mt-6 rounded-[28px] border border-gold-500/15 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-gold-400">
                <Images className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Álbum visual mockado
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#cfb499]">
                As imagens desta rota estão centralizadas em <code>src/data/business.ts</code> e usam arquivos mock em <code>public/conheca-porco-light</code>,
                facilitando a troca futura pelas fotos finais do estabelecimento.
              </p>
            </section>
          </AnimatedSection>
        </section>

        <AnimatedSection delay={0.24}>
          <section className="mt-6 rounded-[30px] border border-gold-500/20 bg-gradient-to-r from-[#2a1a14] via-[#241610] to-[#1c120d] p-5 shadow-elegant sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-400">
              Faça a visita acontecer
            </p>
            <h2 className="mt-3 text-2xl font-black text-[#f7e7d3] sm:text-3xl">
              Quer sentir isso ao vivo?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#cfb499] sm:text-base">
              Fale com a equipe ou veja a rota. O restante fica por conta do clima do lugar.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={business.primaryWhatsapp.href} target="_blank" rel="noreferrer">
                <Button size="xl" className="w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
                </Button>
              </a>
              <a href={business.routeUrl} target="_blank" rel="noreferrer">
                <Button size="xl" variant="outline" className="w-full sm:w-auto">
                  <MapPin className="h-5 w-5" /> Como chegar
                </Button>
              </a>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}

import { business } from "@/data/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-ember-700/60 bg-[#130c09] py-10 text-[#eed8bf]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:px-6">
        <p className="text-lg font-semibold">{business.altName}</p>
        <p className="max-w-xl text-sm text-[#cfb499]">
          Experiência gastronômica regional com assinatura de brasa, atendimento acolhedor e estrutura para almoço, pesqueiro e eventos.
        </p>
        <div className="text-sm text-[#cfb499]">
          <p>{business.address}</p>
          <p>{business.locationReference}</p>
          <p>{business.hours}</p>
        </div>
      </div>
    </footer>
  );
}

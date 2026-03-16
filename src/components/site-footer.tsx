import { business } from "@/data/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[#12231a] py-10 text-[#e8dfc8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:px-6">
        <p className="text-lg font-semibold">{business.altName}</p>
        <p className="max-w-xl text-sm text-[#d6cab0]">
          Site institucional criado para apresentação comercial, com foco em conversão local e contato rápido.
        </p>
        <div className="text-sm text-[#d6cab0]">
          <p>{business.address}</p>
          <p>{business.locationReference}</p>
        </div>
      </div>
    </footer>
  );
}

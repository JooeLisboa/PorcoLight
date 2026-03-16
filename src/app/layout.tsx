import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porco Light | Restaurante, Churrascaria, Pesqueiro e Buffet",
  description:
    "Experiência gastronômica premium em Arealva/SP com almoço especial, porções, pesqueiro e buffet service. Reserve direto no WhatsApp.",
  keywords: [
    "restaurante em Arealva",
    "churrascaria Arealva",
    "pesqueiro Arealva",
    "almoço especial",
    "buffet service"
  ],
  openGraph: {
    title: "Porco Light | Fogo, madeira e sabor",
    description: "Brasa premium, tradição regional e ambiente familiar de alto valor percebido.",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

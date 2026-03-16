import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porco Light | Pesqueiro & Buffe’s Service",
  description:
    "Almoço, porções e pesca esportiva em Arealva/SP. Site institucional com foco em contato rápido pelo WhatsApp, localização e confiança.",
  keywords: [
    "restaurante em Arealva",
    "pesqueiro Arealva",
    "almoço em Arealva",
    "pesca esportiva SP",
    "buffet Arealva"
  ],
  openGraph: {
    title: "Porco Light | Pesqueiro & Buffe’s Service",
    description: "Ambiente familiar, boa comida, pesca esportiva e atendimento regional.",
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

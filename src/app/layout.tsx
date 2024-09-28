import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google"
import ProvedorTema from "@/components/provedorTema";

const fonte = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pesquisas Eleitorais - 2024",
  description: "Veja os resultados mais recentes sobre as pesquisas de intenção de voto para as eleições de 2024. Feito por Luis Miguel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`bg-background ${fonte.className}`}>
        <ProvedorTema
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ProvedorTema>
      </body>
    </html>
  );
}

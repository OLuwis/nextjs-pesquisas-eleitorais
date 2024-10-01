import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google"
import TemaProvider from "@/components/temaProvider";

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
        <TemaProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </TemaProvider>
      </body>
    </html>
  );
}
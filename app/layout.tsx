import type { Metadata } from "next";
import { Inter, PT_Sans_Caption } from "next/font/google";
import "./globals.css";
import { Layout } from "@/features/layout/layout";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});
const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Blog Site.Set",
  description: "Blog do Site.Set, a plataforma de criação de lojas online para afiliados. Dicas, tutoriais e histórias de sucesso para empreendedores digitais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${ptSansCaption.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;

// URL absoluta para og:image (WhatsApp requiere URL completa). logo-share.png 1200x630 para vista previa grande.
const ogImageUrl = `${siteUrl.replace(/\/$/, "")}/logo-share.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "J.J LOGISTICS C.A | Asesoría USA y Venezuela",
  description:
    "Logística Administrativa en USA y operaciones en Venezuela. J.J LOGISTICS C.A. y JJ Asociados LLC. Agenciamiento aduanal, transporte terrestre y marítimo, más de 50 años de experiencia.",
  keywords: [
    "J.J LOGISTICS C.A",
    "asesoría técnica y logística",
    "más de 50 años de experiencia",
    "personal cualificado y certificado",
    "Logística USA-Venezuela",
    "Agenciamiento Aduanal",
    "JJ Asociados",
    "Doral",
    "Miami",
    "Puerto Cabello",
    "La Guaira",
    "Maiquetía",
    "Guanta",
    "logística internacional",
    "importación",
  ],
  openGraph: {
    title: "J.J LOGISTICS C.A | Asesoría USA y Venezuela",
    description:
      "Logística Administrativa en USA y operaciones en Venezuela. Más de 50 años de experiencia.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "J.J LOGISTICS C.A",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen bg-[#0a0a0a] font-sans antialiased text-[#FAFAFA]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-black focus:outline-none focus:ring-2 focus:ring-gold-light"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

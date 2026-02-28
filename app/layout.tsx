import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JJ LOGISTIC & JJ ASOCIADOS | Asesoría Técnica y Logística USA-Venezuela",
  description:
    "Asesoría técnica y logística para que su mercancía llegue al país. Más de 50 años de experiencia y personal cualificado y certificado. Agenciamiento aduanal, Doral Miami y puertos de Venezuela.",
  keywords: [
    "asesoría técnica y logística",
    "más de 50 años de experiencia",
    "personal cualificado y certificado",
    "Logística USA-Venezuela",
    "Agenciamiento Aduanal",
    "JJ Logistic",
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
    title: "JJ LOGISTIC & JJ ASOCIADOS | Asesoría Técnica y Logística, +50 Años",
    description:
      "Asesoría técnica y logística para que su mercancía llegue al país. Más de 50 años de experiencia y personal cualificado y certificado. Dos hubs: Miami (Doral) y Venezuela.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen bg-black font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

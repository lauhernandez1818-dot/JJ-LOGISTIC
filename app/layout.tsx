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
  title: "JJ LOGISTIC PLUS | Logística Plus - Asesoría USA y Venezuela",
  description:
    "Logística Administrativa en USA y operaciones en Venezuela. JJ Logistic Plus, C.A. y JJ Asociados LLC. Agenciamiento aduanal, transporte terrestre y marítimo, más de 50 años de experiencia.",
  keywords: [
    "JJ LOGISTIC PLUS",
    "Logística Plus",
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
    title: "JJ LOGISTIC PLUS | Logística Plus - Asesoría USA y Venezuela",
    description:
      "Logística Administrativa en USA y operaciones en Venezuela. Más de 50 años de experiencia. Dos hubs: Miami (Doral) y Venezuela.",
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

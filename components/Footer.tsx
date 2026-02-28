import Link from "next/link";
import { SITE_NAME, TAGLINE, USA_ADDRESS, NAV_LINKS } from "@/lib/constants";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USA_ADDRESS.full)}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl border-t border-gold/20 px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-gold">{SITE_NAME}</p>
            <p className="mt-1 text-sm font-medium text-gold/80">{TAGLINE}</p>
            <p className="mt-2 text-sm text-gray-400">
              Logística administrativa en USA y operaciones en Venezuela.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Sede USA</p>
            <address className="mt-2 not-italic text-sm text-gray-400">
              {USA_ADDRESS.street}
              <br />
              {USA_ADDRESS.city}, {USA_ADDRESS.state} {USA_ADDRESS.zip}
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gold underline-offset-2 transition hover:text-gold-light hover:underline focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
            >
              Ver en mapa
            </a>
          </div>
          <div>
            <p className="font-semibold text-white">Enlaces rápidos</p>
            <ul className="mt-2 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 underline-offset-2 transition hover:text-gold hover:underline focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Nuestras entidades</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-400">
              <li>
                <Link href="#dual-hub" className="underline-offset-2 transition hover:text-gold hover:underline focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black rounded-sm">
                  JJ ASOCIADOS LLC
                </Link>
              </li>
              <li>
                <Link href="#dual-hub" className="underline-offset-2 transition hover:text-gold hover:underline focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black rounded-sm">
                  JJ LOGISTIC PLUS, C.A.
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gold/20 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} {SITE_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

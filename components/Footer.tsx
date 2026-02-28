import Link from "next/link";
import { SITE_NAME, USA_ADDRESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/30 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-gold">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-gray-400">
              Excelencia logística y administrativa global.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Sede USA</p>
            <address className="mt-2 not-italic text-sm text-gray-400">
              {USA_ADDRESS.street}
              <br />
              {USA_ADDRESS.city}, {USA_ADDRESS.state} {USA_ADDRESS.zip}
            </address>
          </div>
          <div>
            <p className="font-semibold text-white">Enlaces</p>
            <ul className="mt-2 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gold/20 pt-8 text-center text-sm text-gray-500">
          © {currentYear} {SITE_NAME}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

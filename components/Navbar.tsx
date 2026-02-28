"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_NAME, NAV_LINKS, BRAND_LOGO_PATH, CTA_QUOTE } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showLogo = BRAND_LOGO_PATH && !logoError;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-gold/30 bg-[#0a0a0a]/99 shadow-gold" : "border-gold/25 bg-[#0a0a0a]/98"
      } backdrop-blur-md`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
        <Link
          href="#hero"
          className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-white transition-transform duration-200 hover:opacity-90 md:text-xl"
        >
          {showLogo ? (
            <img
              src={BRAND_LOGO_PATH}
              alt={SITE_NAME}
              className="h-9 w-auto max-w-[160px] object-contain md:h-11"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              {SITE_NAME}
            </span>
          )}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:rounded-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-[width] duration-200 group-hover:w-2/3" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 md:block">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gold to-gold-light px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-gold/20 transition hover:shadow-gold/30 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            {CTA_QUOTE}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="relative flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#0a0a0a] md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold/20 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg py-2.5 px-3 text-gray-300 hover:bg-gold/10 hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-gold/20 pt-3">
                <Link
                  href="#contacto"
                  className="block rounded-lg bg-gradient-to-r from-gold to-gold-light py-3 px-4 text-center text-sm font-semibold text-black"
                  onClick={() => setOpen(false)}
                >
                  {CTA_QUOTE}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

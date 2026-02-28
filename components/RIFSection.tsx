"use client";

import { motion } from "framer-motion";
import {
  RIF_PDF_PATH,
  RIF_SECTION_TITLE,
  RIF_SECTION_SUBTITLE,
  RIF_BUTTON_LABEL,
} from "@/lib/constants";

export default function RIFSection() {
  return (
    <section
      id="rif"
      className="relative border-t border-gold/20 bg-black px-4 py-20 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="flex flex-col items-center rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-gold/10 via-black to-gold/5 px-6 py-10 text-center shadow-gold md:px-10 md:py-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold/90">
            Documento oficial
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            {RIF_SECTION_TITLE}
          </h2>
          <p className="mt-3 text-gray-400 md:text-lg">
            {RIF_SECTION_SUBTITLE}
          </p>
          <a
            href={RIF_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir documento RIF en nueva pestaña"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-3.5 text-base font-semibold text-black shadow-gold transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {RIF_BUTTON_LABEL}
          </a>
          <p className="mt-3 text-xs text-gray-500">
            Se abrirá el PDF en una nueva pestaña
          </p>
        </motion.div>
      </div>
    </section>
  );
}

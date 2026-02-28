"use client";

import { motion } from "framer-motion";
import {
  MAP_TITLE,
  MAP_SUBTITLE,
  USA_ADDRESS,
  VZLA_PORTS,
} from "@/lib/constants";

// Banderas como imagen para que se vean en todos los dispositivos (no emoji)
const FLAG_USA = "https://flagcdn.com/w80/us.png";
const FLAG_VENEZUELA = "https://flagcdn.com/w80/ve.png";

export default function GlobalMap() {
  return (
    <section
      id="mapa"
      className="relative border-t border-gold/20 bg-black px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              {MAP_TITLE}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {MAP_SUBTITLE}
          </p>
        </motion.header>

        {/* Conector desktop: arriba del grid para que no tape el texto */}
        <motion.div
          className="mt-10 hidden items-center justify-center gap-3 md:flex"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={FLAG_USA}
            alt=""
            width={32}
            height={24}
            className="rounded-sm object-cover shadow h-6 w-8"
          />
          <span className="text-sm font-medium text-gold/90">USA</span>
          <svg
            className="h-4 w-4 text-gold/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
          <span className="text-sm font-medium text-gold/90">Venezuela</span>
          <img
            src={FLAG_VENEZUELA}
            alt=""
            width={32}
            height={24}
            className="rounded-sm object-cover shadow h-6 w-8"
          />
        </motion.div>

        {/* Dos bloques claros: USA y Venezuela */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Bloque USA */}
          <motion.article
            className="rounded-2xl border border-gold/30 bg-gray-900/40 p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gold/50 bg-gold/10">
                <img
                  src={FLAG_USA}
                  alt="Bandera Estados Unidos"
                  width={48}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold">
                  Sede USA
                </h3>
                <p className="text-sm text-gray-500">
                  JJ ASOCIADOS LLC · Doral, Miami
                </p>
              </div>
            </div>
            <address className="mt-6 text-gray-300 not-italic">
              <p className="font-medium text-white">
                {USA_ADDRESS.street}
              </p>
              <p>
                {USA_ADDRESS.city}, {USA_ADDRESS.state} {USA_ADDRESS.zip}
              </p>
            </address>
            <p className="mt-4 text-sm text-gray-500">
              Oficina administrativa · Pagos internacionales · Coordinación global
            </p>
          </motion.article>

          {/* Bloque Venezuela */}
          <motion.article
            className="rounded-2xl border border-gold/30 bg-gray-900/40 p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gold/50 bg-gold/10">
                <img
                  src={FLAG_VENEZUELA}
                  alt="Bandera Venezuela"
                  width={48}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold">
                  Operaciones en Venezuela
                </h3>
                <p className="text-sm text-gray-500">
                  JJ LOGISTIC PLUS, C.A. · Puertos
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-400">
              Cobertura en los principales puertos:
            </p>
            <ul className="mt-3 space-y-2">
              {VZLA_PORTS.map((port) => (
                <li
                  key={port}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
                  {port}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Agenciamiento aduanal · Maquinaria pesada · Operaciones portuarias
            </p>
          </motion.article>
        </div>

        {/* Móvil: línea sutil entre las dos tarjetas, sin repetir banderas ni texto grande */}
        <div className="mt-6 flex justify-center md:hidden">
          <div className="h-px w-16 bg-gold/30" aria-hidden />
        </div>
      </div>
    </section>
  );
}

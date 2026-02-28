"use client";

import { motion } from "framer-motion";

export default function BrandingSection() {
  return (
    <section
      id="marca"
      className="relative border-t border-gold/20 bg-black px-4 py-20 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Nuestra marca
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 leading-relaxed">
            Identidad corporativa de J.J LOGISTICS C.A. Sello visual que nos representa en cada operación.
          </p>
          <div className="section-title-accent mx-auto mt-4" />
        </motion.header>

        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Marco de visualización: ancho y alto máximos para que la imagen no se deforme ni se alargue sin sentido */}
          <div className="flex max-h-[58vh] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border border-gold/25 bg-[#0d0d0d] px-4 py-6 shadow-xl md:px-8 md:py-8">
            <img
              src="/branding.png"
              alt="Branding J.J LOGISTICS C.A. - Identidad corporativa"
              className="max-h-[52vh] max-w-full object-contain object-center"
            />
          </div>
          <p className="mt-4 text-center text-sm font-medium uppercase tracking-wider text-gold/70">
            Identidad corporativa
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function BrandingSection() {
  return (
    <section
      id="marca"
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
              Nuestra marca
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Identidad corporativa J.J LOGISTICS C.A.
          </p>
          <div className="section-title-accent mx-auto mt-4" />
        </motion.header>
        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-gold/30 bg-gray-900/40 shadow-lg shadow-black/30 transition hover:border-gold/50 hover:shadow-gold/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/branding.png"
            alt="Branding J.J LOGISTICS C.A. - Identidad corporativa"
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

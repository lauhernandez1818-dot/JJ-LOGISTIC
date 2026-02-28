"use client";

import { motion } from "framer-motion";
import {
  OBJECTIVE_TITLE,
  OBJECTIVE_LEAD,
  OBJECTIVE_ITEMS,
  OBJECTIVE_CLOSING,
  HERO_TRUST_BADGES,
} from "@/lib/constants";

export default function ObjectiveSection() {
  return (
    <section
      id="objetivo"
      className="section-alt relative border-t border-gold/20 px-4 py-20 md:px-6"
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
              {OBJECTIVE_TITLE}
            </span>
          </h2>
          <div className="section-title-accent mx-auto mt-2" />
        </motion.header>

        <motion.div
          className="mt-10 space-y-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-lg text-gray-300 leading-relaxed">
            {OBJECTIVE_LEAD}
          </p>

          <ul className="space-y-4">
            {OBJECTIVE_ITEMS.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-3 rounded-lg border border-gold/20 bg-gray-900/40 px-4 py-3 text-gray-300 transition hover:border-gold/30 hover:bg-gray-900/60"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <p className="rounded-xl border border-gold/30 bg-gold/5 px-6 py-4 text-center font-medium text-gold-light">
            {OBJECTIVE_CLOSING}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {HERO_TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light shadow-sm transition hover:border-gold/60 hover:bg-gold/15"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

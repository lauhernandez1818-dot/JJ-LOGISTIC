"use client";

import { motion } from "framer-motion";
import GoldButton from "./GoldButton";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  CTA_QUOTE,
  HERO_TRUST_BADGES,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden bg-black px-4 pt-16 pb-24 md:px-6 md:pt-24"
    >
      {/* Golden Swoosh background */}
      <div className="golden-swoosh inset-0">
        <svg viewBox="0 0 1200 800" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F9E076" />
            </linearGradient>
          </defs>
          <path
            d="M-100 200 Q300 100 600 250 T1200 150"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
            className="opacity-20"
          />
          <path
            d="M-50 500 Q400 400 800 550 T1400 450"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            fill="none"
            className="opacity-15"
          />
          <path
            d="M0 700 Q500 600 1000 720"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            fill="none"
            className="opacity-10"
          />
        </svg>
      </div>

      {/* Soft gold glow behind headline */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none z-[1]" aria-hidden />
      {/* Bottom gradient for depth */}
      <div className="hero-gradient-bottom absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.1]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              {HERO_HEADLINE}
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {HERO_SUBHEADLINE}
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {HERO_TRUST_BADGES.map((badge, i) => (
              <motion.span
                key={badge}
                className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light shadow-gold transition hover:border-gold/60 hover:bg-gold/15"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GoldButton href="#contacto" variant="primary">
              {CTA_QUOTE}
            </GoldButton>
            <GoldButton href="#servicios" variant="secondary">
              Ver servicios
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-gold/35 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 p-6 shadow-gold-lg shadow-black/50 md:p-8">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-gold/90">
              Cobertura multimodal
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {/* Terrestre */}
              <div className="flex flex-col items-center rounded-xl border border-gold/20 bg-black/50 p-4 transition hover:border-gold/40 hover:bg-gold/5 md:p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 shadow-inner md:h-16 md:w-16">
                  <span className="text-2xl md:text-3xl" role="img" aria-label="Terrestre">🚚</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-gold-light">Terrestre</span>
              </div>
              {/* Aéreo */}
              <div className="flex flex-col items-center rounded-xl border border-gold/20 bg-black/50 p-4 transition hover:border-gold/40 hover:bg-gold/5 md:p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 shadow-inner md:h-16 md:w-16">
                  <span className="text-2xl md:text-3xl" role="img" aria-label="Aéreo">✈️</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-gold-light">Aéreo</span>
              </div>
              {/* Marítimo */}
              <div className="flex flex-col items-center rounded-xl border border-gold/20 bg-black/50 p-4 transition hover:border-gold/40 hover:bg-gold/5 md:p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 shadow-inner md:h-16 md:w-16">
                  <span className="text-2xl md:text-3xl" role="img" aria-label="Marítimo">🚢</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-gold-light">Marítimo</span>
              </div>
              {/* Helicóptero */}
              <div className="flex flex-col items-center rounded-xl border border-gold/20 bg-black/50 p-4 transition hover:border-gold/40 hover:bg-gold/5 md:p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 shadow-inner md:h-16 md:w-16">
                  <span className="text-2xl md:text-3xl" role="img" aria-label="Helicóptero">🚁</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-gold-light">Helicóptero</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

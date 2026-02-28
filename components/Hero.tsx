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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
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
              <span
                key={badge}
                className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light"
              >
                {badge}
              </span>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GoldButton href="#contacto" variant="primary">
              {CTA_QUOTE}
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative aspect-[16/10] w-full max-w-2xl mx-auto">
            {/* Placeholder: cargo plane + ship aesthetic with gradient overlay */}
            <div className="absolute inset-0 rounded-2xl border border-gold/40 bg-gradient-to-br from-black via-gray-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center gap-8 p-8 opacity-90">
                <svg
                  className="h-24 w-24 text-gold/60 md:h-32 md:w-32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    d="M6 12L3 21h18l-3-9M6 12h12M6 12l3-9h6l3 9"
                  />
                </svg>
                <svg
                  className="h-24 w-24 text-gold/60 md:h-32 md:w-32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 7 3 2h-3.5l-1-1H9l-2 2h2m-4 0H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

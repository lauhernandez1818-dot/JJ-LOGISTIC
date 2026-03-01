"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRESENTATION_BUTTON_LABEL, PRESENTATION_CONTENT } from "@/lib/constants";

export default function PresentationSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="presentacion"
      className="border-b border-gold/15 bg-[#0a0a0a] px-4 py-6 md:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 rounded-xl border border-gold/30 bg-gold/5 px-5 py-4 text-left transition hover:border-gold/50 hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          aria-expanded={open}
          aria-controls="presentation-content"
        >
          <span className="font-semibold text-gold">
            {PRESENTATION_BUTTON_LABEL}
          </span>
          <span
            className={`text-2xl text-gold transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            ▼
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              id="presentation-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-x border-b border-gold/20 bg-black/40 px-5 py-8 md:px-8">
                <h2 className="mb-6 text-xl font-bold text-gold md:text-2xl">
                  {PRESENTATION_CONTENT.title}
                </h2>
                <div className="space-y-6">
                  {PRESENTATION_CONTENT.sections.map((section) => (
                    <div key={section.number}>
                      <h3 className="mb-2 font-semibold text-white">
                        {section.number}. {section.title}
                      </h3>
                      {"text" in section ? (
                        <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                          {section.text}
                        </p>
                      ) : (
                        <ul className="list-inside list-disc space-y-1 text-sm text-gray-400 md:text-base">
                          {section.items.map((item, i) => (
                            <li key={i} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

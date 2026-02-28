"use client";

import { motion } from "framer-motion";
import EntityCard from "./EntityCard";
import {
  DUAL_HUB_TITLE,
  DUAL_HUB_SUBTITLE,
  ENTITY_USA,
  ENTITY_VZLA,
} from "@/lib/constants";

export default function DualHubStrategy() {
  return (
    <section
      id="dual-hub"
      className="relative border-t border-gold/20 bg-black px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              {DUAL_HUB_TITLE}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {DUAL_HUB_SUBTITLE}
          </p>
        </motion.header>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <EntityCard
            title="Hub USA"
            entity={ENTITY_USA.title}
            location={ENTITY_USA.location}
            focus={ENTITY_USA.focus}
            details={ENTITY_USA.details}
            index={0}
          />
          <EntityCard
            title="Hub Venezuela"
            entity={ENTITY_VZLA.title}
            location={ENTITY_VZLA.location}
            focus={ENTITY_VZLA.focus}
            details={ENTITY_VZLA.details}
            index={1}
          />
        </div>
      </div>
    </section>
  );
}

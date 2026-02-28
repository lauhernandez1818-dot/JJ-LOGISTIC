"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { SERVICES_TITLE, SERVICES_SUBTITLE, SERVICES } from "@/lib/constants";

export default function ServiceGrid() {
  return (
    <section
      id="servicios"
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
              {SERVICES_TITLE}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {SERVICES_SUBTITLE}
          </p>
          <div className="section-title-accent mx-auto mt-4" />
        </motion.header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              index={i}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceIcon } from "./ServiceCard";
import { SERVICES_TITLE, SERVICES_SUBTITLE, SERVICES, CTA_QUOTE } from "@/lib/constants";

const slideIn = {
  left: { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } },
};

function ServiceRow({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = service.image && !imgFailed;
  const isEven = index % 2 === 0;
  const contentFrom = isEven ? "right" : "left";
  const imageFrom = isEven ? "left" : "right";

  const contentMotion = slideIn[contentFrom];
  const imageMotion = slideIn[imageFrom];
  /* Solo fade para la imagen: evita que en móvil quede fuera de pantalla por el x */
  const imageMotionSafe = { initial: { opacity: 0 }, animate: { opacity: 1 } };

  return (
    <motion.article
      className="grid min-h-[320px] grid-cols-1 overflow-hidden border-b border-gold/15 lg:min-h-[380px] lg:grid-cols-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Contenido: en móvil debajo de la foto (order-2); en desktop alterna */}
      <motion.div
        className={`flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16 order-2 ${
          isEven ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"
        }`}
        initial={contentMotion.initial}
        whileInView={contentMotion.animate}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm text-gray-400 leading-relaxed sm:mt-4 sm:text-base">
          {service.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 sm:h-12 sm:w-12">
            <span className="text-xl sm:text-2xl text-[initial]" role="img" aria-label="Servicio">
              {service.id === "inspection" ? "👥" : service.id === "import" ? "📈" : service.id === "transport" ? "🚛" : service.id === "machinery" ? "🏗️" : service.id === "oil" ? "🛢️" : service.id === "shipping" ? "🛳️" : "📑"}
            </span>
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-gold/70">
            Servicio industrial
          </span>
        </div>
      </motion.div>

      {/* Imagen: en móvil primero (order-1); en desktop alterna */}
      <motion.div
        className={`relative w-full min-h-[200px] aspect-[4/3] sm:min-h-[220px] lg:min-h-0 lg:aspect-auto order-1 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
        initial={imageMotionSafe.initial}
        whileInView={imageMotionSafe.animate}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ minHeight: "200px" }}
      >
        {showImage ? (
          <div className="absolute inset-0 overflow-hidden bg-black/30">
            <img
              src={service.image}
              alt=""
              className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center scale-90"
              onError={() => setImgFailed(true)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900/95 to-gold/10">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-gold/30 bg-black/40 text-gold [&>svg]:h-12 [&>svg]:w-12">
              <ServiceIcon id={service.id} />
            </div>
          </div>
        )}
        <div
          className={`absolute top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block ${
            isEven ? "right-0" : "left-0"
          }`}
          aria-hidden
        />
      </motion.div>
    </motion.article>
  );
}

export default function ServiceGrid() {
  return (
    <section
      id="servicios"
      className="relative border-t border-gold/20 bg-black px-4 py-20 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-6">
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
      </div>

      {/* Filas a ancho completo: contenido e imagen desde los lados */}
      <div className="mt-6">
        {SERVICES.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* Cierre con CTA */}
      <motion.div
        className="flex flex-col items-center justify-center border-t border-gold/15 px-4 py-14 md:py-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-gray-400">¿Necesita una cotización?</p>
        <Link
          href="#contacto"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold text-black shadow-gold transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
        >
          {CTA_QUOTE}
        </Link>
      </motion.div>
    </section>
  );
}

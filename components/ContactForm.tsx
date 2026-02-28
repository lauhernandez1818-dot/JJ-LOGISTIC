"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import GoldButton from "./GoldButton";
import {
  CONTACT_TITLE,
  CONTACT_SUBTITLE,
  SERVICES,
  WHATSAPP_CONTACT,
} from "@/lib/constants";

function buildWhatsAppMessage(form: HTMLFormElement): string {
  const data = new FormData(form);
  const name = (data.get("name") as string)?.trim() || "";
  const email = (data.get("email") as string)?.trim() || "";
  const company = (data.get("company") as string)?.trim() || "";
  const serviceId = (data.get("service") as string)?.trim() || "";
  const message = (data.get("message") as string)?.trim() || "";

  const serviceLabel =
    SERVICES.find((s) => s.id === serviceId)?.title || serviceId || "No indicado";

  const lines: string[] = [
    "*Nueva solicitud - JJ LOGISTIC*",
    "",
    "────────────────────────────",
    "*Nombre:* " + name,
    "*Email:* " + email,
    "*Empresa:* " + (company || "—"),
    "*Servicio de interés:* " + serviceLabel,
    "",
    "*Mensaje:*",
    message,
    "────────────────────────────",
  ];

  return lines.join("\n");
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const text = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-gold/20 py-20 md:py-24"
    >
      {/* Fondo difuminado con colores de la empresa (oro y negro) */}
      <div
        className="absolute inset-0 bg-[#0a0a0a]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212, 175, 55, 0.25) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(249, 224, 118, 0.12) 0%, transparent 45%), radial-gradient(ellipse 70% 50% at 20% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 md:px-6">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              {CONTACT_TITLE}
            </span>
          </h2>
          <p className="mx-auto mt-4 text-gray-300">{CONTACT_SUBTITLE}</p>
          <div className="section-title-accent mx-auto mt-4" />
        </motion.header>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-14 rounded-2xl border border-gold/40 bg-black/70 p-6 shadow-2xl shadow-black/50 backdrop-blur-md transition focus-within:border-gold/50 focus-within:shadow-gold/10 md:bg-black/60 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Nombre *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-gold/30 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-gold/30 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-1 w-full rounded-lg border border-gold/30 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="Nombre de la empresa"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 w-full rounded-lg border border-gold/30 bg-black/50 px-4 py-3 text-white transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="">Seleccione un servicio</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-gold/30 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="Describe tu consulta o proyecto..."
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <GoldButton type="submit" variant="primary">
              Enviar solicitud
            </GoldButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

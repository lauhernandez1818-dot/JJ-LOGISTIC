"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  index?: number;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  title,
  description,
  index = 0,
  icon,
}: ServiceCardProps) {
  return (
    <motion.article
      className="flex flex-col rounded-xl border border-gold/30 bg-black/80 p-6 backdrop-blur transition hover:border-gold/50 sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-start gap-4">
        {icon ?? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-lg font-bold text-gold">
            {index + 1}
          </span>
        )}
        <div>
          <h3 className="text-lg font-bold text-gold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

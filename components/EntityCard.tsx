"use client";

import { motion } from "framer-motion";

type EntityCardProps = {
  title: string;
  entity: string;
  location: string;
  focus: string;
  details: readonly string[];
  index?: number;
};

export default function EntityCard({
  title,
  entity,
  location,
  focus,
  details,
  index = 0,
}: EntityCardProps) {
  return (
    <motion.article
      className="flex flex-col rounded-xl border border-gold/30 bg-black/80 p-6 shadow-lg shadow-black/30 backdrop-blur transition hover:border-gold/50 hover:shadow-gold hover:shadow-xl sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <h3 className="text-xl font-bold text-gold">{title}</h3>
      <p className="mt-1 text-sm font-medium text-gray-400">{entity}</p>
      <p className="mt-3 text-sm text-gold/90">{location}</p>
      <p className="mt-4 text-white">{focus}</p>
      <ul className="mt-4 space-y-2">
        {details.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

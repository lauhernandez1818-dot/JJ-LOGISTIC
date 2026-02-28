"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  index?: number;
  image?: string;
};

function ServiceIcon({ id }: { id: string }) {
  const iconClass = "h-8 w-8 text-gold md:h-10 md:w-10";
  switch (id) {
    case "customs":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "import":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    case "machinery":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "transport":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h8M8 17a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2M8 17h0m8 0a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2m0 0h-4" />
        </svg>
      );
    case "oil":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 7 3 2h-3.5l-1-1H9l-2 2h2m-4 0H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4" />
        </svg>
      );
    case "shipping":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3 21h18l-3-9M6 12h12M6 12l3-9h6l3 9" />
        </svg>
      );
    case "inspection":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <span className="text-lg font-bold text-gold">{id.slice(0, 1).toUpperCase()}</span>
      );
  }
}

export default function ServiceCard({
  id,
  title,
  description,
  index = 0,
  image,
}: ServiceCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = image && !imgFailed;

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-xl border border-gold/30 bg-black/80 shadow-lg shadow-black/30 backdrop-blur transition hover:border-gold/50 hover:shadow-gold hover:shadow-xl sm:p-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-40 w-full shrink-0 bg-gray-900">
        {showImage ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-b border-gold/20 bg-gold/5 p-4">
            <ServiceIcon id={id} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-bold text-gold">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.article>
  );
}

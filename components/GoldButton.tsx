"use client";

import { motion } from "framer-motion";

type GoldButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
};

export default function GoldButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black";
  const primary =
    "bg-gradient-to-br from-gold to-gold-light text-black hover:from-gold-light hover:to-gold hover:shadow-lg hover:shadow-gold/25";
  const secondary =
    "border-2 border-gold bg-transparent text-gold hover:bg-gold/10";

  const classes = `${base} ${variant === "primary" ? primary : secondary} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

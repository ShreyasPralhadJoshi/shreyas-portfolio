"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-background hover:shadow-[0_0_30px_rgba(110,231,183,0.35)] hover:scale-[1.02]",
    secondary:
      "border border-border bg-surface text-foreground hover:border-accent/40 hover:bg-accent/5",
    ghost: "text-muted hover:text-accent",
  };

  const combined = `${baseStyles} ${variants[variant]} ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.endsWith(".pdf");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={href.endsWith(".pdf") ? "_blank" : undefined}
          rel={href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
          download={href.endsWith(".pdf") ? true : undefined}
          className={combined}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          aria-label={ariaLabel}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={combined} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

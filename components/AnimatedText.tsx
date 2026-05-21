"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StaggerTextProps {
  text: string;
  className?: string;
}

export function StaggerText({ text, className = "" }: StaggerTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Visible immediately for SSR, slow JS, and before Framer Motion hydrates
  if (!mounted) {
    return (
      <span
        className={`bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent ${className}`}
        aria-label={text}
      >
        {text}
      </span>
    );
  }

  const letters = text.split("");

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

interface RoleCycleProps {
  roles: string[];
  className?: string;
}

export function RoleCycle({ roles, className = "" }: RoleCycleProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 400 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, roles]);

  return (
    <span className={className} aria-live="polite">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1em] w-[2px] bg-accent align-middle"
        aria-hidden
      />
    </span>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="border-t border-border px-6 py-12 md:px-12 lg:ml-64 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-display text-lg font-bold text-foreground">
              {personalInfo.displayName}
            </p>
            <p className="mt-1 text-sm text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="mt-2 text-xs text-muted/70">
              Designed & Built by Shreyas Joshi
            </p>
          </motion.div>

          <nav
            className="flex flex-wrap justify-center gap-4"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
      </footer>

      {showBackToTop && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          style={{ opacity }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-lg transition-all hover:border-accent hover:shadow-[0_0_30px_rgba(110,231,183,0.2)]"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
}

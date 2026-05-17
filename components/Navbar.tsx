"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  ];

  const NavContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <nav className="flex flex-col gap-1" aria-label="Main navigation">
      {navLinks.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={`group relative flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute left-0 h-6 w-1 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="pl-3">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-border bg-background/80 backdrop-blur-xl lg:flex">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-full flex-col p-6"
        >
          <Link
            href="#home"
            className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface font-display text-lg font-bold text-accent transition-colors hover:border-accent/40"
            aria-label="Go to home"
          >
            {personalInfo.initials}
          </Link>

          <div className="flex-1">
            <NavContent />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 border-t border-border pt-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(110,231,183,0.15)]"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur-xl lg:hidden">
        <Link
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface font-display text-sm font-bold text-accent"
          aria-label="Go to home"
        >
          {personalInfo.initials}
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-accent/40"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={20} />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[min(100%,320px)] flex-col bg-surface p-8 lg:hidden"
            >
              <motion.div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-foreground">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </motion.div>
              <NavContent onLinkClick={() => setMobileOpen(false)} />
              <motion.div className="mt-auto flex gap-3 border-t border-border pt-8">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:text-accent"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

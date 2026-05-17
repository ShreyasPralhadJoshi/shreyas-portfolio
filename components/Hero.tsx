"use client";

import { motion } from "framer-motion";
import { SiDjango, SiPython, SiReact, SiStreamlit } from "react-icons/si";
import { Brain, Database } from "lucide-react";
import { ChevronDown, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { RoleCycle, StaggerText } from "./AnimatedText";
import Button from "./Button";

const floatingIcons = [
  { Icon: SiPython, x: "10%", y: "20%", delay: 0 },
  { Icon: Brain, x: "85%", y: "15%", delay: 0.5 },
  { Icon: SiReact, x: "75%", y: "70%", delay: 1 },
  { Icon: SiDjango, x: "15%", y: "75%", delay: 1.5 },
  { Icon: SiStreamlit, x: "90%", y: "45%", delay: 0.8 },
  { Icon: Database, x: "5%", y: "45%", delay: 1.2 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-24 md:px-12 lg:ml-64 lg:px-16 xl:px-20"
    >
      <motion.div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-secondary/5 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        aria-hidden
      />

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden text-muted/20 md:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
          aria-hidden
        >
          <Icon size={40} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-display text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          Hello, I&apos;m
        </motion.p>

        <h1 className="heading-xl mb-3">
          <span className="gradient-text">
            <StaggerText text={personalInfo.name} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-lg italic text-muted md:text-xl"
        >
          Building AI systems that actually work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 text-xl text-muted md:text-2xl"
        >
          <RoleCycle roles={personalInfo.roleCycle} className="text-foreground" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10 max-w-xl text-muted"
        >
          {personalInfo.shortBio} Based in {personalInfo.location}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <Button onClick={scrollToProjects}>View My Work</Button>
          <Button href={personalInfo.resumeUrl} variant="secondary">
            <Download size={18} aria-hidden />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent lg:left-[calc(50%+8rem)]"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}

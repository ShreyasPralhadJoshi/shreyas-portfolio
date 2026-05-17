"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { education, experience, publications } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import TimelineItem, { type TimelineEntry } from "./TimelineItem";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const entries = useMemo<TimelineEntry[]>(() => {
    const primary = experience.find((e) => e.primary);
    const secondary = experience.filter((e) => !e.primary);
    const pub = publications[0];

    const list: TimelineEntry[] = [];

    if (primary) {
      list.push({ ...primary, entryType: "experience" });
    }
    if (pub) {
      list.push({ ...pub, entryType: "publication" });
    }
    secondary.forEach((e) => list.push({ ...e, entryType: "experience" }));
    education.forEach((e) => list.push({ ...e, entryType: "education" }));

    return list;
  }, []);

  return (
    <SectionWrapper id="experience" className="lg:ml-64">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-6xl"
      >
        <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
          Journey
        </p>
        <h2 className="heading-lg gradient-text">Where I&apos;ve Been</h2>
      </motion.div>

      <motion.div ref={containerRef} className="relative mx-auto max-w-4xl">
        <motion.div
          className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2"
          aria-hidden
        >
          <motion.div
            className="w-full origin-top bg-gradient-to-b from-accent to-accent-secondary"
            style={{ height: lineHeight }}
          />
        </motion.div>

        <motion.div className="flex flex-col gap-12 md:gap-16">
          {entries.map((entry, i) => (
            <TimelineItem
              key={
                entry.entryType === "publication"
                  ? `pub-${entry.id}`
                  : entry.entryType === "education"
                    ? `edu-${entry.id}`
                    : `exp-${entry.id}`
              }
              entry={entry}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

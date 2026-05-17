"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { skills } from "@/lib/data";
import type { SkillCategory } from "@/lib/types";
import { getSkillIcon } from "@/lib/utils";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(skills.map((s) => s.category)));
    return [
      { id: "all" as const, label: "All" },
      ...unique.map((cat) => ({ id: cat as SkillCategory, label: cat })),
    ];
  }, []);

  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="lg:ml-64">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
          Expertise
        </p>
        <h2 className="heading-lg gradient-text">What I Work With</h2>
      </motion.div>

      <motion.div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-lg bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => {
              const Icon = getSkillIcon(skill.icon);
              const proficiency = skill.proficiency ?? 85;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.03 }}
                  className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(110,231,183,0.08)]"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"
                  >
                    <Icon size={22} aria-hidden />
                  </motion.div>
                  <h3 className="mb-1 font-display font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <p className="mb-3 text-xs text-muted">{skill.category}</p>
                  <motion.div className="h-1 overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  FileText,
  GraduationCap,
  Users,
} from "lucide-react";
import type { Education, Experience, Publication } from "@/lib/types";

export type TimelineEntry =
  | (Experience & { entryType: "experience" })
  | (Education & { entryType: "education" })
  | (Publication & { entryType: "publication" });

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLeft: boolean;
}

export default function TimelineItem({
  entry,
  index,
  isLeft,
}: TimelineItemProps) {
  const isEducation = entry.entryType === "education";
  const isPublication = entry.entryType === "publication";
  const isExperience = entry.entryType === "experience";

  const exp = isExperience ? (entry as Experience) : null;
  const isPrimary = exp?.primary ?? false;
  const isSecondary =
    isExperience &&
    !isPrimary &&
    (exp?.type === "Extracurricular" || exp?.type === "Leadership");

  const Icon = isPublication
    ? FileText
    : isEducation
      ? GraduationCap
      : exp?.type === "Leadership"
        ? Users
        : Briefcase;

  const title = isPublication
    ? "Research Publication"
    : isEducation
      ? (entry as Education).degree
      : exp!.role;

  const subtitle = isPublication
    ? (entry as Publication).journal
    : isEducation
      ? (entry as Education).institution
      : exp!.company;

  const duration =
    isPublication ? (entry as Publication).year : (entry as Experience | Education).duration;

  const points = isPublication
    ? [(entry as Publication).title]
    : isEducation
      ? [
          (entry as Education).grade,
          ...((entry as Education).status
            ? [`Status: ${(entry as Education).status}`]
            : []),
          ...((entry as Education).location
            ? [`${(entry as Education).location}`]
            : []),
        ]
      : exp!.points;

  const nodeColor = isPrimary
    ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_rgba(110,231,183,0.2)]"
    : isPublication
      ? "border-accent-secondary bg-accent-secondary/10 text-accent-secondary"
      : isSecondary
        ? "border-border bg-surface/80 text-muted"
        : "border-border bg-surface text-accent";

  const cardBorder = isPrimary
    ? "border-accent/30 hover:border-accent/50"
    : isPublication
      ? "border-accent-secondary/30 hover:border-accent-secondary/50"
      : "border-border hover:border-accent/30";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
      className={`relative flex w-full md:w-[calc(50%-2rem)] ${
        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
        className={`absolute top-6 z-10 flex h-12 w-12 items-center justify-center rounded-xl border shadow-lg md:top-8 ${nodeColor} ${
          isLeft
            ? "right-0 translate-x-1/2 md:right-0 md:translate-x-1/2"
            : "left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
        }`}
      >
        <Icon size={22} aria-hidden />
      </motion.div>

      <motion.div
        className={`w-full rounded-2xl border bg-surface p-6 transition-colors ${cardBorder} ${
          isLeft ? "md:mr-12" : "md:ml-12"
        } ${isPrimary ? "ring-1 ring-accent/20" : ""}`}
      >
        {isPrimary && (
          <span className="mb-3 inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <Award size={12} aria-hidden />
            Primary Experience
          </span>
        )}
        {isPublication && (
          <span className="mb-3 inline-block rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1 text-xs font-medium text-accent-secondary">
            IJRPR Milestone
          </span>
        )}
        <div className="mb-1">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className={isPublication ? "text-accent-secondary" : "text-accent"}>
            {subtitle}
          </p>
          {isExperience && exp?.location && (
            <p className="text-sm text-muted">{exp.location}</p>
          )}
        </div>
        <p className="mb-4 text-sm text-muted">{duration}</p>
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
            >
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

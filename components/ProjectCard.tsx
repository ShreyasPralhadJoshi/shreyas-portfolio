"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/types";
import { getTagColor } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const hasDemo = Boolean(project.demo);
  const ctaHref = hasDemo ? project.demo : project.github;
  const ctaLabel = hasDemo ? "View Project →" : "View on GitHub →";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(110,231,183,0.12)] ${
        featured
          ? "border-accent/30 hover:border-accent/50 lg:col-span-1"
          : "border-border hover:border-accent/40"
      }`}
    >
      {isLoading && (
        <motion.div
          className="skeleton absolute inset-0 z-10 rounded-2xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <motion.div className={`relative p-6 ${featured ? "md:p-8" : ""}`}>
        <motion.div className="mb-4 flex flex-wrap items-center gap-2">
          {featured && (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Featured Project
            </span>
          )}
          {project.period && (
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {project.period}
            </span>
          )}
        </motion.div>

        <h3
          className={`mb-3 font-display font-bold text-foreground ${
            featured ? "heading-md" : "heading-sm"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mb-5 text-muted ${featured ? "text-base leading-relaxed" : "text-sm"}`}
        >
          {project.description}
        </p>

        <motion.div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div className="mb-4 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-2 hidden space-y-2 border-t border-border pt-4 group-hover:block">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
              >
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <motion.div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/85 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
          {project.highlights && (
            <ul className="hidden max-w-sm space-y-2 text-center md:block lg:hidden">
              {project.highlights.slice(0, 3).map((h) => (
                <li key={h} className="text-xs text-muted">
                  {h}
                </li>
              ))}
            </ul>
          )}
          <Link
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-lg border border-accent bg-accent/10 px-6 py-3 font-semibold text-accent transition-all hover:bg-accent hover:text-background"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

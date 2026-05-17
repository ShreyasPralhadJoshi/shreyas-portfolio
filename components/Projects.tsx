"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="lg:ml-64">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h2 className="heading-lg gradient-text">Things I&apos;ve Built</h2>
        <p className="mt-4 max-w-2xl text-muted">
          AI/ML systems, RAG pipelines, and full-stack applications — from
          learning platforms to recruitment analytics and dynamic pricing engines.
        </p>
      </motion.div>

      <motion.div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} featured index={i} />
        ))}
        {rest.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={featured.length + i}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

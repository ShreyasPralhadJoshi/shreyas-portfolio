"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import { personalInfo, publications } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const publication = publications[0];

  return (
    <SectionWrapper id="about" className="lg:ml-64">
      <motion.div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
            About Me
          </p>
          <h2 className="heading-lg gradient-text">Who I Am</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-wrap gap-3"
        >
          {personalInfo.availableForWork && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Currently open to opportunities
            </span>
          )}
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-2 text-sm text-accent-secondary">
            Published Researcher
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
            📄 IJRPR Published
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:mx-0"
          >
            <motion.div
              className="glow-border absolute -inset-1 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(110,231,183,0.1)",
                  "0 0 50px rgba(110,231,183,0.2)",
                  "0 0 30px rgba(110,231,183,0.1)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src="/images/profile.png"
                alt={`Professional headshot of ${personalInfo.displayName}, AI/ML Developer`}
                width={400}
                height={500}
                className="h-full w-full object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col justify-center">
            <p className="mb-8 text-lg leading-relaxed text-muted">
              {personalInfo.bio}
            </p>

            <motion.div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl border border-border bg-surface p-4 text-center transition-colors hover:border-accent/30"
                >
                  <p className="font-display text-xl font-bold text-accent md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {publication && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <FileText size={18} className="text-accent" aria-hidden />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                    Publication
                  </h3>
                </div>
                <p className="mb-2 font-display font-semibold text-foreground">
                  {publication.title}
                </p>
                <p className="mb-4 text-sm text-muted">
                  {publication.journal} · {publication.year}
                </p>
                <div className="flex flex-wrap gap-3">
                  {publication.link ? (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-background"
                    >
                      📄 View Publication
                    </a>
                  ) : (
                    <span
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-muted/60"
                      aria-disabled
                    >
                      📄 View Publication
                    </span>
                  )}
                  {publication.certificateUrl ? (
                    <a
                      href={publication.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-accent-secondary/40 bg-accent-secondary/10 px-4 py-2 text-sm font-medium text-accent-secondary transition-all hover:bg-accent-secondary hover:text-background"
                    >
                      🏅 View Certificate
                    </a>
                  ) : null}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

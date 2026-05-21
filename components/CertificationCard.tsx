"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, FileImage, FileText } from "lucide-react";
import type { Certification } from "@/lib/types";

interface CertificationCardProps {
  certification: Certification;
  index?: number;
}

export default function CertificationCard({
  certification,
  index = 0,
}: CertificationCardProps) {
  const FileIcon = certification.fileType === "pdf" ? FileText : FileImage;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_32px_rgba(110,231,183,0.1)]"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
          <Award size={20} aria-hidden />
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
          {certification.category}
        </span>
      </div>

      <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-foreground">
        {certification.title}
      </h3>

      <p className="mb-1 text-sm text-muted">{certification.issuer}</p>
      {certification.date && (
        <p className="mb-5 text-xs text-muted/80">{certification.date}</p>
      )}
      {!certification.date && <div className="mb-5" />}

      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-background"
        aria-label={`View certificate: ${certification.title}`}
      >
        <FileIcon size={16} aria-hidden />
        View Certificate
        <ExternalLink size={14} className="opacity-70" aria-hidden />
      </a>
    </motion.article>
  );
}

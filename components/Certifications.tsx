"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import CertificationCard from "./CertificationCard";
import SectionWrapper from "./SectionWrapper";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="lg:ml-64">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
          Credentials
        </p>
        <h2 className="heading-lg gradient-text">Certifications</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Professional courses and event credentials — open any card to view the
          full certificate.
        </p>
      </motion.div>

      <motion.div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} certification={cert} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

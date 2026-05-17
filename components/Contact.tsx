"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, personalInfo } from "@/lib/data";
import {
  formatGithubDisplay,
  formatLinkedinDisplay,
} from "@/lib/utils";
import ContactForm from "./ContactForm";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.location,
      href: undefined,
    },
    {
      icon: Github,
      label: "GitHub",
      value: formatGithubDisplay(contactInfo.github),
      href: contactInfo.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: formatLinkedinDisplay(contactInfo.linkedin),
      href: contactInfo.linkedin,
    },
  ];

  return (
    <SectionWrapper id="contact" className="lg:ml-64">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
          Get In Touch
        </p>
        <h2 className="heading-lg gradient-text">
          Let&apos;s Build Something Together
        </h2>
      </motion.div>

      <motion.div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-lg text-muted">
            Open to {personalInfo.role.toLowerCase()} roles and collaborations.
            Reach out for internships, full-time opportunities, or AI/ML project
            work.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {contactInfo.availableFor.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <ul className="space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 text-muted transition-colors hover:text-accent"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-all group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(110,231,183,0.1)]">
                      <Icon size={20} className="text-accent" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">
                        {label}
                      </p>
                      <p className="text-foreground">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface">
                      <Icon size={20} className="text-accent" aria-hidden />
                    </span>
                    <motion.div>
                      <p className="text-xs uppercase tracking-wider text-muted">
                        {label}
                      </p>
                      <p className="text-foreground">{value}</p>
                    </motion.div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex gap-4"
          >
            {[
              { icon: Github, href: contactInfo.github, label: "GitHub" },
              { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(110,231,183,0.15)]"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

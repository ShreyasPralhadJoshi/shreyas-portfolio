"use client";

import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {fields.map((field) => (
        <motion.div
          key={field.id}
          className="relative"
          whileFocus={{ scale: 1.01 }}
        >
          <input
            id={field.id}
            type={field.type}
            value={formData[field.id]}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
            }
            placeholder=" "
            className={`peer w-full rounded-lg border bg-surface px-4 pb-2 pt-6 text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_20px_rgba(110,231,183,0.15)] ${
              errors[field.id] ? "border-red-500/50" : "border-border"
            }`}
            aria-invalid={!!errors[field.id]}
            aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
          />
          <label
            htmlFor={field.id}
            className="pointer-events-none absolute left-4 top-4 text-sm text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {field.label}
          </label>
          {errors[field.id] && (
            <p
              id={`${field.id}-error`}
              className="mt-1 text-xs text-red-400"
              role="alert"
            >
              {errors[field.id]}
            </p>
          )}
        </motion.div>
      ))}

      <motion.div className="relative">
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder=" "
          className={`peer w-full resize-none rounded-lg border bg-surface px-4 pb-2 pt-6 text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_20px_rgba(110,231,183,0.15)] ${
            errors.message ? "border-red-500/50" : "border-border"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-4 top-4 text-sm text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
        >
          Message
        </label>
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </motion.div>

      {isSuccess && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
          role="status"
        >
          Message sent successfully! I&apos;ll get back to you soon.
        </motion.p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
        variant === "accent"
          ? "border border-accent/30 bg-accent/10 text-accent"
          : "border border-border bg-surface text-muted"
      }`}
    >
      {children}
    </span>
  );
}

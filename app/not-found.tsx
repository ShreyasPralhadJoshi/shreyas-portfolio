import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="heading-lg mb-4 gradient-text">Page Not Found</h1>
      <p className="mb-8 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-all hover:shadow-[0_0_30px_rgba(110,231,183,0.35)]"
      >
        Back to Home
      </Link>
    </main>
  );
}

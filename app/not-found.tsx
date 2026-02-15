import Link from "next/link";
import { Home } from "lucide-react";

import { BackButton } from "@/components/ui/BackButton";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)`,
        }}
      />
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold accent-text mb-4">404</p>
        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-zinc-400 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg accent-bg font-semibold text-black hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
          <BackButton />
        </div>
      </div>
    </main>
  );
}

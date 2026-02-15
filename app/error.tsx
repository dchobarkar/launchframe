"use client";

/**
 * Error boundary for route segments. Catches runtime errors and shows
 * a retry UI. Logs error to console for debugging.
 */
import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)`,
        }}
      />
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full accent-bg-muted flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 accent-text" />
        </div>
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-zinc-400 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg accent-bg font-semibold text-black hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-600 hover:border-zinc-500 font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

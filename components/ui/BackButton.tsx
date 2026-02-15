"use client";

import { ArrowLeft } from "lucide-react";

/** Button that navigates back via history.back(). Used on 404 page. */
export const BackButton = () => (
  <button
    type="button"
    onClick={() => window.history.back()}
    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-600 hover:border-zinc-500 font-semibold transition-colors"
  >
    <ArrowLeft className="w-4 h-4" />
    Go back
  </button>
);

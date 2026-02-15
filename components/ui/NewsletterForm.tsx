"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    // Simulate API call - in production would POST to your backend
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (isValid) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        disabled={status === "loading"}
        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm placeholder:text-zinc-500 focus:outline-none accent-focus w-48 disabled:opacity-50"
        aria-label="Email for newsletter"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 rounded-lg accent-bg-muted accent-text text-sm font-medium hover:accent-bg-muted-strong transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "..." : status === "success" ? "Subscribed!" : "Subscribe"}
      </button>
      {status === "error" && (
        <span className="text-xs text-red-400">Please enter a valid email</span>
      )}
    </form>
  );
}

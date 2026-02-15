"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";

export interface ContactSectionProps {
  headline: string;
  subtext?: string;
  id?: string;
}

export const ContactSection = ({
  headline,
  subtext,
  id = "contact",
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    if (isValidEmail) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
            {subtext && (
              <p className="text-zinc-400 max-w-xl mx-auto">{subtext}</p>
            )}
          </div>

          {status === "success" ? (
            <div className="glass-card rounded-xl px-5 py-10 sm:px-8 sm:py-12 md:py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
              <p className="text-zinc-400 text-sm mb-6">
                We&apos;ll get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="px-6 py-2.5 rounded-lg accent-bg font-medium text-black hover:opacity-90 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-5 sm:p-8 space-y-5 sm:space-y-6"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Your name"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-zinc-500 focus:outline-none accent-focus disabled:opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-zinc-500 focus:outline-none accent-focus disabled:opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="How can we help?"
                  rows={4}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-zinc-500 focus:outline-none accent-focus disabled:opacity-50 resize-none"
                  required
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Please fill in all fields and use a valid email address.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-3 rounded-lg accent-bg font-semibold text-black hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

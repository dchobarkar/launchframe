"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Loader2, Mail, X } from "lucide-react";

interface PlanActivationModalProps {
  planName: string;
  ctaLabel: string;
  onClose: () => void;
}

const isContactSales = (label: string) =>
  label.toLowerCase().includes("contact") ||
  label.toLowerCase().includes("sales");

const PlanActivationModal = ({
  planName,
  ctaLabel,
  onClose,
}: PlanActivationModalProps) => {
  const [status, setStatus] = useState<"processing" | "success">("processing");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setStatus("success"), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const isContact = isContactSales(ctaLabel);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="plan-modal-title"
        tabIndex={-1}
        className="relative glass-card rounded-2xl p-5 sm:p-8 max-w-md w-full border border-white/10 shadow-2xl outline-none focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center text-center">
          {status === "processing" ? (
            <>
              <div className="w-16 h-16 rounded-full accent-bg-muted flex items-center justify-center mb-6">
                <Loader2 className="w-8 h-8 accent-text animate-spin" />
              </div>
              <h3 id="plan-modal-title" className="text-xl font-semibold mb-2">
                {isContact ? "Sending your request..." : "Activating your plan"}
              </h3>
              <p className="text-zinc-400 text-sm">
                {isContact
                  ? "Our team will reach out within 24 hours."
                  : `Setting up your ${planName} plan...`}
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                {isContact ? (
                  <Mail className="w-8 h-8 text-green-400" />
                ) : (
                  <Check className="w-8 h-8 text-green-400" />
                )}
              </div>
              <h3 id="plan-modal-title" className="text-xl font-semibold mb-2">
                {isContact ? "Request received!" : `${planName} activated`}
              </h3>
              <p className="text-zinc-400 text-sm">
                {isContact
                  ? "We'll contact you shortly to discuss your needs."
                  : "Your plan is now active. Check your email for next steps."}
              </p>
            </>
          )}
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2.5 rounded-lg accent-bg font-medium text-black hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanActivationModal;

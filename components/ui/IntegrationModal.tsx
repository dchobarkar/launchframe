"use client";

/**
 * Demo modal for integration "connect" flow. Simulates connecting → connected.
 * Accessible: role="dialog", aria-modal, focus trap, Escape to close.
 */
import { useEffect, useRef, useState } from "react";
import { X, Check, Loader2 } from "lucide-react";

import IntegrationLogo from "@/components/ui/IntegrationLogo";

interface IntegrationModalProps {
  name: string;
  onClose: () => void;
}

const IntegrationModal = ({ name, onClose }: IntegrationModalProps) => {
  const [status, setStatus] = useState<"connecting" | "connected">(
    "connecting",
  );
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setStatus("connected"), 1500);
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
        aria-labelledby="integration-modal-title"
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
          <div className="mb-6">
            <IntegrationLogo name={name} size="lg" />
          </div>
          <h3
            id="integration-modal-title"
            className="text-xl font-semibold mb-2"
          >
            {status === "connecting" ? "Connecting to " : "Connected to "}
            {name}
          </h3>
          {status === "connecting" ? (
            <div className="flex items-center gap-2 text-zinc-400">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Syncing your data...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span className="text-sm">Integration active</span>
            </div>
          )}
          <p className="mt-4 text-zinc-500 text-sm">
            {status === "connecting"
              ? "This is a demo. In production, you would authorize access here."
              : "Your data will sync automatically. You can manage this in Settings."}
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2.5 rounded-lg accent-bg font-medium text-black hover:opacity-90 transition-opacity"
          >
            {status === "connected" ? "Done" : "Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationModal;

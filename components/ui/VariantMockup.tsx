import { ProductMockup } from "./ProductMockup";
import { Bot } from "lucide-react";

interface VariantMockupProps {
  variant: "saas" | "ai" | "creator";
}

export function VariantMockup({ variant }: VariantMockupProps) {
  if (variant === "saas") {
    return (
      <ProductMockup>
        <div className="p-6 grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 rounded bg-zinc-800/50 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          <div className="col-span-4 h-32 rounded bg-zinc-800/50 flex items-end p-4 gap-2">
            {[40, 65, 45, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-cyan-500/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </ProductMockup>
    );
  }

  if (variant === "ai") {
    return (
      <ProductMockup>
        <div className="p-6 space-y-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-violet-400" />
            </div>
            <div className="flex-1 h-24 rounded-lg bg-zinc-800/50" />
          </div>
          <div className="flex gap-3 justify-end">
            <div className="flex-1 h-16 rounded-lg bg-violet-500/20 border border-violet-500/30" />
            <div className="w-10 h-10 rounded-full bg-zinc-700" />
          </div>
        </div>
      </ProductMockup>
    );
  }

  if (variant === "creator") {
    return (
      <ProductMockup>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded bg-linear-to-br from-pink-500/20 to-violet-500/20"
              />
            ))}
          </div>
          <div className="h-24 rounded bg-zinc-800/50" />
        </div>
      </ProductMockup>
    );
  }

  return null;
}

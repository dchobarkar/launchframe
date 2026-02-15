import ProductMockup from "./ProductMockup";
import { Bot } from "lucide-react";

interface VariantMockupProps {
  variant: "saas" | "ai" | "creator" | "agency" | "dev-tools" | "ecommerce" | "fintech" | "marketing";
}

const VariantMockup = ({ variant }: VariantMockupProps) => {
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
                className="flex-1 rounded-t accent-bg-muted-strong"
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
            <div className="w-10 h-10 rounded-full accent-bg-muted-strong flex items-center justify-center">
              <Bot className="w-5 h-5 accent-text" />
            </div>
            <div className="flex-1 h-24 rounded-lg bg-zinc-800/50" />
          </div>
          <div className="flex gap-3 justify-end">
            <div className="flex-1 h-16 rounded-lg accent-bg-muted accent-border-muted" />
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
              <div key={i} className="aspect-square rounded accent-bg-muted" />
            ))}
          </div>
          <div className="h-24 rounded bg-zinc-800/50" />
        </div>
      </ProductMockup>
    );
  }

  if (variant === "agency") {
    return (
      <ProductMockup>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video rounded accent-bg-muted" />
            ))}
          </div>
          <div className="h-16 rounded bg-zinc-800/50" />
        </div>
      </ProductMockup>
    );
  }

  if (variant === "dev-tools") {
    return (
      <ProductMockup>
        <div className="p-6 font-mono text-xs">
          <div className="space-y-2 mb-4">
            <div className="h-4 w-3/4 rounded bg-zinc-800/50" />
            <div className="h-4 w-1/2 rounded bg-zinc-800/50" />
            <div className="h-4 w-4/5 rounded accent-bg-muted" />
          </div>
          <div className="rounded bg-zinc-800/30 p-3 accent-border-muted">
            <div className="h-3 w-full rounded bg-zinc-700/50 mb-2" />
            <div className="h-3 w-2/3 rounded bg-zinc-700/50" />
          </div>
        </div>
      </ProductMockup>
    );
  }

  if (variant === "ecommerce") {
    return (
      <ProductMockup>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded accent-bg-muted" />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-8 rounded bg-zinc-800/50" />
            <div className="w-16 h-8 rounded accent-bg-muted" />
          </div>
        </div>
      </ProductMockup>
    );
  }

  if (variant === "fintech" || variant === "marketing") {
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
                className="flex-1 rounded-t accent-bg-muted-strong"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </ProductMockup>
    );
  }

  return null;
};

export default VariantMockup;

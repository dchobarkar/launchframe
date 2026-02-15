interface ProductShowcaseMockupProps {
  variant:
    | "saas"
    | "ai"
    | "creator"
    | "agency"
    | "dev-tools"
    | "ecommerce"
    | "fintech"
    | "marketing";
}

const ProductShowcaseMockup = ({ variant }: ProductShowcaseMockupProps) => {
  if (variant === "saas") {
    return (
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
        </div>
        <div className="h-48 rounded bg-zinc-800/30 accent-border-muted" />
      </div>
    );
  }

  if (variant === "ai") {
    return (
      <div className="p-6">
        <div className="rounded-lg accent-border-muted accent-bg-muted p-4">
          <p className="text-sm accent-text opacity-90 mb-2">
            &ldquo;Summarize my unread emails and draft responses for the top
            3&rdquo;
          </p>
          <div className="h-2 w-24 rounded accent-bg-muted-strong animate-pulse" />
        </div>
        <div className="mt-4 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 rounded bg-zinc-800/50" />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "creator") {
    return (
      <div className="p-6">
        <div className="flex gap-2 mb-4">
          {["#ec4899", "#8b5cf6", "#06b6d4"].map((color, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-white/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video rounded-lg accent-bg-muted" />
          <div className="aspect-video rounded-lg accent-bg-muted" />
        </div>
      </div>
    );
  }

  if (variant === "agency") {
    return (
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video rounded-lg accent-bg-muted" />
          <div className="aspect-video rounded-lg accent-bg-muted" />
        </div>
        <div className="mt-4 h-12 rounded bg-zinc-800/50" />
      </div>
    );
  }

  if (variant === "dev-tools") {
    return (
      <div className="p-6 font-mono text-xs">
        <div className="rounded-lg accent-border-muted accent-bg-muted p-4 mb-4">
          <p className="text-zinc-400 mb-2">GET /api/v1/users</p>
          <div className="h-2 w-20 rounded accent-bg-muted-strong animate-pulse" />
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 rounded bg-zinc-800/50" />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "ecommerce") {
    return (
      <div className="p-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 aspect-square rounded-lg accent-bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-6 rounded bg-zinc-800/50" />
            <div className="h-4 w-3/4 rounded bg-zinc-800/50" />
            <div className="h-8 w-1/3 rounded accent-bg-muted mt-4" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "fintech" || variant === "marketing") {
    return (
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
        </div>
        <div className="h-48 rounded bg-zinc-800/30 accent-border-muted" />
      </div>
    );
  }

  return null;
};

export default ProductShowcaseMockup;

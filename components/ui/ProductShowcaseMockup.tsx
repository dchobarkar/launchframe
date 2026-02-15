interface ProductShowcaseMockupProps {
  variant: "saas" | "ai" | "creator";
}

export function ProductShowcaseMockup({ variant }: ProductShowcaseMockupProps) {
  if (variant === "saas") {
    return (
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
          <div className="flex-1 h-20 rounded bg-zinc-800/50" />
        </div>
        <div className="h-48 rounded bg-zinc-800/30 border border-cyan-500/20" />
      </div>
    );
  }

  if (variant === "ai") {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-4">
          <p className="text-sm text-violet-200 mb-2">
            &ldquo;Summarize my unread emails and draft responses for the top
            3&rdquo;
          </p>
          <div className="h-2 w-24 rounded bg-violet-500/50 animate-pulse" />
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
          <div className="aspect-video rounded-lg bg-pink-500/20" />
          <div className="aspect-video rounded-lg bg-violet-500/20" />
        </div>
      </div>
    );
  }

  return null;
}

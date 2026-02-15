export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)`,
        }}
      />
      <div className="w-10 h-10 rounded-full border-2 border-zinc-600 border-t-accent animate-spin" />
      <p className="mt-4 text-zinc-500 text-sm">Loading...</p>
    </main>
  );
}

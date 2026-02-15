/** Browser-style mockup wrapper (traffic lights + content area). */
const ProductMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-zinc-900/80 p-4 sm:p-6">
    <div className="flex gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
    </div>
    <div className="bg-zinc-950 rounded-lg overflow-hidden min-h-75">
      {children}
    </div>
  </div>
);

export default ProductMockup;

export interface LogoCloudProps {
  headline: string;
  logos: { name: string; width?: number }[];
}

export function LogoCloud({ headline, logos }: LogoCloudProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-500 text-sm font-medium mb-12">
          {headline}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-8 text-zinc-500 font-semibold text-lg"
              style={{ width: logo.width ?? 120 }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

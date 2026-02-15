export interface SectionWithHeadlineProps {
  id?: string;
  headline: string;
  subtext?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SectionWithHeadline({
  id,
  headline,
  subtext,
  children,
  className = "py-16 md:py-20",
  contentClassName,
}: SectionWithHeadlineProps) {
  return (
    <section id={id} className={`${className} scroll-mt-20`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
          {subtext && (
            <p className="text-zinc-400 max-w-2xl mx-auto">{subtext}</p>
          )}
        </div>
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}

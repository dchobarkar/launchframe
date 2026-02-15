import Link from "next/link";
import type { LegalSection } from "@/data/legal";

export interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  backHref: string;
  productName: string;
}

export function LegalPage({
  title,
  lastUpdated,
  sections,
  backHref,
  productName,
}: LegalPageProps) {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 mb-8 transition-colors"
        >
          ← Back to {productName}
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
            <p className="text-zinc-500 text-sm">Last updated: {lastUpdated}</p>
          </header>

          <div className="legal-content space-y-10">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-zinc-400 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

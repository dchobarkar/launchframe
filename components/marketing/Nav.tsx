import Link from "next/link";

export interface NavProps {
  productName: string;
  links?: { label: string; href: string }[];
}

export function Nav({ productName, links = [] }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg">
            {productName}
          </Link>
          <div className="flex items-center gap-8">
            {links.length > 0 ? (
              links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors hidden sm:block"
                >
                  {link.label}
                </Link>
              ))
            ) : (
              <>
                <Link
                  href="#features"
                  className="text-sm text-zinc-400 hover:text-zinc-200 hidden sm:block"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm text-zinc-400 hover:text-zinc-200 hidden sm:block"
                >
                  Pricing
                </Link>
              </>
            )}
            <Link
              href={links.find((l) => l.label === "Pricing")?.href ?? "#pricing"}
              className="text-sm font-medium px-4 py-2 rounded-lg accent-bg-muted accent-text hover:accent-bg-muted-strong transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

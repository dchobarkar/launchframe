import { Quote } from "lucide-react";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="glass-card p-5 sm:p-6 rounded-xl h-full flex flex-col">
      <Quote className="w-10 h-10 accent-text opacity-50 mb-4" />
      <p className="text-zinc-300 mb-6 flex-1 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full accent-bg flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-zinc-500">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

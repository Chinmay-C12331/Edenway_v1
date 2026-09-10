import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "dark";
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel = "Admission Enquiry",
  primaryHref = "/admissions",
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 lg:py-20 ${
        isDark ? "bg-navy-800 text-white" : "bg-warm-100"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
            isDark ? "text-white" : "text-navy-800"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-navy-200" : "text-warm-500"
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold transition-all ${
              isDark
                ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold transition-all border ${
                isDark
                  ? "border-navy-600 text-white hover:bg-navy-700"
                  : "border-warm-300 text-navy-800 hover:bg-white"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

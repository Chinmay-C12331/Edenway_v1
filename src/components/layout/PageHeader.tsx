import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="bg-navy-800 text-white pt-28 lg:pt-36 pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4"
          >
            <ol className="flex items-center gap-1.5 text-sm text-navy-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-navy-500" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-gold-300 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-navy-200 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

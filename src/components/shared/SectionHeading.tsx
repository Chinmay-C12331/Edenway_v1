import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 lg:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-sm font-semibold text-green-500 uppercase tracking-widest mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-800 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base lg:text-lg text-warm-500 leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

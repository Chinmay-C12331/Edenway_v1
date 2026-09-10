import { Calendar, AlertCircle, FileText, Bell, Info } from "lucide-react";
import type { Notice } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  exam: FileText,
  meeting: Calendar,
  holiday: Bell,
  announcement: AlertCircle,
  general: Info,
};

const categoryColors: Record<string, string> = {
  exam: "text-navy-600 bg-navy-50",
  meeting: "text-green-600 bg-green-50",
  holiday: "text-gold-600 bg-gold-50",
  announcement: "text-navy-600 bg-navy-50",
  general: "text-warm-500 bg-warm-100",
};

interface NoticeCardProps {
  notice: Notice;
}

export default function NoticeCard({ notice }: NoticeCardProps) {
  const Icon = categoryIcons[notice.category] || Info;
  const colorClass = categoryColors[notice.category] || "text-warm-500 bg-warm-100";
  const formattedDate = new Date(notice.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group flex gap-4 p-4 lg:p-5 rounded-xl bg-white border border-warm-200 shadow-card hover:shadow-card-hover transition-all duration-300">
      {/* Icon */}
      <div
        className={cn(
          "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center",
          colorClass
        )}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-semibold text-navy-800 truncate">
            {notice.title}
          </h3>
          {notice.isDemo && (
            <span className="shrink-0 text-[10px] font-medium text-warm-400 bg-warm-100 px-1.5 py-0.5 rounded">
              DEMO
            </span>
          )}
        </div>
        <p className="text-xs text-warm-400 mb-1.5">{formattedDate}</p>
        <p className="text-sm text-warm-500 leading-relaxed">
          {notice.description}
        </p>
      </div>
    </div>
  );
}

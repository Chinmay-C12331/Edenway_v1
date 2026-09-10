import { Calendar, Tag } from "lucide-react";
import type { SchoolEvent } from "@/types";

const categoryColors: Record<string, string> = {
  academic: "bg-navy-50 text-navy-700",
  sports: "bg-green-50 text-green-700",
  cultural: "bg-gold-50 text-gold-700",
  celebration: "bg-gold-50 text-gold-700",
  competition: "bg-navy-50 text-navy-700",
  community: "bg-green-50 text-green-700",
};

interface EventCardProps {
  event: SchoolEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const colorClass = categoryColors[event.category] || "bg-warm-100 text-warm-500";

  return (
    <div className="group p-5 lg:p-6 rounded-xl bg-white border border-warm-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${colorClass}`}
        >
          <Tag className="w-3 h-3" />
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </span>
        {event.isUpcoming && (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
            Upcoming
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-navy-800 mb-2 group-hover:text-navy-600 transition-colors">
        {event.title}
      </h3>

      {/* Date */}
      {event.date && (
        <div className="flex items-center gap-1.5 text-sm text-warm-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-warm-500 leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}

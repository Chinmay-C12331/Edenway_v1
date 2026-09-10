import type { TimelineMilestone } from "@/types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  milestones: TimelineMilestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-warm-200 -translate-x-1/2" />

      <div className="space-y-8 lg:space-y-12">
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={milestone.id}
              className={cn(
                "relative flex items-start gap-6",
                "md:gap-0"
              )}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-navy-800 rounded-full border-[3px] border-white shadow-md -translate-x-1/2 z-10 mt-1.5" />

              {/* Content */}
              <div
                className={cn(
                  "ml-12 md:ml-0 md:w-[calc(50%-2rem)]",
                  isLeft ? "md:pr-4 md:text-right" : "md:ml-auto md:pl-4"
                )}
              >
                <span className="inline-block px-3 py-1 text-xs font-bold text-navy-600 bg-navy-50 rounded-full mb-2">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-semibold text-navy-800 mb-1">
                  {milestone.title}
                </h3>
                <p className="text-sm text-warm-500 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

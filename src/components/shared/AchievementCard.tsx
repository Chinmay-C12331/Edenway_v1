import { Trophy, Award, Medal, Star } from "lucide-react";
import type { Achievement } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Award,
  Medal,
  Star,
};

const categoryColors: Record<string, string> = {
  academic: "bg-navy-50 text-navy-600",
  sports: "bg-green-50 text-green-600",
  cultural: "bg-gold-50 text-gold-600",
  competition: "bg-navy-50 text-navy-600",
  school: "bg-gold-50 text-gold-600",
};

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = iconMap[achievement.icon || "Trophy"] || Trophy;
  const colorClass = categoryColors[achievement.category] || "bg-warm-100 text-warm-500";

  return (
    <div className="group p-6 rounded-xl bg-white border border-warm-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-navy-800 mb-2">
        {achievement.title}
      </h3>
      {achievement.year && (
        <p className="text-xs font-medium text-green-600 mb-2">
          {achievement.year}
        </p>
      )}
      <p className="text-sm text-warm-500 leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );
}

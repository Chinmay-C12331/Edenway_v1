import {
  BookOpen,
  Heart,
  Medal,
  Users,
  Building,
  Laptop,
} from "lucide-react";
import type { FeatureCardData } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Heart,
  Medal,
  Users,
  Building,
  Laptop,
};

interface FeatureCardProps {
  feature: FeatureCardData;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || BookOpen;

  return (
    <div className="group p-6 lg:p-8 rounded-xl bg-white border border-warm-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold text-navy-800 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-warm-500 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import {
  Users,
  GraduationCap,
  School,
  Calendar,
  Trophy,
  Award,
} from "lucide-react";
import type { Stat } from "@/types";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  GraduationCap,
  School,
  Calendar,
  Trophy,
  Award,
};

function AnimatedCounter({
  value,
  suffix,
  shouldAnimate,
}: {
  value: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldAnimate, value]);

  return (
    <span>
      {shouldAnimate ? count : value}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  stat: Stat;
  shouldAnimate: boolean;
  index: number;
}

export default function StatCard({ stat, shouldAnimate, index }: StatCardProps) {
  const Icon = iconMap[stat.icon] || Users;

  return (
    <div
      className={cn(
        "text-center p-6 rounded-xl bg-white border border-warm-200 shadow-card",
        "hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300",
        "opacity-0",
        shouldAnimate && "animate-slide-up"
      )}
      style={{
        animationDelay: shouldAnimate ? `${index * 100}ms` : "0ms",
      }}
    >
      <div className="w-12 h-12 mx-auto mb-3 bg-navy-50 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-navy-600" />
      </div>
      <p className="text-2xl sm:text-3xl font-bold text-navy-800 mb-1">
        <AnimatedCounter
          value={stat.numericValue}
          suffix={stat.suffix}
          shouldAnimate={shouldAnimate}
        />
      </p>
      <p className="text-sm text-warm-500 font-medium">{stat.label}</p>
    </div>
  );
}

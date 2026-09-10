import { FileQuestion } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function EmptyState({
  title,
  description,
  icon: Icon = FileQuestion,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 lg:py-24 text-center px-4">
      <div className="w-16 h-16 bg-warm-100 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-warm-400" />
      </div>
      <h3 className="text-lg font-semibold text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-warm-500 max-w-md">{description}</p>
    </div>
  );
}

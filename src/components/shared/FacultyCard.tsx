import { User } from "lucide-react";
import type { FacultyMember } from "@/types";
import { cn } from "@/lib/utils";

interface FacultyCardProps {
  member: FacultyMember;
}

export default function FacultyCard({ member }: FacultyCardProps) {
  const roleColorMap: Record<string, string> = {
    Founder: "bg-gold-50 text-gold-700 border-gold-200",
    President: "bg-navy-50 text-navy-700 border-navy-200",
    Secretary: "bg-navy-50 text-navy-700 border-navy-200",
    Principal: "bg-green-50 text-green-700 border-green-200",
    Administrator: "bg-green-50 text-green-700 border-green-200",
    "Head Mistress": "bg-green-50 text-green-700 border-green-200",
  };

  const badgeColor =
    roleColorMap[member.role] || "bg-warm-100 text-warm-500 border-warm-200";

  return (
    <div className="group p-5 lg:p-6 rounded-xl bg-white border border-warm-200 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
      {/* Avatar Placeholder */}
      <div className="w-20 h-20 mx-auto mb-4 bg-navy-50 rounded-full flex items-center justify-center group-hover:bg-navy-100 transition-colors">
        <User className="w-9 h-9 text-navy-400" />
      </div>

      {/* Name */}
      <h3 className="text-base font-semibold text-navy-800 mb-1.5">
        {member.name}
      </h3>

      {/* Role Badge */}
      <span
        className={cn(
          "inline-block px-3 py-1 text-xs font-medium rounded-full border",
          badgeColor
        )}
      >
        {member.role}
      </span>

      {/* Department */}
      {member.department && (
        <p className="mt-2 text-xs text-warm-500">{member.department}</p>
      )}

      {/* Bio */}
      {member.bio && (
        <p className="mt-3 text-sm text-warm-500 leading-relaxed">
          {member.bio}
        </p>
      )}
    </div>
  );
}

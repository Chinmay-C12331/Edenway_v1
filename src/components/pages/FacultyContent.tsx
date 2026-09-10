"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import FacultyCard from "@/components/shared/FacultyCard";
import CTASection from "@/components/shared/CTASection";
import { facultyMembers } from "@/data/faculty";
import { Users, GraduationCap, Heart } from "lucide-react";

const categories = [
  { label: "All Staff", value: "all" },
  { label: "School Leadership", value: "leadership" },
  { label: "Teaching Faculty", value: "teaching" },
  { label: "Administrative & Support", value: "support" },
];

export default function FacultyContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStaff =
    activeCategory === "all"
      ? facultyMembers
      : facultyMembers.filter((m) => m.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Faculty & Staff"
        subtitle="A dedicated team of educators, leaders, and support staff working together to inspire every student at Edenway."
        breadcrumbs={[{ label: "Faculty" }]}
      />

      {/* Staff Directory Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-navy-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
                25 Dedicated Team Members
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "bg-navy-800 text-white shadow-sm"
                      : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Faculty Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Philosophy & Student Mentorship */}
      <section className="py-16 bg-navy-50/60 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                Close Mentorship Ratio
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                With a balanced student-to-teacher ratio, our educators know each child
                personally and monitor their emotional and academic development.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                Subject Specialization
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Teachers bring deep subject expertise across Mathematics, Sciences,
                English literature, Social Studies, Physical Education, and Regional Languages.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                Empathetic Pastoral Care
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Beyond exams, our faculty is dedicated to character formation, moral
                values, emotional resilience, and lifelong ethical conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Interested in Joining Our Faculty?"
        subtitle="We welcome dedicated, passionate educators seeking to make a lasting difference in rural education."
        primaryLabel="Contact Administration"
        primaryHref="/contact"
        secondaryLabel="Learn More About Edenway"
        secondaryHref="/about"
      />
    </div>
  );
}

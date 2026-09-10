import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { academicYears } from "@/data/achievements";
import {
  Trophy,
  Award,
  Medal,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SSLC Examination Results",
  description:
    "Official SSLC examination results of Edenway High School, Banavasi — 100% pass rate, Karnataka State 7th rank (99.04%), and complete student merit list.",
};

export default function ResultsPage() {
  const currentBatch = academicYears[0];
  const toppers = currentBatch?.results.slice(0, 3) || [];
  const otherHighScorers = currentBatch?.results.slice(3) || [];

  return (
    <div>
      <PageHeader
        title="SSLC Examination Results"
        subtitle="Uncompromising academic excellence reflected in Karnataka State Board examination performance."
        breadcrumbs={[
          { label: "Achievements", href: "/achievements" },
          { label: "SSLC Results" },
        ]}
      />

      {/* Batch Overview Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="inline-block text-xs uppercase tracking-widest text-gold-400 font-bold bg-navy-700/80 px-3 py-1 rounded-full mb-3">
                  Academic Year {currentBatch.year}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  100% Pass Percentage &bull; State Rank 7
                </h2>
                <p className="text-navy-200 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
                  Every single candidate who appeared for the SSLC examinations from
                  Edenway High School cleared with flying colours, upholding our proud
                  tradition of 100% pass results.
                </p>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <div className="bg-navy-800/80 border border-navy-700 rounded-2xl p-5 text-center min-w-[120px]">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gold-400">
                    {currentBatch.passPercentage}
                  </span>
                  <p className="text-xs text-navy-300 mt-1">Pass Rate</p>
                </div>
                <div className="bg-navy-800/80 border border-navy-700 rounded-2xl p-5 text-center min-w-[120px]">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gold-400">
                    {currentBatch.topScore}
                  </span>
                  <p className="text-xs text-navy-300 mt-1">Highest Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podium - Top 3 Rank Holders */}
      <section className="py-12 lg:py-16 bg-navy-50/50 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="School Rank Holders"
            title="Podium of Honor — Batch 2022–23"
            subtitle="The highest achievers who set benchmark standards in the Karnataka SSLC Board examinations."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* 2nd Rank */}
            {toppers[1] && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-navy-200 shadow-md text-center order-2 md:order-1">
                <div className="w-14 h-14 rounded-full bg-navy-100 text-navy-800 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2nd
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  {toppers[1].studentName}
                </h3>
                <div className="text-3xl font-extrabold text-navy-800 mt-2">
                  {toppers[1].percentage}%
                </div>
                <span className="inline-block mt-3 text-xs font-semibold text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                  {toppers[1].rank || "School Level 2nd Rank"}
                </span>
              </div>
            )}

            {/* 1st Rank (Center, Highlighted) */}
            {toppers[0] && (
              <div className="bg-gradient-to-b from-navy-800 to-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl text-center order-1 md:order-2 border-2 border-gold-400 transform md:-translate-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                  School &amp; State Topper
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {toppers[0].studentName}
                </h3>
                <div className="text-4xl sm:text-5xl font-extrabold text-gold-400 my-3">
                  {toppers[0].percentage}%
                </div>
                <p className="text-xs font-semibold text-gold-200 bg-navy-800/80 border border-gold-500/30 px-3 py-1.5 rounded-full inline-block">
                  {toppers[0].rank}
                </p>
              </div>
            )}

            {/* 3rd Rank */}
            {toppers[2] && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-navy-200 shadow-md text-center order-3">
                <div className="w-14 h-14 rounded-full bg-navy-100 text-navy-800 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3rd
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  {toppers[2].studentName}
                </h3>
                <div className="text-3xl font-extrabold text-navy-800 mt-2">
                  {toppers[2].percentage}%
                </div>
                <span className="inline-block mt-3 text-xs font-semibold text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                  {toppers[2].rank || "School Level 3rd Rank"}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Complete Merit Roll Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Merit List"
            title="Distinction &amp; High Achievers Roll"
            subtitle="Students who scored 80% and above in the 2022–23 SSLC board examinations."
            align="center"
          />

          <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-800 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Roll</th>
                  <th className="py-4 px-6">Student Name</th>
                  <th className="py-4 px-6 text-center">Score</th>
                  <th className="py-4 px-6">Distinction / Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {currentBatch.results.map((student, idx) => (
                  <tr
                    key={student.id}
                    className={`hover:bg-navy-50/50 transition-colors ${
                      idx < 3 ? "bg-gold-50/30 font-medium" : ""
                    }`}
                  >
                    <td className="py-3.5 px-6 text-navy-500 font-mono text-xs">
                      #{String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-navy-900">
                      {student.studentName}
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          student.percentage >= 90
                            ? "bg-green-100 text-green-800"
                            : "bg-navy-100 text-navy-800"
                        }`}
                      >
                        {student.percentage}%
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-xs text-navy-600">
                      {student.rank ? (
                        <span className="font-semibold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                          {student.rank}
                        </span>
                      ) : student.percentage >= 85 ? (
                        <span className="text-green-700 font-medium">
                          Distinction
                        </span>
                      ) : (
                        <span className="text-navy-600">First Class</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Secret to Our Success */}
      <section className="py-16 bg-navy-50/70 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Methodology"
            title="How Edenway Consistently Delivers 100% Results"
            subtitle="The systematic preparation framework that guides our 10th Standard candidates to success."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">
                Early Syllabus Completion
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We complete the prescribed Karnataka State Board SSLC syllabus well in
                advance to allow 3 full months dedicated strictly to revision and practice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Medal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">
                Simulated Mock Board Exams
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Students appear for multiple preparatory exams under authentic board
                exam hall conditions to conquer exam anxiety and refine time management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">
                Personalized Remedial Care
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Special remedial study hours and one-on-one doubt clarification sessions
                ensure that no student is left struggling with complex topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Enroll Your Child for Assured Academic Growth"
        subtitle="Give your child the Edenway advantage — proven mentoring that brings out the best in every student."
        primaryLabel="Apply for Admission"
        primaryHref="/admissions"
        secondaryLabel="Explore Academics"
        secondaryHref="/academics"
      />
    </div>
  );
}

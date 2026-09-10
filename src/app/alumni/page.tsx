import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { batches } from "@/data/batches";
import {
  GraduationCap,
  Users,
  Award,
  Sparkles,
  Compass,
  ArrowRight,
  HeartHandshake,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni & Batches",
  description:
    "Edenway High School Alumni network and batch archives — celebrating the success, higher studies, and careers of our former students.",
};

export default function AlumniPage() {
  return (
    <div>
      <PageHeader
        title="Alumni & Batches"
        subtitle="Our alumni carry the Edenway ethos into top pre-university colleges, universities, and distinguished careers."
        breadcrumbs={[{ label: "Alumni" }]}
      />

      {/* Batches Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Graduating Classes"
            title="Edenway SSLC Batches"
            subtitle="Honoring the cohorts that have walked the halls of Edenway and made us proud."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {batches.map((b) => (
              <div
                key={b.id}
                className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-navy-700/80 px-3 py-1 rounded-full">
                    SSLC Batch
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4">
                  Batch of {b.year}
                </h3>
                <p className="text-navy-200 text-sm sm:text-base leading-relaxed mb-6">
                  {b.description}
                </p>

                <div className="pt-4 border-t border-navy-700/80 flex flex-wrap items-center justify-between gap-4 text-xs text-navy-300">
                  <span>100% Pass Percentage</span>
                  <Link
                    href="/results"
                    className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1"
                  >
                    View Merit List
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Historical Batches Placeholder */}
            <div className="bg-navy-50/70 rounded-3xl p-8 sm:p-10 border border-navy-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Earlier Cohorts &amp; Alumni Archive
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  Since 2008, hundreds of young boys and girls have completed their
                  foundational education at Edenway. Many are currently engineers,
                  teachers, medical practitioners, entrepreneurs, and public servants.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-navy-200/80">
                <p className="text-xs text-navy-700 font-medium">
                  Are you an Edenway alumnus? We invite you to register with our
                  alumni database to mentor current students and receive alumni event invites.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 hover:text-gold-600 transition-colors"
                >
                  Register as an Alumnus
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Impact Areas */}
      <section className="py-16 bg-navy-50/50 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Where Are They Now?"
            title="Pioneering Diverse Pathways"
            subtitle="The solid foundation built at Edenway propels students across varied professional avenues."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 mb-2">Science &amp; Engineering</h4>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Graduates pursuing advanced engineering, technology, and applied research programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 mb-2">Medicine &amp; Health</h4>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Alumni pursuing medical, nursing, pharmacology, and allied healthcare careers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 mb-2">Commerce &amp; Finance</h4>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Chartered accountancy, banking, business management, and corporate analytics.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-900 mb-2">Civil Services &amp; Teaching</h4>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Serving the state, society, and future classrooms with dedication and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Stay Connected with Your Alma Mater"
        subtitle="Edenway is always your second home. Share your success, mentor juniors, or visit during annual celebrations."
        primaryLabel="Contact School Office"
        primaryHref="/contact"
        secondaryLabel="Explore School History"
        secondaryHref="/history"
      />
    </div>
  );
}

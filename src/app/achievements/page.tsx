import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import AchievementCard from "@/components/shared/AchievementCard";
import CTASection from "@/components/shared/CTASection";
import { achievements } from "@/data/achievements";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements & Accolades",
  description:
    "Explore the remarkable achievements of Edenway High School, Banavasi — Karnataka State Rank 7 in SSLC, 50+ sports & cultural medals, and academic excellence.",
};

export default function AchievementsPage() {
  return (
    <div>
      <PageHeader
        title="Achievements & Accolades"
        subtitle="A proud record of scholastic triumphs, competitive exam ranks, and sports glory earned by our talented students."
        breadcrumbs={[{ label: "Achievements" }]}
      />

      {/* State Rank Spotlight Banner */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-navy-700">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  State Milestone
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  State Level 7th Rank — 99.04%
                </h2>
                <p className="text-navy-200 text-base sm:text-lg leading-relaxed">
                  In the 2022–23 Karnataka SSLC Examinations,{" "}
                  <strong className="text-white font-semibold">
                    Sahana P Kelaginamane
                  </strong>{" "}
                  scored a breathtaking 99.04%, securing the 7th Rank across the
                  entire state of Karnataka and the 3rd Rank in Uttara Kannada
                  district.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/results"
                    className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors"
                  >
                    View Complete SSLC Merit List
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-navy-800/80 rounded-2xl p-6 border border-navy-700/60 text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="text-4xl font-extrabold text-gold-400">
                  99.04%
                </div>
                <p className="text-white font-bold text-lg mt-1">
                  Sahana P Kelaginamane
                </p>
                <p className="text-xs text-navy-300 mt-1">
                  State Rank 7 &bull; District Rank 3 &bull; SSLC 2022–23
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-10 bg-navy-50/70 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">
                100%
              </div>
              <p className="text-xs sm:text-sm text-navy-600 font-medium mt-1">
                SSLC Pass Percentage
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">
                99.04%
              </div>
              <p className="text-xs sm:text-sm text-navy-600 font-medium mt-1">
                Highest SSLC Score
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">
                50+
              </div>
              <p className="text-xs sm:text-sm text-navy-600 font-medium mt-1">
                Awards, Shields &amp; Medals
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">
                10+
              </div>
              <p className="text-xs sm:text-sm text-navy-600 font-medium mt-1">
                State &amp; District Ranks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Achievements Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Honors &amp; Recognition"
            title="A Legacy of Accolades"
            subtitle="Explore the honors received across academic boards, sports meets, and cluster competitions."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular & Sports Achievements */}
      <section className="py-16 bg-navy-50/50 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded-full">
                Beyond the Classroom
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-3 mb-4">
                Excellence in Sports, Debates &amp; Arts
              </h3>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-6">
                Edenway students actively participate and bag honors in taluk and
                district level athletics, kabaddi, volleyball, science exhibitions,
                Kannada Rajyotsava elocution, and drawing competitions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/sports"
                  className="inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 transition-colors"
                >
                  Explore Sports at Edenway
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 border border-navy-300 text-navy-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-100 transition-colors"
                >
                  View Cultural Events
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <Medal className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Cluster &amp; Taluk Athletic Champions
                  </h4>
                  <p className="text-xs text-navy-600">
                    Regular podium finishes in sprint, long jump, and team sports.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-navy-100 pt-4">
                <Star className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Science Fair Accolades
                  </h4>
                  <p className="text-xs text-navy-600">
                    Innovative student working models recognized at Banavasi educational cluster exhibitions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-navy-100 pt-4">
                <Award className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Kannada Literary &amp; Elocution Honors
                  </h4>
                  <p className="text-xs text-navy-600">
                    Award-winning performances celebrating Banavasi&apos;s rich literary Kadamba heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Be part of our next success story"
        subtitle="Give your child the guidance, encouragement, and mentorship needed to reach their highest potential."
        primaryLabel="Enquire for Admission"
        primaryHref="/admissions"
      />
    </div>
  );
}

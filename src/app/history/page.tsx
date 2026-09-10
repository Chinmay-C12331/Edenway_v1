import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import Timeline from "@/components/shared/Timeline";
import CTASection from "@/components/shared/CTASection";
import { historyTimeline, schoolInfo } from "@/data/school";
import {
  Calendar,
  Sparkles,
  School,
  Trophy,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our History & Legacy",
  description:
    "Discover the history and journey of Edenway High School, Banavasi — from its founding in 2008 by Late Dr. Abdul Rauf Sab to present-day academic excellence.",
};

const historicalHighlights = [
  {
    year: "2008",
    title: "The Vision Takes Root",
    desc: "Late Dr. Abdul Rauf Sab established Edenway English Medium High School with two initial grades and 35 students per class in Banavasi.",
    icon: Sparkles,
  },
  {
    year: "2012",
    title: "Campus Expansion",
    desc: "Constructed permanent classroom blocks, established administrative offices, and introduced dedicated play areas for sports.",
    icon: School,
  },
  {
    year: "2018",
    title: "10 Years of Impact",
    desc: "Celebrated a decade of continuous English medium educational service to the Banavasi and Uttara Kannada community.",
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "State & District Ranks",
    desc: "Sahana P Kelaginamane scored 99.04% in SSLC, securing 7th Rank across Karnataka State and 3rd Rank in Uttara Kannada district.",
    icon: Trophy,
  },
];

export default function HistoryPage() {
  return (
    <div>
      <PageHeader
        title="Our History & Legacy"
        subtitle="Chronicle of 17+ years of dedication, growth, and academic achievements in Banavasi."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "History" },
        ]}
      />

      {/* Narrative Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
            The Edenway Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-4 mb-6 tracking-tight">
            Built on Vision, Sustained by Dedication
          </h2>
          <p className="text-base sm:text-lg text-navy-700 leading-relaxed text-left sm:text-justify mb-6">
            In 2008, the historical town of Banavasi—famed as the ancient capital of the
            Kadamba dynasty and celebrated by the poet Pampa—witnessed the birth of a modern
            educational landmark. The visionary <strong>Late Dr. Abdul Rauf Sab</strong>, through
            the <em>{schoolInfo.organisation}</em>, recognized that local students deserved
            world-class English medium instruction without having to relocate to distant urban
            centers.
          </p>
          <p className="text-sm sm:text-base text-navy-600 leading-relaxed text-left sm:text-justify">
            Starting with just two classrooms carved out of a single community hall, the school
            nurtured its first cohorts with individual attention and rigorous fundamentals.
            Today, that small seed has grown into a campus with over 20 well-equipped classrooms,
            two spacious playgrounds, a 20+ member teaching staff, and an unbroken record of
            outstanding SSLC examination performances.
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-12 bg-navy-50/60 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.year}
                  className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-navy-800">
                      {item.year}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-gold-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Year-by-Year"
            title="Milestones Along the Way"
            subtitle="Explore how Edenway evolved from humble origins to a premier learning hub."
            align="center"
          />

          <div className="mt-14">
            <Timeline milestones={historyTimeline} />
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-navy-800/80 px-3 py-1 rounded-full">
            Looking Ahead
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Honoring the Past, Innovating for Tomorrow
          </h2>
          <p className="text-navy-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            As we move forward, Edenway continues to invest in modern digital teaching aids,
            strengthened science laboratories, enhanced sports coaching, and comprehensive
            student counselling—keeping Late Dr. Abdul Rauf Sab&apos;s vision vibrantly alive.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-semibold px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Academic Programmes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 border border-navy-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-800 transition-colors"
            >
              View Our Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Be Part of Edenway's Next Chapter"
        subtitle="Admissions are open for the upcoming academic session for classes LKG to 10th Standard."
        primaryLabel="Enquire for Admission"
        primaryHref="/admissions"
      />
    </div>
  );
}

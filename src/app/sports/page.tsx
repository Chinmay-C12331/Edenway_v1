import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import {
  Trophy,
  Medal,
  Award,
  Trees,
  CheckCircle2,
  HeartPulse,
  Users,
  Flame,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sports & Physical Education",
  description:
    "Sports facilities, athletics, physical education programmes, and achievements at Edenway High School, Banavasi — two full playgrounds, PE coaching, and cluster meets.",
};

const sportsDisciplines = [
  {
    title: "Athletics & Track Events",
    desc: "100m, 200m, 400m sprints, 4x100m relay, long jump, shot put, and high jump.",
  },
  {
    title: "Kabaddi & Kho-Kho",
    desc: "Traditional indigenous games fostering agility, strategic coordination, and team resilience.",
  },
  {
    title: "Volleyball & Throwball",
    desc: "Team ball sports with dedicated court practice for upper primary and high school students.",
  },
  {
    title: "Yoga & Daily Fitness",
    desc: "Structured morning calisthenics, surya namaskars, and pranayama during daily assemblies.",
  },
];

export default function SportsPage() {
  return (
    <div>
      <PageHeader
        title="Sports & Physical Education"
        subtitle="Building strong bodies, disciplined minds, and an enduring spirit of sportsmanship."
        breadcrumbs={[{ label: "Sports" }]}
      />

      {/* Philosophy & PE Leadership */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Athletic Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Physical Education as a Core Pillar of Growth
              </h2>
              <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
                At Edenway High School, physical fitness is not treated as an optional
                afterthought. We believe that true education nurtures the physical self
                in tandem with the intellectual self.
              </p>
              <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                Under the guidance of our dedicated Physical Education Teacher,{" "}
                <strong className="text-navy-900 font-semibold">Mr. Hemanth</strong>,
                every student participates in regular physical education periods,
                aerobic exercises, yoga sessions, and inter-house competitive tournaments.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/campus"
                  className="inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 transition-colors"
                >
                  Explore Playgrounds
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/achievements"
                  className="inline-flex items-center gap-2 border border-navy-200 text-navy-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-50 transition-colors"
                >
                  View Sports Honors
                </Link>
              </div>
            </div>

            {/* Coach & Facilities Highlight Card */}
            <div className="lg:col-span-5 bg-navy-50/70 rounded-3xl p-8 border border-navy-100">
              <div className="w-12 h-12 rounded-2xl bg-navy-800 text-gold-400 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                Dedicated Sports Coaching
              </h3>
              <p className="text-sm text-navy-600 mb-6 leading-relaxed">
                Supervised by professional PE faculty, students receive disciplined
                training in track techniques, team dynamics, and fair play.
              </p>

              <div className="space-y-3 border-t border-navy-200/60 pt-4">
                <div className="flex items-center gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Two well-conditioned, spacious open playgrounds</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Annual School Level Sports Day meet</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy-800">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Cluster and Taluk representation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-16 bg-navy-50/50 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Activities &amp; Disciplines"
            title="Sports Offered at Edenway"
            subtitle="Diverse sporting opportunities for students from primary to high school."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsDisciplines.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Sports Events */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Annual Tournaments"
            title="Competitions &amp; Championships"
            subtitle="Where talent meets hard work on the field."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Annual School Sports Day
              </h3>
              <p className="text-navy-200 text-sm leading-relaxed mb-6">
                The flagship athletic spectacle of the year featuring ceremonial march-pasts,
                torch lighting, inter-house track and field showdowns, and awards
                ceremony in the presence of parents and dignitaries.
              </p>
              <span className="text-xs font-semibold text-gold-300 bg-navy-700/80 px-3 py-1 rounded-full">
                Held Annually &bull; All Grades Participating
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy-200 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mb-4">
                <Medal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Cluster &amp; Taluk Meets
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Edenway athletes proudly represent the school in the Banavasi
                cluster and Sirsi taluk level inter-school athletic meets, consistently
                securing positions on the podium and qualifying for district rounds.
              </p>
              <span className="text-xs font-semibold text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Inter-School &bull; Cluster &amp; Taluk Level
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Give Your Child a Balanced Education"
        subtitle="Admissions are open for classes LKG to 10th Standard at Edenway High School, Banavasi."
        primaryLabel="Apply for Admission"
        primaryHref="/admissions"
      />
    </div>
  );
}

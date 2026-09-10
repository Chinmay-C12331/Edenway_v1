import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import FacultyCard from "@/components/shared/FacultyCard";
import CTASection from "@/components/shared/CTASection";
import { schoolInfo } from "@/data/school";
import { facultyMembers } from "@/data/faculty";
import {
  Compass,
  Eye,
  Heart,
  Award,
  BookOpen,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Edenway English Medium High School, Banavasi — our history, founding vision by Late Dr. Abdul Rauf Sab, leadership, and educational philosophy.",
};

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Cultivating disciplined study habits, conceptual clarity, and critical thinking from kindergarten to SSLC.",
  },
  {
    icon: Heart,
    title: "Holistic Character",
    description:
      "Instilling timeless values of integrity, empathy, respect, and social responsibility in every child.",
  },
  {
    icon: Users,
    title: "Inclusive Learning",
    description:
      "Ensuring that quality English medium education is accessible to children from all backgrounds in rural Banavasi.",
  },
  {
    icon: ShieldCheck,
    title: "Supportive Environment",
    description:
      "Maintaining a secure, positive, and nurturing campus with dedicated teachers who care for each student's journey.",
  },
];

export default function AboutPage() {
  const leadership = facultyMembers.filter((m) => m.category === "leadership");

  return (
    <div>
      <PageHeader
        title="About Edenway High School"
        subtitle="A beacon of learning, discipline, and community upliftment in Banavasi since 2008."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Overview & Founder Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Our Genesis &amp; Identity
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Empowering the youth of Banavasi through quality education
              </h2>
              <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
                Founded in 2008 by the visionary educationist{" "}
                <strong className="text-navy-900 font-semibold">
                  Late Dr. Abdul Rauf Sab
                </strong>{" "}
                under the aegis of the{" "}
                <span className="text-navy-900 font-medium">
                  {schoolInfo.organisation}
                </span>
                , Edenway High School was born out of a profound commitment to
                provide world-class, English-medium education in rural Uttara
                Kannada.
              </p>
              <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                What began in a modest single hall divided into two classrooms with
                35 pupils has blossomed into an accredited co-educational institution
                serving over 450 students from LKG to 10th Standard. Our alumni have
                gone on to excel across pre-university colleges, universities, and
                professional careers.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/history"
                  className="inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-navy-900 transition-colors shadow-sm"
                >
                  Explore Our History
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/campus"
                  className="inline-flex items-center gap-2 border border-navy-200 text-navy-800 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-navy-50 transition-colors"
                >
                  View Campus &amp; Facilities
                </Link>
              </div>
            </div>

            {/* Founder Tribute Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                  Founder Tribute
                </span>
                <h3 className="text-2xl font-bold mt-1 mb-3 text-white">
                  Late Dr. Abdul Rauf Sab
                </h3>
                <p className="text-navy-200 text-sm leading-relaxed mb-6">
                  A pioneer whose vision transcended geographic boundaries. He
                  firmly believed that rural children deserved equal access to
                  quality English medium instruction, scientific temperament, and
                  modern moral leadership.
                </p>
                <div className="border-t border-navy-700/80 pt-4 flex items-center justify-between text-xs text-navy-300">
                  <span>Founder &amp; Visionary</span>
                  <span className="text-gold-300 font-medium">Est. 2008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-navy-50/60 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">
                Our Vision
              </h3>
              <p className="text-navy-600 leading-relaxed">
                To be an inspiring center of foundational learning that transforms
                curious children into knowledgeable, confident, and compassionate
                citizens equipped with moral courage and modern skills to lead
                society forward.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">
                Our Mission
              </h3>
              <p className="text-navy-600 leading-relaxed">
                To deliver comprehensive, affordable, and high-standard English
                medium education through innovative pedagogical practices,
                continuous teacher development, robust physical education, and
                character-building cultural engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Guiding Principles"
            title="Values That Define Edenway"
            subtitle="The core ethos embedded in everyday classroom instruction, assemblies, and co-curricular pursuits."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-navy-50/50 rounded-xl p-6 border border-navy-100 hover:border-gold-300 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-navy-50/40 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Governance &amp; Leadership"
            title="Guiding Our School Forward"
            subtitle="Our experienced management and academic leaders working tirelessly for student success."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-gold-600 transition-colors"
            >
              Meet our entire team of 25+ faculty and staff members
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience Edenway High School"
        subtitle="Give your child the foundation for lifelong success, knowledge, and character."
        primaryLabel="Apply for Admission"
        primaryHref="/admissions"
        secondaryLabel="Contact Administration"
        secondaryHref="/contact"
      />
    </div>
  );
}

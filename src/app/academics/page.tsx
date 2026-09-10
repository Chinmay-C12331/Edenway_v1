import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Award,
  Layers,
  Languages,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programmes",
  description:
    "Explore academic programmes at Edenway High School, Banavasi — from LKG to 10th Standard SSLC curriculum, language streams, examination system, and pedagogical methodology.",
};

const stages = [
  {
    badge: "Early Childhood",
    title: "Kindergarten (LKG & UKG)",
    grades: "Ages 3.5 – 5.5 Years",
    description:
      "A joyful, interactive learning environment focused on phonics, sensory exploration, pre-writing, numeracy, and social-emotional development.",
    features: [
      "Activity-based phonetics and storytelling",
      "Early numeracy and shape recognition",
      "Fine motor skills and artistic expression",
      "Safe, colorful, and engaging play area",
    ],
  },
  {
    badge: "Foundational & Preparatory",
    title: "Primary School (Grades 1 – 5)",
    grades: "Classes 1st to 5th",
    description:
      "Building core competency in English communication, mathematical reasoning, environmental awareness, and regional languages.",
    features: [
      "Structured English medium reading and writing",
      "Kannada and Hindi language learning",
      "Experiential Environmental Studies (EVS)",
      "Continuous assessment and reading clubs",
    ],
  },
  {
    badge: "Middle Years",
    title: "Middle School (Grades 6 – 8)",
    grades: "Classes 6th to 8th",
    description:
      "Transitioning from basic concepts to analytical problem solving in mathematics, physical sciences, biological sciences, and social histories.",
    features: [
      "Specialized science topics and practical demonstrations",
      "Advanced arithmetic, algebra, and geometry",
      "Social science with Karnataka & Indian history",
      "Introduction to computer fundamentals",
    ],
  },
  {
    badge: "Board Exam Excellence",
    title: "High School & SSLC (Grades 9 – 10)",
    grades: "Classes 9th & 10th",
    description:
      "Rigorous preparation aligned with Karnataka Secondary Education Board (KSEEB) SSLC standards with intensive mentoring, revision, and test series.",
    features: [
      "Comprehensive syllabus coverage and revision cycles",
      "Multiple preliminary and preparatory board mock tests",
      "Individual performance feedback and doubt clinics",
      "Proven state & district topper track record (99.04% top score)",
    ],
  },
];

const languageStreams = [
  {
    code: "Medium",
    name: "English Medium",
    details: "All core subjects (Mathematics, Science, Social Science) are instructed in English.",
  },
  {
    code: "First Language",
    name: "Kannada / English",
    details: "Strong foundational emphasis on Karnataka's state language and literature.",
  },
  {
    code: "Second / Third",
    name: "Hindi & Kannada",
    details: "National language fluency alongside state language mastery for balanced multilingual development.",
  },
];

export default function AcademicsPage() {
  return (
    <div>
      <PageHeader
        title="Academic Programmes"
        subtitle="A comprehensive English-medium curriculum designed to ignite curiosity and foster academic mastery from LKG through SSLC."
        breadcrumbs={[{ label: "Academics" }]}
      />

      {/* Curriculum Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
              Educational Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 tracking-tight">
              Rigour, Care &amp; Individual Attention
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy-600 leading-relaxed">
              At Edenway, academic excellence is achieved through a structured balance
              of conceptual understanding, daily classroom discipline, regular testing,
              and empathetic mentorship from experienced educators.
            </p>
          </div>

          {/* Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-navy-800 bg-navy-50 px-3 py-1 rounded-full">
                      {stage.badge}
                    </span>
                    <span className="text-xs font-medium text-navy-500">
                      {stage.grades}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                  <ul className="space-y-2.5">
                    {stage.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-navy-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Policy & Evaluation */}
      <section className="py-16 bg-navy-50/60 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-600">
                    Language Medium
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900">
                    Multilingual Proficiency
                  </h3>
                </div>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                Students graduate from Edenway with high-caliber English fluency
                vital for higher education, while remaining deeply rooted in
                Kannada culture, literature, and Hindi national competency.
              </p>
              <div className="space-y-4">
                {languageStreams.map((item) => (
                  <div
                    key={item.code}
                    className="bg-white rounded-xl p-5 border border-navy-100 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-navy-900">{item.name}</h4>
                      <span className="text-xs font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded">
                        {item.code}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-navy-600">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Framework */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-600">
                    Evaluation Framework
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900">
                    Continuous Comprehensive Evaluation
                  </h3>
                </div>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                We believe evaluation should diagnose learning gaps early rather
                than cause end-of-year anxiety. Our multi-tiered assessment model
                keeps parents and teachers closely aligned.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm space-y-4">
                <div className="border-b border-navy-100 pb-3">
                  <h4 className="font-bold text-navy-900 text-sm">
                    Formative Assessments (FA 1 to 4)
                  </h4>
                  <p className="text-xs text-navy-600 mt-1">
                    Projects, oral presentations, assignments, class tests, and practical notebook assessments throughout the term.
                  </p>
                </div>
                <div className="border-b border-navy-100 pb-3">
                  <h4 className="font-bold text-navy-900 text-sm">
                    Summative Assessments (SA 1 &amp; SA 2)
                  </h4>
                  <p className="text-xs text-navy-600 mt-1">
                    Term-end examinations assessing cumulative conceptual understanding and problem-solving abilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Pre-Board Intensive Mock Series (10th Standard)
                  </h4>
                  <p className="text-xs text-navy-600 mt-1">
                    Three full-scale mock SSLC examinations replicating the Karnataka State Board pattern with rigorous paper evaluation and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                SSLC Track Record
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                100% Pass Results &amp; State Level Rank 7
              </h3>
              <p className="text-navy-200 text-sm sm:text-base max-w-xl">
                See detailed marks, student rankings, and performance trends of our SSLC batches.
              </p>
            </div>
            <Link
              href="/results"
              className="shrink-0 inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors shadow-sm"
            >
              View SSLC Results
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Enroll Your Child?"
        subtitle="Admissions open for LKG through 10th Standard. Download the brochure or submit an online enquiry."
        primaryLabel="Submit Admission Enquiry"
        primaryHref="/admissions"
        secondaryLabel="Contact School Office"
        secondaryHref="/contact"
      />
    </div>
  );
}

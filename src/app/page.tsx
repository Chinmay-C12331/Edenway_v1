"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MapPin,
  GraduationCap,
  Mail,
  ChevronRight,
} from "lucide-react";
import { schoolInfo, stats, historyTimeline, whyEdenwayFeatures } from "@/data/school";
import { academicYears, achievements } from "@/data/achievements";
import { events } from "@/data/events";
import { notices } from "@/data/notices";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import FeatureCard from "@/components/shared/FeatureCard";
import EventCard from "@/components/shared/EventCard";
import NoticeCard from "@/components/shared/NoticeCard";
import AchievementCard from "@/components/shared/AchievementCard";
import CTASection from "@/components/shared/CTASection";

function HeroSection() {
  return (
    <section className="relative bg-navy-800 text-white pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* School Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-700/60 rounded-full mb-6 border border-navy-600/40">
            <GraduationCap className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-navy-200 font-medium">
              Established {schoolInfo.foundedYear} · {schoolInfo.city},{" "}
              {schoolInfo.district}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
            {schoolInfo.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-navy-200 leading-relaxed max-w-2xl mb-8">
            {schoolInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-900 px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-gold-400 active:bg-gold-600 transition-colors shadow-lg"
            >
              Admission Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-navy-500 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-navy-700 transition-colors"
            >
              Explore Edenway
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-navy-300">
            <a
              href={`tel:${schoolInfo.phone}`}
              className="flex items-center gap-2 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call School
            </a>
            <a
              href={`https://maps.google.com/?q=Edenway+High+School+Banavasi`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-300 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href={`mailto:${schoolInfo.email}`}
              className="flex items-center gap-2 hover:text-gold-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-12 lg:py-16 bg-warm-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              shouldAnimate={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEdenwaySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Why Edenway"
          title="A Foundation for Every Future"
          subtitle="Edenway offers a holistic learning environment where academics, values, sports, and community come together to shape well-rounded individuals."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyEdenwayFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SchoolIntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <SectionHeading
              label="Our Story"
              title="More Than a School"
              align="left"
            />
            <p className="text-warm-500 leading-relaxed mb-4">
              {schoolInfo.description}
            </p>
            <p className="text-warm-500 leading-relaxed mb-6">
              What began as a single hall divided into two rooms with just 35
              students per class has grown into a vibrant institution with over
              20 well-equipped classrooms, two playgrounds, and a community of
              450+ students guided by nearly 20 dedicated teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/history"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-600 transition-colors"
              >
                Read Our Full History
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
              >
                Learn About Edenway
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-navy-50 rounded-2xl aspect-[4/3] flex items-center justify-center border border-warm-200">
            <div className="text-center p-8">
              <GraduationCap className="w-16 h-16 text-navy-300 mx-auto mb-4" />
              <p className="text-sm text-navy-400 font-medium">
                School Photograph
              </p>
              <p className="text-xs text-navy-300 mt-1">
                Replace with actual school image
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HistoryPreviewSection() {
  const topMilestones = historyTimeline.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Our Journey"
          title="From Humble Beginnings to a Growing Community"
          subtitle="A timeline of Edenway's growth from a small school with two classrooms to a thriving educational institution."
        />

        {/* Mini Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {topMilestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="relative p-6 rounded-xl bg-warm-50 border border-warm-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-navy-800 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm font-bold text-navy-600">
                  {milestone.year}
                </span>
              </div>
              <h3 className="text-base font-semibold text-navy-800 mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-warm-500 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/history"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 border border-warm-300 px-6 py-2.5 rounded-lg hover:bg-warm-100 transition-colors"
          >
            View Full Timeline
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ResultsPreviewSection() {
  const latestYear = academicYears[0];
  if (!latestYear) return null;
  const topStudents = latestYear.results.slice(0, 5);

  return (
    <section className="py-16 lg:py-24 bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Academic Excellence"
          title="SSLC Results That Speak"
          subtitle={`Our ${latestYear.year} batch achieved outstanding results with state and district level ranks.`}
        />

        {/* Top 3 Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {topStudents.slice(0, 3).map((student, index) => (
            <div
              key={student.id}
              className="relative p-6 rounded-xl bg-navy-700/50 border border-navy-600/40 text-center"
            >
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                  ★ Top Scorer
                </div>
              )}
              <p className="text-3xl font-bold text-gold-400 mb-1">
                {student.percentage}%
              </p>
              <p className="text-sm font-medium text-white mb-1">
                {student.studentName}
              </p>
              {student.rank && (
                <p className="text-xs text-navy-300">{student.rank}</p>
              )}
            </div>
          ))}
        </div>

        {/* Additional students */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {topStudents.slice(3).map((student) => (
            <div
              key={student.id}
              className="p-4 rounded-lg bg-navy-700/30 border border-navy-600/30 text-center"
            >
              <p className="text-xl font-bold text-navy-200">
                {student.percentage}%
              </p>
              <p className="text-xs text-navy-400 mt-1">
                {student.studentName}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 border border-navy-600 px-6 py-2.5 rounded-lg hover:bg-navy-700 transition-colors"
          >
            View All Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AchievementsPreviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Our Pride"
          title="Achievements & Recognition"
          subtitle="Celebrating the accomplishments of our students across academics, sports, and beyond."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {achievements.slice(0, 3).map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 border border-warm-300 px-6 py-2.5 rounded-lg hover:bg-white transition-colors"
          >
            View All Achievements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function EventsPreviewSection() {
  const previewEvents = events.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="School Life"
          title="Events & Celebrations"
          subtitle="From sports days to cultural programmes, Edenway's calendar is filled with experiences that shape well-rounded students."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 border border-warm-300 px-6 py-2.5 rounded-lg hover:bg-warm-100 transition-colors"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NoticesPreviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Notice Board"
            title="Latest Announcements"
            subtitle="Stay updated with the latest news and announcements from the school."
          />
          <div className="space-y-4 mb-10">
            {notices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 border border-warm-300 px-6 py-2.5 rounded-lg hover:bg-white transition-colors"
            >
              View All Notices
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPreviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <SectionHeading
              label="Get in Touch"
              title="Visit or Contact Us"
              align="left"
            />
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">Address</p>
                  <p className="text-sm text-warm-500">
                    {schoolInfo.address}, {schoolInfo.pincode}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-navy-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">Phone</p>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="text-sm text-green-600 hover:text-green-500 transition-colors"
                  >
                    {schoolInfo.phone.replace("+91", "+91 ")}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-navy-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">Email</p>
                  <a
                    href={`mailto:${schoolInfo.email}`}
                    className="text-sm text-green-600 hover:text-green-500 transition-colors"
                  >
                    {schoolInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call School
              </a>
              <a
                href={`https://maps.google.com/?q=Edenway+High+School+Banavasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-warm-300 text-navy-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-warm-100 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-warm-100 rounded-2xl aspect-[4/3] lg:aspect-auto flex items-center justify-center border border-warm-200 overflow-hidden">
            <iframe
              title="Edenway High School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.11!2d75.0134!3d14.5309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbab0e3a7e8b5fd%3A0x2e8c2f7d6c4e2a1b!2sBanavasi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full min-h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyEdenwaySection />
      <SchoolIntroSection />
      <HistoryPreviewSection />
      <ResultsPreviewSection />
      <AchievementsPreviewSection />
      <EventsPreviewSection />
      <NoticesPreviewSection />
      <CTASection
        variant="dark"
        title="Begin Your Child's Journey at Edenway"
        subtitle="Admissions are open for the upcoming academic year. Secure your child's place in a school that values education, character, and community."
        primaryLabel="Admission Enquiry"
        primaryHref="/admissions"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <ContactPreviewSection />
    </>
  );
}

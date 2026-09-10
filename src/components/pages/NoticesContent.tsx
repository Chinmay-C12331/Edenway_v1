"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import NoticeCard from "@/components/shared/NoticeCard";
import CTASection from "@/components/shared/CTASection";
import { notices } from "@/data/notices";
import { Info, ArrowRight } from "lucide-react";

const categories = [
  { label: "All Notices", value: "all" },
  { label: "Announcements", value: "announcement" },
  { label: "Examinations", value: "exam" },
  { label: "Parent Meetings", value: "meeting" },
];

export default function NoticesContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNotices =
    activeFilter === "all"
      ? notices
      : notices.filter((n) => n.category === activeFilter);

  return (
    <div>
      <PageHeader
        title="Notice Board & Circulars"
        subtitle="Stay updated with key announcements, examination schedules, parent meetings, and official school circulars."
        breadcrumbs={[{ label: "Notices" }]}
      />

      {/* Notices Board */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-navy-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Live Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
                Official School Notices
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActiveFilter(c.value)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeFilter === c.value
                      ? "bg-navy-800 text-white shadow-sm"
                      : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* CMS Demonstration Banner */}
          <div className="mt-8 bg-gold-50/70 border border-gold-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-navy-800">
              <span className="font-semibold">Notice Board Architecture:</span> This
              notice board is architected for seamless live integration with a backend
              CMS or administrative dashboard, allowing school staff to publish instantaneous
              circulars, holiday announcements, and emergency notices.
            </div>
          </div>

          {/* Notices List */}
          <div className="mt-8 space-y-4">
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>

          {/* Quick Enquiries Box */}
          <div className="mt-12 p-6 rounded-2xl bg-navy-50/70 border border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-navy-900 text-base">
                Have questions regarding any circular?
              </h4>
              <p className="text-xs sm:text-sm text-navy-600 mt-1">
                Contact our administrative office directly during school hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-navy-900 transition-colors"
            >
              Contact Office
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Looking for Admissions Information?"
        subtitle="Check out complete guidelines, age eligibility criteria, and submit your enquiry online."
        primaryLabel="Go to Admissions"
        primaryHref="/admissions"
      />
    </div>
  );
}

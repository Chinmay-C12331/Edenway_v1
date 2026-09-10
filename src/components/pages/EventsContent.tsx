"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import EventCard from "@/components/shared/EventCard";
import CTASection from "@/components/shared/CTASection";
import { events } from "@/data/events";
import { Sparkles } from "lucide-react";

const categories = [
  { label: "All Events", value: "all" },
  { label: "Celebrations", value: "celebration" },
  { label: "Cultural", value: "cultural" },
  { label: "Academic", value: "academic" },
  { label: "Sports", value: "sports" },
  { label: "Community", value: "community" },
];

export default function EventsContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <div>
      <PageHeader
        title="Events & Celebrations"
        subtitle="A vibrant, joyful school life filled with cultural pride, student democracy, national festivals, and creative camps."
        breadcrumbs={[{ label: "Events" }]}
      />

      {/* Intro & Filter Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-navy-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Life at Edenway
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
                Annual School Calendar
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat.value
                      ? "bg-navy-800 text-white shadow-sm"
                      : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Value of Events */}
      <section className="py-16 bg-navy-50/60 border-t border-navy-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            Nurturing Well-Rounded Individuals
          </h3>
          <p className="text-navy-600 text-base leading-relaxed">
            School events at Edenway are not mere entertainment—they are essential
            pedagogical pillars. From Student Election Day fostering civic awareness
            to Kannada Rajyotsava honoring Karnataka heritage, every celebration
            builds character, teamwork, and public confidence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience School Life at Edenway"
        subtitle="Admissions open for the upcoming academic year. Join our active learning family."
        primaryLabel="Apply for Admission"
        primaryHref="/admissions"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}

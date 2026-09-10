import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { facilities } from "@/data/facilities";
import {
  School,
  Trees,
  Building2,
  UtensilsCrossed,
  Droplets,
  Car,
  MapPin,
  ShieldCheck,
  HeartPulse,
  SunMedium,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Campus & Facilities",
  description:
    "Explore the campus and infrastructure of Edenway High School, Banavasi — 20+ classrooms, two playgrounds, clean water well, dedicated lunch area, and safe premises.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  School,
  Trees,
  Building2,
  UtensilsCrossed,
  Droplets,
  Car,
  MapPin,
};

const campusHighlights = [
  {
    title: "Eco-Friendly & Green",
    desc: "Surrounded by lush greenery in Banavasi, offering clean air and a natural, healthy learning atmosphere.",
    icon: Trees,
  },
  {
    title: "Safe & Monitored",
    desc: "Gated entry, vigilant staff supervision, and a child-safe boundary ensuring total peace of mind for parents.",
    icon: ShieldCheck,
  },
  {
    title: "Pure Drinking Water",
    desc: "Abundant freshwater supply from our own deep bore well with reliable sanitisation and filtration.",
    icon: Droplets,
  },
  {
    title: "Dedicated Physical Spaces",
    desc: "Two full-size open playgrounds allowing multiple age groups to play and train simultaneously without congestion.",
    icon: SunMedium,
  },
];

export default function CampusPage() {
  return (
    <div>
      <PageHeader
        title="Campus & Facilities"
        subtitle="Thoughtfully planned infrastructure designed to nurture curiosity, physical wellness, and focused study."
        breadcrumbs={[{ label: "Campus" }]}
      />

      {/* Campus Highlights */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Infrastructure Overview"
            title="A Campus Built for Learning &amp; Well-Being"
            subtitle="Spanning peaceful grounds along Soraba Main Road, Banavasi."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 hover:border-gold-300 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Facilities Grid */}
      <section className="py-16 bg-navy-50/60 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Key Facilities"
            title="Everything Students Need to Thrive"
            subtitle="Every facility is meticulously maintained to provide an optimal learning environment."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac) => {
              const Icon = iconMap[fac.icon] || School;
              return (
                <div
                  key={fac.id}
                  className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      {fac.name}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety, Sanitation & Health */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 text-white">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Student Safety &amp; Health
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Prioritising Safety, Hygiene &amp; Care
              </h2>
              <p className="text-navy-200 text-base sm:text-lg leading-relaxed mb-8">
                We believe that children flourish best when they feel safe and cared for.
                Edenway maintains strict protocols for sanitisation, medical first-aid,
                and emergency preparedness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-navy-700/60 rounded-xl p-5 border border-navy-600/50">
                <CheckCircle className="w-5 h-5 text-gold-400 mb-2" />
                <h4 className="font-bold text-white text-base mb-1">
                  First Aid Facility
                </h4>
                <p className="text-xs text-navy-200">
                  Well-stocked first-aid kits and staff trained to handle minor injuries promptly.
                </p>
              </div>

              <div className="bg-navy-700/60 rounded-xl p-5 border border-navy-600/50">
                <CheckCircle className="w-5 h-5 text-gold-400 mb-2" />
                <h4 className="font-bold text-white text-base mb-1">
                  Separate Restrooms
                </h4>
                <p className="text-xs text-navy-200">
                  Clean, hygienically maintained separate washroom blocks for boys and girls.
                </p>
              </div>

              <div className="bg-navy-700/60 rounded-xl p-5 border border-navy-600/50">
                <CheckCircle className="w-5 h-5 text-gold-400 mb-2" />
                <h4 className="font-bold text-white text-base mb-1">
                  Emergency Road Access
                </h4>
                <p className="text-xs text-navy-200">
                  Direct connectivity to Soraba Main Road ensures smooth transit and rapid medical access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Schedule a School Campus Tour"
        subtitle="We warmly welcome parents to visit our campus, see our classrooms, and meet our teachers."
        primaryLabel="Book Campus Visit"
        primaryHref="/contact"
        secondaryLabel="Apply for Admission"
        secondaryHref="/admissions"
      />
    </div>
  );
}

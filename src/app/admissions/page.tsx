import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import AdmissionForm from "@/components/shared/AdmissionForm";
import { schoolInfo } from "@/data/school";
import {
  CheckCircle2,
  Calendar,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply for admissions at Edenway High School, Banavasi for classes LKG to 10th Standard. Admission guidelines, eligibility criteria, documentation, and online enquiry.",
};

const steps = [
  {
    step: "01",
    title: "Enquiry & Registration",
    description:
      "Submit the online admission form below or visit the school administrative office in person to register interest.",
  },
  {
    step: "02",
    title: "Campus Interaction",
    description:
      "Parents and prospective students are invited to tour our classrooms and interact with teachers and school leadership.",
  },
  {
    step: "03",
    title: "Document Verification",
    description:
      "Submit copies of the child's birth certificate, transfer certificate (if applicable), previous progress reports, and ID proofs.",
  },
  {
    step: "04",
    title: "Admission Confirmation",
    description:
      "Formalize enrollment with admission fee payment, collect uniform & book details, and welcome your child to the Edenway family.",
  },
];

const eligibilityTable = [
  { grade: "LKG", minAge: "3 Years 6 Months", asOf: "By June 1st of admission year" },
  { grade: "UKG", minAge: "4 Years 6 Months", asOf: "By June 1st of admission year" },
  { grade: "1st Standard", minAge: "5 Years 6 Months", asOf: "By June 1st of admission year" },
  { grade: "2nd to 10th", minAge: "Based on previous class passing", asOf: "TC and previous marks card required" },
];

const requiredDocuments = [
  "Original Birth Certificate (for LKG, UKG & Grade 1)",
  "Transfer Certificate (TC) from recognized previous school (for Grades 2 to 10)",
  "Previous year's academic progress report / marks card",
  "Student Aadhaar Card copy",
  "Parent / Guardian Aadhaar Card copy",
  "4 recent passport-size photographs of the student",
  "Caste / Income certificate copy (if seeking category scholarship)",
];

export default function AdmissionsPage() {
  return (
    <div>
      <PageHeader
        title="Admissions 2025–2026"
        subtitle="Step into a world of academic excellence and character development at Edenway High School, Banavasi."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      {/* Process & Steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Admission Procedure"
            title="A Clear, Transparent Enrollment Journey"
            subtitle="Four straightforward steps to secure your child's seat at Edenway."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 hover:border-gold-300 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl font-extrabold text-navy-800">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-navy-50/60 border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Age Criteria */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-gold-600" />
                <h3 className="text-2xl font-bold text-navy-900">
                  Age Eligibility Criteria
                </h3>
              </div>
              <p className="text-sm text-navy-600 mb-6">
                In compliance with Karnataka State Education Department norms,
                the following age thresholds are observed for admission:
              </p>
              <div className="overflow-x-auto rounded-xl border border-navy-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy-800 text-white text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5">Grade</th>
                      <th className="p-3.5">Minimum Age</th>
                      <th className="p-3.5">Condition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {eligibilityTable.map((row) => (
                      <tr key={row.grade} className="hover:bg-navy-50/50">
                        <td className="p-3.5 font-semibold text-navy-900">
                          {row.grade}
                        </td>
                        <td className="p-3.5 text-navy-700">{row.minAge}</td>
                        <td className="p-3.5 text-xs text-navy-500">
                          {row.asOf}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-gold-600" />
                <h3 className="text-2xl font-bold text-navy-900">
                  Documents Checklist
                </h3>
              </div>
              <p className="text-sm text-navy-600 mb-6">
                Please bring original documents for physical verification along
                with self-attested photocopies:
              </p>
              <div className="bg-white rounded-2xl p-6 border border-navy-200 shadow-sm space-y-3">
                {requiredDocuments.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form Section */}
      <section className="py-16 lg:py-24 bg-white" id="enquiry-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Apply Online"
            title="Admission Enquiry Form"
            subtitle="Fill out this quick form and our admissions office will get in touch with complete admission details and fee structures."
            align="center"
          />

          <div className="mt-10">
            <AdmissionForm />
          </div>
        </div>
      </section>

      {/* Help & Contact Bar */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-xl bg-navy-700 text-gold-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-navy-300 uppercase tracking-wider font-semibold">
                  Call Us
                </p>
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="text-base font-bold text-white hover:text-gold-300 transition-colors"
                >
                  {schoolInfo.phone.replace("+91", "+91 ")}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-xl bg-navy-700 text-gold-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-navy-300 uppercase tracking-wider font-semibold">
                  Visiting Hours
                </p>
                <p className="text-sm font-medium text-white">
                  Monday – Saturday: 9:00 AM – 4:30 PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-xl bg-navy-700 text-gold-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-navy-300 uppercase tracking-wider font-semibold">
                  School Campus
                </p>
                <p className="text-sm font-medium text-white">
                  {schoolInfo.address}, {schoolInfo.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

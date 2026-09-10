"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { schoolInfo } from "@/data/school";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Navigation,
} from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Enquiry",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send your message right now. Please call us directly.");
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact & Location"
        subtitle="Get in touch with our administration team, schedule a campus visit, or make admissions queries."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Cards */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">Phone</h3>
              <p className="text-xs text-navy-500 mb-3">Call during office hours</p>
              <a
                href={`tel:${schoolInfo.phone}`}
                className="text-sm sm:text-base font-semibold text-navy-800 hover:text-gold-600 transition-colors"
              >
                {schoolInfo.phone.replace("+91", "+91 ")}
              </a>
            </div>

            {/* Email */}
            <div className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">Email</h3>
              <p className="text-xs text-navy-500 mb-3">Direct administrative desk</p>
              <a
                href={`mailto:${schoolInfo.email}`}
                className="text-xs sm:text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors break-all"
              >
                {schoolInfo.email}
              </a>
            </div>

            {/* Address */}
            <div className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">Address</h3>
              <p className="text-xs text-navy-500 mb-3">Main Campus</p>
              <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-medium">
                {schoolInfo.address}, {schoolInfo.city}, {schoolInfo.district},{" "}
                {schoolInfo.state} - {schoolInfo.pincode}
              </p>
            </div>

            {/* Timings */}
            <div className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">Office Hours</h3>
              <p className="text-xs text-navy-500 mb-3">Visiting timings</p>
              <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-medium">
                Mon – Sat: 9:00 AM – 4:30 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-12 lg:py-20 bg-navy-50/60 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Interactive Contact Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-navy-100 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-3 py-1 rounded-full">
                Drop Us a Message
              </span>
              <h3 className="text-2xl font-bold text-navy-900 mt-3 mb-2">
                Send an Enquiry
              </h3>
              <p className="text-sm text-navy-600 mb-6 leading-relaxed">
                Whether you have questions regarding admissions, academics, or general
                enquiries, our administration team will respond promptly.
              </p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                  <h4 className="text-lg font-bold text-green-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-green-700">
                    Thank you for reaching out to Edenway High School. Our school office
                    will contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-semibold text-green-800 underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patil"
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 bg-white"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Admission Query">Admission Query</option>
                      <option value="Campus Visit Request">Campus Visit Request</option>
                      <option value="Alumni Connection">Alumni Connection</option>
                      <option value="Career / Job Opening">Career / Job Opening</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message or query here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-navy-800 text-white py-3 rounded-xl text-sm font-semibold hover:bg-navy-900 transition-colors disabled:opacity-50 shadow-sm"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Directions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="bg-white rounded-3xl p-4 border border-navy-100 shadow-sm overflow-hidden flex-1 min-h-[350px]">
                <div className="flex items-center gap-2 px-3 py-2 mb-2">
                  <Navigation className="w-4 h-4 text-gold-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
                    Location Map &bull; Banavasi, Karnataka
                  </span>
                </div>
                <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-navy-100">
                  <iframe
                    title="Edenway High School Location"
                    src={schoolInfo.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Transit & Commute Info */}
              <div className="bg-white rounded-3xl p-6 border border-navy-100 shadow-sm">
                <h4 className="font-bold text-navy-900 text-base mb-2">
                  How to Reach Edenway High School
                </h4>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Located directly on Soraba Main Road in Banavasi town, the school is
                  conveniently accessible by regular KSRTC and private bus routes
                  connecting Sirsi, Soraba, Siddapur, and surrounding rural areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

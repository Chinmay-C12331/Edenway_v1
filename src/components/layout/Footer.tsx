import Link from "next/link";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { schoolInfo } from "@/data/school";
import { footerNavItems } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center group-hover:bg-navy-600 transition-colors">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight">
                  Edenway
                </p>
                <p className="text-xs text-navy-300 leading-tight">
                  High School, Banavasi
                </p>
              </div>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              A co-educational English medium school nurturing young minds since
              2008 in the historic town of Banavasi, Uttara Kannada.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="flex items-center gap-2.5 text-navy-300 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{schoolInfo.phone.replace("+91", "+91 ")}</span>
              </a>
              <a
                href={`mailto:${schoolInfo.email}`}
                className="flex items-center gap-2.5 text-navy-300 hover:text-gold-300 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{schoolInfo.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-navy-300">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {schoolInfo.address}, {schoolInfo.pincode}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-gold-300 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-gold-300 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 mb-6">
              {footerNavItems.connect.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-gold-300 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors"
            >
              Admission Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy-400">
          <p>
            &copy; {currentYear} {schoolInfo.name}, {schoolInfo.city}. All
            rights reserved.
          </p>
          <p>
            Created with care by{" "}
            <span className="text-white font-medium">Chinmay Choudhari</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

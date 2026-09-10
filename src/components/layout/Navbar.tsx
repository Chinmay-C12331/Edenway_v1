"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { schoolInfo } from "@/data/school";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    if (isMobileOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card-hover border-b border-warm-200"
            : "bg-white shadow-card"
        )}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-navy-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-sm">
            <p className="text-navy-200">
              {schoolInfo.fullName}, {schoolInfo.city} — {schoolInfo.pincode}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{schoolInfo.phone.replace("+91", "+91 ")}</span>
              </a>
              <a
                href={`mailto:${schoolInfo.email}`}
                className="hover:text-gold-300 transition-colors"
              >
                {schoolInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="Edenway High School — Home"
            >
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center group-hover:bg-navy-700 transition-colors">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-navy-800 leading-tight">
                  Edenway
                </p>
                <p className="text-xs text-warm-500 leading-tight">
                  High School, Banavasi
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-navy-800 bg-navy-50"
                      : "text-charcoal-light hover:text-navy-800 hover:bg-warm-100"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/admissions"
              className="hidden lg:inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-700 active:bg-navy-900 transition-colors shadow-sm"
            >
              Admission Enquiry
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-navy-800 hover:bg-warm-100 transition-colors"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-elevated lg:hidden",
          "transform transition-transform duration-300 ease-in-out",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-warm-200">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMobileOpen(false)}
          >
            <div className="w-9 h-9 bg-navy-800 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gold-400" />
            </div>
            <span className="font-bold text-navy-800">Edenway</span>
          </Link>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 rounded-lg text-charcoal-light hover:bg-warm-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                pathname === item.href
                  ? "text-navy-800 bg-navy-50"
                  : "text-charcoal-light hover:text-navy-800 hover:bg-warm-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-warm-200 bg-white">
          <Link
            href="/admissions"
            onClick={() => setIsMobileOpen(false)}
            className="block w-full text-center bg-navy-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors"
          >
            Admission Enquiry
          </Link>
          <a
            href={`tel:${schoolInfo.phone}`}
            className="mt-2 flex items-center justify-center gap-2 text-sm text-navy-600 hover:text-navy-800 py-2"
          >
            <Phone className="w-4 h-4" />
            Call School
          </a>
        </div>
      </div>
    </>
  );
}

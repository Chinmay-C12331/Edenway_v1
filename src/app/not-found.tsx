import Link from "next/link";
import { GraduationCap, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-navy-100 text-navy-800 flex items-center justify-center mx-auto">
          <GraduationCap className="w-8 h-8 text-gold-600" />
        </div>
        <div>
          <span className="text-5xl sm:text-6xl font-extrabold text-navy-800">
            404
          </span>
          <h1 className="text-2xl font-bold text-navy-900 mt-2">
            Page Not Found
          </h1>
          <p className="text-sm text-navy-600 mt-2 leading-relaxed">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-navy-200 text-navy-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-50 transition-colors"
          >
            Contact School
          </Link>
        </div>
      </div>
    </div>
  );
}

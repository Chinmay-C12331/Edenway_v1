import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us & Location",
  description:
    "Contact Edenway English Medium High School, Banavasi — phone, email, visiting hours, Soraba Main Road campus location map, and interactive enquiry form.",
};

export default function ContactPage() {
  return <ContactContent />;
}

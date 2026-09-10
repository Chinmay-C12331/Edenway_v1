import type { Metadata } from "next";
import NoticesContent from "@/components/pages/NoticesContent";

export const metadata: Metadata = {
  title: "Notice Board & Announcements",
  description:
    "Official notices, examination timetables, holiday circulars, and parent-teacher meeting announcements from Edenway High School, Banavasi.",
};

export default function NoticesPage() {
  return <NoticesContent />;
}

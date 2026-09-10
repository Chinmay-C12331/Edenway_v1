import type { Metadata } from "next";
import EventsContent from "@/components/pages/EventsContent";

export const metadata: Metadata = {
  title: "School Events & Celebrations",
  description:
    "Explore the vibrant annual calendar of events, cultural festivals, student election day, sports meets, and national celebrations at Edenway High School, Banavasi.",
};

export default function EventsPage() {
  return <EventsContent />;
}

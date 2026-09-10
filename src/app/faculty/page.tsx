import type { Metadata } from "next";
import FacultyContent from "@/components/pages/FacultyContent";

export const metadata: Metadata = {
  title: "Faculty & Staff Directory",
  description:
    "Meet the leadership, teachers, and support staff of Edenway High School, Banavasi — a dedicated team of 25+ educators committed to student achievement.",
};

export default function FacultyPage() {
  return <FacultyContent />;
}

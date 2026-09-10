// ============================================================
// Edenway High School — Type Definitions
// ============================================================

export interface SchoolInfo {
  name: string;
  fullName: string;
  organisation: string;
  founder: string;
  foundedYear: number;
  type: string;
  grades: string;
  address: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  mapUrl: string;
  tagline: string;
  description: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  icon: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "teaching" | "support";
  department?: string;
  photo?: string;
  bio?: string;
  order: number;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date?: string;
  category: "academic" | "sports" | "cultural" | "celebration" | "competition" | "community";
  description: string;
  image?: string;
  isUpcoming: boolean;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: "exam" | "meeting" | "holiday" | "announcement" | "general";
  description: string;
  isDemo?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: "academic" | "sports" | "cultural" | "competition" | "school";
  year?: string;
  icon?: string;
}

export interface SSLCResult {
  id: string;
  studentName: string;
  percentage: number;
  rank?: string;
  rankLevel?: "state" | "district" | "school";
}

export interface AcademicYear {
  id: string;
  year: string;
  results: SSLCResult[];
  passPercentage?: string;
  topScore?: string;
  distinctions?: number;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Batch {
  id: string;
  year: string;
  description?: string;
  photo?: string;
  studentCount?: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FeatureCardData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

import type { SchoolInfo, Stat, TimelineMilestone, FeatureCardData } from "@/types";

export const schoolInfo: SchoolInfo = {
  name: "Edenway High School",
  fullName: "Edenway English Medium High School",
  organisation: "Dr. Abdul Rauf Agri-Research Foundation (R)",
  founder: "Late Dr. Abdul Rauf Sab",
  foundedYear: 2008,
  type: "Co-educational, English Medium",
  grades: "LKG to 10th Standard",
  address: "Soraba Main Road, Banavasi",
  city: "Banavasi",
  district: "Uttara Kannada",
  state: "Karnataka",
  pincode: "581318",
  phone: "+917406097908",
  email: "banavasiedenwayschool@gmail.com",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.5!2d75.0!3d14.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBanavasi!5e0!3m2!1sen!2sin!4v1700000000000",
  tagline: "Where every child gets the opportunity to learn, grow, and lead.",
  description:
    "Edenway High School is a co-educational English medium institution established in 2008 in the historic town of Banavasi, Uttara Kannada. Founded by the visionary Late Dr. Abdul Rauf Sab through the Dr. Abdul Rauf Agri-Research Foundation, the school has grown from a humble beginning with just two grades into a thriving learning community offering classes from LKG to 10th Standard.",
};

export const stats: Stat[] = [
  {
    id: "students",
    label: "Students",
    value: "450+",
    numericValue: 450,
    suffix: "+",
    icon: "Users",
  },
  {
    id: "teachers",
    label: "Dedicated Teachers",
    value: "20+",
    numericValue: 20,
    suffix: "+",
    icon: "GraduationCap",
  },
  {
    id: "classrooms",
    label: "Classrooms",
    value: "20+",
    numericValue: 20,
    suffix: "+",
    icon: "School",
  },
  {
    id: "legacy",
    label: "Years of Legacy",
    value: "17+",
    numericValue: 17,
    suffix: "+",
    icon: "Calendar",
  },
  {
    id: "awards",
    label: "Awards & Medals",
    value: "50+",
    numericValue: 50,
    suffix: "+",
    icon: "Trophy",
  },
  {
    id: "ranks",
    label: "State & District Ranks",
    value: "10+",
    numericValue: 10,
    suffix: "+",
    icon: "Award",
  },
];

export const historyTimeline: TimelineMilestone[] = [
  {
    id: "founding",
    year: "2008",
    title: "The Beginning",
    description:
      "Edenway High School was established by Late Dr. Abdul Rauf Sab through the Agro Research Organisation in Banavasi. The school began with just 2 grades and 35+ students in each class.",
  },
  {
    id: "early-days",
    year: "2008",
    title: "Humble Beginnings",
    description:
      "The school started with a single hall divided into 2 rooms and one playground shared for morning prayers and sports activities.",
  },
  {
    id: "expansion",
    year: "2010–2015",
    title: "Steady Growth",
    description:
      "The school gradually expanded its infrastructure, adding new classrooms and facilities. More grades were introduced as the student body grew steadily.",
  },
  {
    id: "academic-growth",
    year: "2016–2020",
    title: "Academic Excellence",
    description:
      "With dedicated faculty and strong academic programmes, Edenway began producing outstanding SSLC results, earning recognition at the state and district levels.",
  },
  {
    id: "achievements",
    year: "2022–23",
    title: "Record-Breaking Results",
    description:
      "Sahana P Kelaginamane scored 99.04% in SSLC, securing State Level 7th Rank and District Level 3rd Rank — a proud milestone for the school and community.",
  },
  {
    id: "present",
    year: "Present",
    title: "A Thriving Community",
    description:
      "Today, Edenway serves 450+ students across LKG to 10th Standard with nearly 20 teachers, 2 well-conditioned playgrounds, and all essential facilities.",
  },
];

export const whyEdenwayFeatures: FeatureCardData[] = [
  {
    id: "academics",
    icon: "BookOpen",
    title: "Strong Academic Foundation",
    description:
      "A structured curriculum from LKG to 10th Standard with focused SSLC preparation that has produced state and district rank holders.",
  },
  {
    id: "values",
    icon: "Heart",
    title: "Values & Character",
    description:
      "Education at Edenway goes beyond textbooks — we nurture integrity, discipline, and compassion in every student.",
  },
  {
    id: "sports",
    icon: "Medal",
    title: "Sports & Activities",
    description:
      "Two well-conditioned playgrounds and active participation in school, cluster, and taluk-level sports competitions.",
  },
  {
    id: "faculty",
    icon: "Users",
    title: "Experienced Faculty",
    description:
      "A dedicated team of 20+ well-qualified teachers committed to guiding every student towards their potential.",
  },
  {
    id: "community",
    icon: "Building",
    title: "Community & Legacy",
    description:
      "Founded in the historic town of Banavasi, Edenway is rooted in community values and a vision for future-ready education.",
  },
  {
    id: "facilities",
    icon: "Laptop",
    title: "Modern Facilities",
    description:
      "Well-constructed classrooms, dedicated office spaces, parking, lunch areas, and reliable water supply from the school's own well.",
  },
];

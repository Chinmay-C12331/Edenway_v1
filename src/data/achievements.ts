import type { AcademicYear, Achievement } from "@/types";

export const academicYears: AcademicYear[] = [
  {
    id: "2022-23",
    year: "2022–23",
    passPercentage: "100%",
    topScore: "99.04%",
    results: [
      {
        id: "sahana",
        studentName: "Sahana P Kelaginamane",
        percentage: 99.04,
        rank: "State Level 7th Rank, District Level 3rd Rank",
        rankLevel: "state",
      },
      {
        id: "anvitha",
        studentName: "Anvitha V Gowda",
        percentage: 96.8,
        rank: "School Level 2nd Rank",
        rankLevel: "school",
      },
      {
        id: "abdul-rihan",
        studentName: "Abdul Rihan Jawid Mukandar",
        percentage: 92.0,
        rank: "School Level 3rd Rank",
        rankLevel: "school",
      },
      {
        id: "fariha",
        studentName: "Fariha Sadaf",
        percentage: 91.84,
      },
      {
        id: "nireeksha",
        studentName: "Nireeksha R",
        percentage: 91.52,
      },
      {
        id: "madiha",
        studentName: "Madiha Banu",
        percentage: 90.4,
      },
      {
        id: "anu",
        studentName: "Anu G",
        percentage: 88.48,
      },
      {
        id: "adiba",
        studentName: "Adiba Zeeshan",
        percentage: 86.88,
      },
      {
        id: "shivani",
        studentName: "Shivani M.G",
        percentage: 86.08,
      },
      {
        id: "inchara",
        studentName: "Inchara M.B",
        percentage: 86.08,
      },
      {
        id: "meghana-h",
        studentName: "Meghana M.H",
        percentage: 84.0,
      },
      {
        id: "apoorva",
        studentName: "Apoorva V.C",
        percentage: 83.68,
      },
      {
        id: "ranjini",
        studentName: "Ranjini K.N",
        percentage: 83.52,
      },
      {
        id: "sadwini",
        studentName: "Sadwini R.G",
        percentage: 82.4,
      },
      {
        id: "shrishanth",
        studentName: "Shrishanth S.A",
        percentage: 82.4,
      },
      {
        id: "uzma-s",
        studentName: "Uzma A.S",
        percentage: 81.6,
      },
      {
        id: "yaseer",
        studentName: "M.D. Yaseer",
        percentage: 80.0,
      },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "state-rank",
    title: "State Level 7th Rank in SSLC",
    description:
      "Sahana P Kelaginamane secured State Level 7th Rank with 99.04% in the 2022–23 SSLC examinations.",
    category: "academic",
    year: "2022–23",
    icon: "Trophy",
  },
  {
    id: "district-rank",
    title: "District Level 3rd Rank in SSLC",
    description:
      "Sahana P Kelaginamane also earned District Level 3rd Rank in Uttara Kannada district.",
    category: "academic",
    year: "2022–23",
    icon: "Award",
  },
  {
    id: "awards-medals",
    title: "50+ Awards, Shields & Medals",
    description:
      "Students have earned over 50 awards, shields, and medals across various academic, sports, and cultural competitions at school, cluster, and district levels.",
    category: "school",
    icon: "Medal",
  },
  {
    id: "sports-achievements",
    title: "Cluster & Taluk Level Sports",
    description:
      "Active participation and achievements in cluster-level and taluk-level sports competitions, with students representing the school with distinction.",
    category: "sports",
    icon: "Medal",
  },
  {
    id: "state-district-ranks",
    title: "10+ State & District Level Ranks",
    description:
      "Students have earned over 10 ranks at state, district, and school levels across SSLC and other competitive examinations.",
    category: "academic",
    icon: "Star",
  },
];

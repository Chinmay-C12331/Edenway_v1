# Edenway High School, Banavasi — Official Website

> Modern, accessible, and responsive official website for **Edenway English Medium High School**, Banavasi (Uttara Kannada, Karnataka). Established in 2008 by Late Dr. Abdul Rauf Sab under the Dr. Abdul Rauf Agri-Research Foundation (R).

**Created & Developed by:** Chinmay Choudhari

---

## 🌟 Overview

Edenway High School is a co-educational institution providing English medium education from **LKG to 10th Standard (SSLC)**. This repository houses the completely rebuilt, production-ready website engineered for high performance, modern aesthetics, WCAG accessibility, and SEO excellence.

### Key Highlights
- **100% SSLC Pass Record**: Including Karnataka State Level 7th Rank (99.04%) and District Level 3rd Rank by Sahana P Kelaginamane.
- **25+ Faculty & Staff Directory**: Complete verified leadership, teaching, and administrative team.
- **Comprehensive Academic Showcase**: Curriculums for Kindergarten, Primary, Middle School, and High School board exams.
- **Interactive Admissions Portal**: Validated admission enquiry form with instant feedback and clean data models ready for backend integration.
- **13+ Verified School Events & Celebrations**: Filterable calendar of cultural, academic, sports, and national events.
- **Campus & Facilities Tour**: Coverage of 20+ classrooms, two playgrounds, clean bore well water supply, and campus safety.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Typography**: Inter (Google Fonts via `next/font`)
- **Language**: TypeScript

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router routes
│   ├── about/            # About Us & Founder tribute
│   ├── history/          # Chronological timeline & milestones
│   ├── academics/        # Curriculums, language streams & CCE evaluation
│   ├── admissions/       # Eligibility criteria, checklist & enquiry form
│   ├── campus/           # 20+ classrooms, playgrounds, safety & water supply
│   ├── achievements/     # State ranks, trophies, medals & honors
│   ├── results/          # SSLC 100% pass board exam merit table & toppers
│   ├── events/           # Filterable calendar of 13+ verified school events
│   ├── sports/           # PE coaching, playgrounds & athletic championships
│   ├── faculty/          # Filterable directory of all 25 faculty & staff
│   ├── alumni/           # Graduating batches, career paths & network
│   ├── notices/          # Live circulars & announcement board
│   ├── contact/          # Interactive enquiry form, office timings & Google Map
│   ├── not-found.tsx     # Custom 404 page
│   ├── sitemap.ts        # Dynamic SEO sitemap
│   └── robots.ts         # Search crawler directives
├── components/
│   ├── layout/           # Navbar, Footer (with Chinmay Choudhari attribution), PageHeader
│   ├── shared/           # SectionHeading, StatCard, AdmissionForm, FacultyCard, EventCard, etc.
│   └── pages/            # Interactive client views for contact, events, faculty, notices
├── data/                 # Strongly-typed data models for school, faculty, events, achievements
├── hooks/                # useInView intersection observer hook
├── lib/                  # Utility functions (cn / clsx / twMerge)
├── services/             # Admissions schema & submission service
└── types/                # TypeScript interfaces & types
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_URL>
cd edenway_web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
```bash
npm run build
npm run start
```

---

## 👤 Author & Credits

- **Creator & Lead Developer**: Chinmay Choudhari
- **Institution**: Edenway English Medium High School, Banavasi, Uttara Kannada, Karnataka - 581318
- **Organization**: Dr. Abdul Rauf Agri-Research Foundation (R)

---

## 📄 License

All rights reserved &copy; Edenway High School, Banavasi.

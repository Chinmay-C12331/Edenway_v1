import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "Faculty", href: "/faculty" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our History", href: "/history" },
    { label: "Academics", href: "/academics" },
    { label: "Faculty & Staff", href: "/faculty" },
  ],
  explore: [
    { label: "Achievements", href: "/achievements" },
    { label: "SSLC Results", href: "/results" },
    { label: "Events", href: "/events" },
    { label: "Sports", href: "/sports" },
    { label: "Campus & Facilities", href: "/campus" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Admissions", href: "/admissions" },
    { label: "Alumni & Batches", href: "/alumni" },
    { label: "Notices", href: "/notices" },
  ],
};

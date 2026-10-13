export interface NavItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  /** Items without children can link straight to a section of the page. */
  href?: string;
  children: NavItem[];
}

/* Main menu — structure and copy taken from the supplied Navbar. */
export const MAIN_MENU: MenuItem[] = [
  {
    label: "ABOUT US",
    children: [
      { label: "What We Do", href: "#what-we-do" },
      { label: "Council 2025", href: "#" },
      { label: "Executive Committee 2025", href: "#" },
      { label: "Presidents & Honorary Members", href: "#" },
      { label: "Award Recipients", href: "#" },
      { label: "Secretariat 2025", href: "#" },
      { label: "Standing Committees 2025", href: "#" },
      { label: "Practice Areas", href: "#" },
      { label: "Support Schemes", href: "#" },
      { label: "Membership Privileges", href: "#" },
    ],
  },
  { label: "LAWYERS", children: [] },
  { label: "PUBLIC", children: [] },
  { label: "ADMISSIONS", children: [] },
  { label: "MEDIA", href: "#media-press", children: [] },
  { label: "CPD", children: [] },
  { label: "MEMBER LOGIN", children: [] },
  { label: "MEMBERSHIP", children: [] },
  { label: "CAREERS", href: "#careers", children: [] },
  { label: "ADVERTISE", children: [] },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "FAQs", href: "#" },
  { label: "Advertising Rates", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

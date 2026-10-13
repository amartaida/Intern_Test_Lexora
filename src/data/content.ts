export const STATUTORY_CARDS = [
  { id: "closure", no: "01", title: ["Firm Closure", "Dates"], image: "/images/card-calendar.webp", description: "" },
  { id: "probono", no: "02", title: ["Pro Bono", "Services"], image: "/images/card-gavel.webp", description: "Lorem ipsum dolor sit amet Lorem ipsum" },
  { id: "library", no: "03", title: ["Members\u2019", "Library"], image: "/images/card-library.webp", description: "" },
  { id: "directory", no: "04", title: ["Specialists", "Directory"], image: "/images/card-directory.webp", description: "" },
] as const;

export const ROADMAP = [
  {
    year: "2025",
    heading: "A new beginning - Laying the groundwork for our future",
    body: "As we embark on our journey towards Lexora\u2019s 60th anniversary, 2025 marks the beginning of our refreshed digital presence. This year, we\u2019re reimagining how we connect with members \u2014 through new digital tools, enhanced services, and stories from the legal community.",
  },
  {
    // Placeholder copy — the mockup only designs the 2025 state.
    year: "2026",
    heading: "Growing together - Building on our foundations",
    body: "Placeholder copy: 2026 is about deepening member engagement, expanding pro bono reach and strengthening the services that matter most to the legal community.",
  },
  {
    // Placeholder copy — the mockup only designs the 2025 state.
    year: "2027",
    heading: "A milestone year - Celebrating 60 years of Lexora",
    body: "Placeholder copy: 2027 marks our 60th anniversary \u2014 a moment to honour the people and the legacy behind us and to look ahead to the future of the profession.",
  },
] as const;

export const LEGAL_SUPPORT = [
  { audience: "Lawyer", title: "Feedback on Law Reforms" },
  { audience: "Public", title: "Alternative Dispute Resolution Schemes" },
  { audience: "Lawyer", title: "Members\u2019 Support Schemes" },
  { audience: "Lawyer", title: "Future Lawyering Research Portal" },
] as const;

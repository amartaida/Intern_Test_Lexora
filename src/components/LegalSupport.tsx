const items = [
  { tag: "Lawyer", label: "Feedback on Law Reforms", active: false },
  { tag: "Public", label: "Alternative Dispute Resolution Schemes", active: true },
  { tag: "Lawyer", label: "Members' Support Schemes", active: false },
  { tag: "Lawyer", label: "Future Lawyering Research Portal", active: false },
];

export default function LegalSupport() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left label */}
          <div>
            <p className="text-[#8B1A1A] font-semibold tracking-wider uppercase text-sm mb-2">
              LEGAL SUPPORT
            </p>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight uppercase mb-8">
              Guiding You Through Every Steps
            </h2>

            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`flex items-center gap-0 group ${
                      item.active
                        ? "bg-[#C9A227] text-gray-900"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <span
                      className={`shrink-0 w-20 sm:w-24 text-center text-xs font-bold py-3.5 ${
                        item.active
                          ? "bg-[#B8922A] text-gray-900"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="flex-1 px-4 py-3.5 text-sm font-medium">
                      {item.label}
                    </span>
                    {item.active && (
                      <span className="pr-4">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-xs font-bold tracking-wider uppercase text-[#C9A227] hover:text-[#8B1A1A] transition-colors"
            >
              EXPLORE MORE SUPPORT
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

const items = [
  { tag: "Lawyer", label: "Feedback on Law Reforms" },
  { tag: "Public", label: "Alternative Dispute Resolution Schemes" },
  { tag: "Lawyer", label: "Members' Support Schemes" },
  { tag: "Lawyer", label: "Future Lawyering Research Portal" },
];

export default function LegalSupport() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-[#AA0433] font-semibold tracking-wider uppercase text-sm mb-2 font-body">
              LEGAL SUPPORT
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-8">
              Guiding You Through Every Steps
            </h2>

            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center gap-0 group bg-gray-100 text-gray-700 hover:bg-[#927642] hover:text-white transition-colors duration-300"
                  >
                    <span className="shrink-0 w-20 sm:w-24 text-center text-xs font-bold py-3.5 bg-gray-800 text-white group-hover:bg-[#7A6235] transition-colors font-body">
                      {item.tag}
                    </span>
                    <span className="flex-1 px-4 py-3.5 text-sm font-medium font-body flex items-center justify-between">
                      {item.label}
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-xs font-bold tracking-wider uppercase text-[#927642] hover:text-[#AA0433] transition-colors font-body"
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

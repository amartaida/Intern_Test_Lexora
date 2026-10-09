export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2A2A2A] text-gray-400">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-12">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#8B1A1A] flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold tracking-wider text-white uppercase">LEXORA</span>
              <span className="block text-[9px] text-gray-500 tracking-wide">OF SINGAPORE</span>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
          {["FAQs", "Advertising Rates", "Terms of Use", "Privacy Policy"].map((label) => (
            <a key={label} href="#" className="text-xs tracking-wider uppercase hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
          <p>&copy; Copyright 2025 The Lexora of Singapore. All rights reserved</p>
          <p>Latest update 26 June 2025</p>
        </div>
      </div>
    </footer>
  );
}

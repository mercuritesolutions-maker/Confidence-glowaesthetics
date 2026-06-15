import { Instagram, Facebook, Sparkles, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#FAF7F2] pt-20 pb-8 text-gray-700 border-t border-[#6B7152]/10" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand column */}
            <div className="space-y-4">
              <a href="#home" className="flex items-center space-x-2 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A7C7C]/10 text-[#4A7C7C] border border-[#4A7C7C]/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif text-xl font-medium tracking-wide text-gray-900 group-hover:text-[#4A7C7C] transition-colors">
                    Confidence &amp; Glow
                  </span>
                  <span className="text-[10px] tracking-widest block text-[#6B7152] uppercase font-sans -mt-1 font-semibold">
                    Aesthetics Clinic
                  </span>
                </div>
              </a>
              <p className="text-xs text-gray-500 leading-relaxed font-sans mt-3">
                NHS-trained clinical skin and facial aesthetics treatments in Morley, Leeds. Experience medical grade sterile standards combined with a comforting, bespoke boutique spa environment.
              </p>
              
              {/* Social icons */}
              <div className="flex space-x-3 pt-3">
                <a
                  href="https://www.instagram.com/confidenceandglow_aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center text-gray-600 hover:bg-[#D4A5A5] hover:text-[#FAF6EE] hover:border-[#D4A5A5] transition-all"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/confidenceandglowaesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center text-gray-600 hover:bg-[#D4A5A5] hover:text-[#FAF6EE] hover:border-[#D4A5A5] transition-all"
                  aria-label="Facebook Link"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-serif text-base font-bold text-gray-900 mb-6 uppercase tracking-wider text-[#6B7152]">
                Our Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#4A7C7C] transition-colors font-medium">Home</a>
                </li>
                <li>
                  <a href="#treatments" className="hover:text-[#4A7C7C] transition-colors font-medium">Treatments Menu</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#4A7C7C] transition-colors font-medium">About NHS Bio</a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-[#4A7C7C] transition-colors font-medium">Patient Reviews</a>
                </li>
                <li>
                  <a href="#location" className="hover:text-[#4A7C7C] transition-colors font-medium">Location Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Details Column */}
            <div>
              <h4 className="font-serif text-base font-bold text-gray-900 mb-6 uppercase tracking-wider text-[#6B7152]">
                Contact Us
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed font-sans mb-4">
                BBstylehouse, Queen St, <br />
                Morley, Leeds, West Yorkshire <br />
                United Kingdom, LS27 8DX
              </p>
              <div className="space-y-2 mt-2">
                <p className="text-xs">
                  <span className="block text-gray-400 font-medium">Direct Line:</span>
                  <a href="tel:+447404106477" className="text-sm font-semibold text-[#4A7C7C] hover:underline">
                    +44 (0) 7404 106477
                  </a>
                </p>
                <p className="text-xs">
                  <span className="block text-gray-400 font-medium">WhatsApp Booking:</span>
                  <a
                    href="https://wa.me/447404106477?text=Hello!%20I'd%20like%20to%20inquire%20about%2520treatments%20at%20Confidence%20and%20Glow."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:underline"
                  >
                    Send instant message
                  </a>
                </p>
              </div>
            </div>

            {/* Accreditations Column */}
            <div>
              <h4 className="font-serif text-base font-bold text-gray-900 mb-6 uppercase tracking-wider text-[#6B7152]">
                Clinical Trust
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Our clinic adheres strictly to UK clinical safety standards. We employ expert single-use clinical tools, medically validated CE injectables, and strict sanitized protocols.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#6B7152]/10 border border-[#6B7152]/20 text-[#6B7152] font-semibold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Fully Insured
                </span>
                <span className="inline-block bg-[#4A7C7C]/10 border border-[#4A7C7C]/20 text-[#4A7C7C] font-semibold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                  NHS-Trained
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright and Legal Terms */}
          <div className="pt-8 border-t border-[#6B7152]/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p className="text-center md:text-left select-none">
              &copy; {currentYear} Confidence &amp; Glow Aesthetics. All rights reserved. <br />
              <span className="text-[10px]">Located at BBstylehouse, Morley Leeds.</span>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#about" className="hover:text-gray-600">Privacy Policy</a>
              <span>•</span>
              <a href="#treatments" className="hover:text-gray-600">Patient Terms</a>
              <span>•</span>
              <p className="flex items-center text-[10px]">
                Made with <Heart className="w-3 h-3 text-[#D4A5A5] mx-1 fill-current" /> in Leeds
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447404106477?text=Hello%20Confidence%20and%20Glow!%20I'd%20love%20to%20learn%20more%20about%20your%20skin%20treatments%20and%20availability."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-white/80"
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-float-btn"
      >
        <span className="absolute -left-36 bg-slate-900/90 text-white text-[11px] px-3 py-1.5 rounded-lg select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans tracking-wide">
          Chat with our team
        </span>
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="absolute right-0 top-0 block h-3.5 w-3.5 rounded-full bg-rose-500 ring-2 ring-white animate-bounce" />
      </a>
    </>
  );
}

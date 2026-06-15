import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Treatments", href: "#treatments" },
    { name: "About NHS Practitioner", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location & Hours", href: "#location" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E8]/90 backdrop-blur-md shadow-sm border-b border-[#6B7152]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A7C7C]/10 text-[#4A7C7C] border border-[#4A7C7C]/20 group-hover:bg-[#4A7C7C] group-hover:text-[#F5F0E8] transition-all duration-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#333333] group-hover:text-[#4A7C7C] transition-colors duration-300">
                Confidence & Glow
              </span>
              <span className="text-[10px] tracking-widest block text-[#6B7152] uppercase font-sans -mt-1 font-medium">
                Aesthetics Clinic
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#4A7C7C] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#4A7C7C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Booking CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://www.fresha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F0E8] bg-[#4A7C7C] hover:bg-[#375E5E] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              id="nav-book-btn"
            >
              Book Online
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-[#4A7C7C] focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slideout */}
      <div
        className={`md:hidden fixed inset-0 top-[65px] z-40 w-full bg-[#F5F0E8] border-t border-[#6B7152]/10 transition-all duration-300 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        id="mobile-nav-panel"
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium rounded-xl text-gray-800 hover:bg-[#6B7152]/10 hover:text-[#4A7C7C] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="https://www.fresha.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase text-[#F5F0E8] bg-[#4A7C7C] hover:bg-[#375E5E] transition-all"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

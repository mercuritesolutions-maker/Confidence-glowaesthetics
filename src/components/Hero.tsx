import { motion } from "motion/react";
import heroImg from "../assets/images/hero_treatment_1781515815215.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#F2EBE1] via-[#F5F0E8] to-[#F5F0E8]"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[#6B7152]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gradient-to-tr from-[#D4A5A5]/8 to-transparent rounded-tr-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#6B7152]/10 border border-[#6B7152]/20 self-start mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B7152] animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-700">
                Morley, Leeds Premier Skin &amp; Aesthetics Clinic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.12]"
            >
              Helping You Look <br />
              <span className="italic text-[#4A7C7C] font-semibold">Refreshed</span>,{" "}
              <span className="italic text-[#D4A5A5]">Lifted</span> <br className="hidden sm:inline" />
              &amp; Confident
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              At Confidence &amp; Glow, our highly qualified, <strong className="text-gray-900 font-medium">NHS-trained practitioner</strong> combines precision medical expertise with state-of-the-art aesthetic techniques. We specialize in enhancing your natural beauty, restoring lost volume, and giving your skin a healthy, vibrant glow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://www.fresha.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#4A7C7C] hover:bg-[#375E5E] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                id="hero-book-btn"
              >
                Book Your Consultation
              </a>
              <a
                href="#treatments"
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#6B7152] border-2 border-[#D4A5A5] hover:bg-[#D4A5A5]/10 hover:text-gray-900 transition-all transform hover:-translate-y-0.5"
                id="hero-treatments-btn"
              >
                View Treatments
              </a>
            </motion.div>

            {/* Key Clinical Selling Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 pt-8 border-t border-gray-200/60 grid grid-cols-3 gap-6"
            >
              <div>
                <span className="block font-serif text-2xl font-bold text-[#4A7C7C]">NHS-Led</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Clinical Standards</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#4A7C7C]">Advanced</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Laser &amp; Injectables</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#4A7C7C]">Bespoke</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Skin Adaptations</span>
              </div>
            </motion.div>
          </div>

          {/* Graphic Side */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] sm:aspect-[3/4]"
            >
              {/* Luxury Frame Accents */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-[#6B7152]/20" />
              <div className="absolute inset-2 sm:inset-4 rounded-[1.8rem] border border-[#D4A5A5]/30 transform rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#F5F0E8]">
                <img
                  src={heroImg}
                  alt="Elegant treatments at Confidence and Glow Aesthetics clinic Morley Leeds"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Review Badge */}
              <div className="absolute bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-[11px] font-sans font-medium text-gray-800 leading-tight">
                  "Absolutely refreshed and naturally lifted. Amazing NHS care."
                </p>
                <span className="block text-[9px] text-[#6B7152] mt-1 font-semibold">— Sarah J.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

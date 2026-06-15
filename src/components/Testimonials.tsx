import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "../types";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Decorative floral gradient lines */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A5A5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A7C7C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6B7152] font-semibold">Real Patient Journeys</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4 font-medium text-gray-900 leading-tight">
            Loved By Our <span className="italic text-[#D4A5A5] font-semibold">Refreshed Patients</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#D4A5A5] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Hear first-hand accounts from our wonderful Leeds and Morley patients who trust us implicitly with their facial harmony.
          </p>
        </div>

        {/* Desktop Layout - 3-Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8" id="testimonials-desktop-grid">
          {TESTIMONIALS.map((review: Testimonial) => (
            <div
              key={review.id}
              className="bg-[#F2E4E4] hover:bg-[#EBD9D9] p-8 rounded-2xl border border-[#D4A5A5]/30 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center space-x-1 mb-4 select-none">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-[#D4A5A5] mb-4 opacity-50" />
                <p className="text-gray-800 text-sm leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D4A5A5]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-gray-900">{review.name}</h4>
                  <span className="text-[11px] block text-gray-500 font-sans font-medium">
                    {review.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-white/60 text-[10px] text-[#4A7C7C] font-semibold tracking-wider uppercase rounded-full">
                    {review.treatment}
                  </span>
                  <span className="block text-[9px] text-gray-400 mt-1">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout - Carousel */}
        <div className="block lg:hidden max-w-lg mx-auto relative px-2" id="testimonials-mobile-carousel">
          <div className="relative overflow-hidden bg-[#F2E4E4] p-8 rounded-2xl border border-[#D4A5A5]/30 shadow-md min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-[#D4A5A5] mb-3 opacity-50" />
                  <p className="text-gray-800 text-sm leading-relaxed italic mb-6">
                    "{TESTIMONIALS[activeIndex].quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4A5A5]/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-gray-950">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    <span className="text-[10px] text-gray-500 font-sans block">
                      {TESTIMONIALS[activeIndex].location}
                    </span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 bg-white/60 text-[9px] text-[#4A7C7C] font-semibold tracking-wider uppercase rounded-full">
                    {TESTIMONIALS[activeIndex].treatment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-white text-gray-700 hover:text-[#4A7C7C] hover:scale-105 border border-gray-100 shadow-sm"
              aria-label="Previous reviewer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-[#4A7C7C] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Slide to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-white text-gray-700 hover:text-[#4A7C7C] hover:scale-105 border border-gray-100 shadow-sm"
              aria-label="Next reviewer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

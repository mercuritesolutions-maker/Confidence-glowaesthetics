import { motion } from "motion/react";
import { Sparkles, CalendarCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section id="book-now" className="relative py-28 bg-[#6B7152] overflow-hidden text-[#F5F0E8] text-center">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A5A5]/40 to-transparent" />
      
      {/* Decorative ambient glowing circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#D4A5A5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Aesthetic icon */}
          <div className="inline-flex p-3 rounded-full bg-white/10 text-[#D4A5A5] mb-6">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-[#F5F0E8]">
            Ready to Glow <span className="italic font-normal">With Confidence?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#E5DFD4] max-w-xl mb-10 leading-relaxed font-sans">
            Join other Leeds and Morley patients who have upgraded their skincare routines under expert NHS clinical supervision. Secure your appointment on Fresha instantly.
          </p>

          {/* Book Online Now Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center space-x-2.5 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#F5F0E8] bg-[#4A7C7C] hover:bg-[#375E5E] transition-all transform hover:-translate-y-0.5 shadow-lg border border-[#4A7C7C]/20 cursor-pointer"
              id="final-cta-book-btn"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Online Now</span>
            </button>
            
            <a
              href="tel:+447404106477"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white hover:text-[#D4A5A5] border border-white/40 hover:border-[#D4A5A5] transition-all"
            >
              Or call 07404 106477
            </a>
          </div>

          {/* Subtitle Guarantee notes */}
          <p className="mt-8 text-xs text-[#C2BCB1] font-sans">
            *No credit card pre-charge. Cancel or reschedule and adjust your consultations up to 24 hours prior.
          </p>

        </motion.div>
      </div>
    </section>
  );
}

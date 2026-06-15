import { motion } from "motion/react";
import practitionerImg from "../assets/images/practitioner_about_1781515831869.jpg";
import { Award, ShieldAlert, HeartHandshake, Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual/Image Side */}
          <div className="lg:col-span-5 relative flex justify-center order-last lg:order-first">
            {/* The structural olive green background block behind the image */}
            <div className="absolute -bottom-8 -left-8 w-4/5 h-4/5 bg-[#6B7152] rounded-3xl z-0 opacity-90 hidden sm:block" />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] sm:aspect-[3/4]"
            >
              {/* Outer border frame */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#D4A5A5]/40 transform -rotate-2" />
              
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream">
                <img
                  src={practitionerImg}
                  alt="Certified practitioner at Confidence and Glow Aesthetics Morley Leeds"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified badge */}
              <div className="absolute top-4 right-4 bg-emerald-900/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-emerald-505/30 text-emerald-100 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">NHS Accredited Practitioner</span>
              </div>
            </motion.div>
          </div>

          {/* Text/Bio Content Side */}
          <div className="lg:col-span-7 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#6B7152] font-semibold">Clinical Foundations</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 mb-6 font-medium text-gray-900 leading-tight">
              Clinically Certified, <span className="italic text-[#4A7C7C] font-semibold">Scientifically Guided</span>
            </h2>
            <div className="h-[2px] w-16 bg-[#D4A5A5] mb-8" />

            <div className="space-y-6 text-gray-600 sm:text-base leading-relaxed font-sans">
              <p>
                Welcome to Confidence &amp; Glow Aesthetics. Our clinic was founded on a simple medical principle: <strong className="text-gray-900 font-medium">your skin deserves the highest standard of anatomical care.</strong>
              </p>
              <p>
                Led by an <strong className="text-[#4A7C7C] font-semibold">NHS-trained practitioner</strong> with years of experience in acute medical environments, we uniquely bridge the gap between luxury spa experiences and clinical dermatology. We combine advanced laser technology, sterile safety standards, and scientifically validated formulations to give you exceptional results with zero compromise.
              </p>
            </div>

            {/* Credential Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#FCFAF5] p-5 rounded-xl border border-[#6B7152]/10 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-[#6B7152]/10 text-[#6B7152]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-gray-950">Accredited Pedigree</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">Fully certified in advanced aesthetics injectables, chemical peeling, and laser skin safety.</p>
                </div>
              </div>

              <div className="bg-[#FCFAF5] p-5 rounded-xl border border-[#4A7C7C]/10 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-[#4A7C7C]/10 text-[#4A7C7C]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-gray-950">Bespoke Skin Plan</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">No cookie-cutter packages. Every patient receives a tailored face map and direct anatomical guidance.</p>
                </div>
              </div>
            </div>

            {/* Strict sterile guarantees */}
            <div className="mt-10 p-5 rounded-2xl bg-[#6B7152]/10 border border-[#6B7152]/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7152] mb-3">Our Clinical Commitments:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#4A7C7C] shrink-0" />
                  <span>Only premium CE-marked products used</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#4A7C7C] shrink-0" />
                  <span>State-of-the-art sterile clinic in Morley</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#4A7C7C] shrink-0" />
                  <span>Comprehensive post-treatment skin checks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#4A7C7C] shrink-0" />
                  <span>Fully insured medical-level practitioner</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

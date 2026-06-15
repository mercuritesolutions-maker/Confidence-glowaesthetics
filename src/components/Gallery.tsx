import { motion } from "motion/react";
import skinResults from "../assets/images/glowing_skin_result_1781515849892.jpg";
import studioVibe from "../assets/images/minimalist_clinic_vibe_1781515867409.jpg";

export default function Gallery() {
  return (
    <section id="results" className="py-24 bg-[#FAF7F2] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6B7152]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6B7152] font-semibold">Exemplary Care Results</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4 font-medium text-gray-900 leading-tight">
            Our Aesthetic <span className="italic text-[#4A7C7C] font-semibold">&amp; Glow Standards</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#6B7152] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Our results are grounded in restoring dermis health and hydration, not over-filling or distorting. Witness the difference of medical-grade treatments.
          </p>
        </div>

        {/* Gallery Split Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Item 1 - Skin Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            {/* Round frame with deep teal accent border */}
            <div className="relative group overflow-hidden rounded-2xl border-4 border-[#4A7C7C] shadow-lg aspect-[4/3] w-full bg-cream">
              <img
                src={skinResults}
                alt="Pristine glowing healthy skin results at Confidence and Glow Leeds Morley"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A7C7C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-xs text-[#F5F0E8] font-semibold uppercase tracking-wider block">Clinical Case Study</span>
                  <span className="font-serif text-lg text-[#F5F0E8] font-medium">Radiant Skin Rejuvenation</span>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-semibold text-gray-900">Patient Skin Revitalization</h4>
              <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">
                Microneedling &amp; Skin Booster Combo • 2 Sessions
              </p>
              <p className="text-sm text-gray-600 pt-1 leading-relaxed">
                Noticeable improvement in skin elasticity, dermal bounce, and natural luminosity. Texture and standard skin roughness are beautifully smoothed.
              </p>
            </div>
          </motion.div>

          {/* Item 2 - Studio Vibe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            {/* Round frame with deep teal accent border */}
            <div className="relative group overflow-hidden rounded-2xl border-4 border-[#4A7C7C] shadow-lg aspect-[4/3] w-full bg-cream">
              <img
                src={studioVibe}
                alt="Luxury cosmetic serums and apothecary products Confidence and Glow Morley"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A7C7C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-xs text-[#F5F0E8] font-semibold uppercase tracking-wider block">Clinical Suite</span>
                  <span className="font-serif text-lg text-[#F5F0E8] font-medium">Bespoke Medical Grade Formulations</span>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-semibold text-gray-900">Bespoke Ingredient Pedigree</h4>
              <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">
                Sterile Apothecary Standard • Morley Suite
              </p>
              <p className="text-sm text-gray-600 pt-1 leading-relaxed">
                We formulate each treatment using optimal pH and concentration. Our botanical-clinical hybrid approach protects your delicate skin barrier.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

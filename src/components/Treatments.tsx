import React from "react";
import { motion } from "motion/react";
import { Sparkles, Droplet, Grid, Layers, ShieldCheck, Smile, ChevronRight, HelpCircle, Calendar, Eye } from "lucide-react";
import { TREATMENTS, Treatment } from "../types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles: Sparkles,
  Droplet: Droplet,
  Grid: Grid,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Smile: Smile,
};

interface TreatmentsProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentId: string) => void;
}

export default function Treatments({ onSelectTreatment, onBookTreatment }: TreatmentsProps) {
  return (
    <section id="treatments" className="py-24 bg-[#F5F0E8] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6B7152]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6B7152] font-semibold">Our Signature Clinic Menu</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4 font-medium text-gray-900 leading-tight">
            Premium Aesthetic <span className="italic text-[#4A7C7C] font-semibold">&amp; Medical Skin Care</span>
          </h2>
          <div className="h-[2px] w-20 bg-[#6B7152] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
            Every clinical session begins with a comprehensive skin analysis. We tailor our medical-grade ingredients and techniques to your personal anatomy for natural, elegant revitalization.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="treatments-grid">
          {TREATMENTS.map((treatment: Treatment, index: number) => {
            const IconComponent = iconMap[treatment.iconName] || HelpCircle;
            
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => onSelectTreatment(treatment)}
                className="group relative flex flex-col justify-between bg-[#FCFAF5] p-8 rounded-2xl border border-transparent shadow-[0_4px_25px_-5px_rgba(107,113,82,0.06)] hover:shadow-[0_10px_35px_-8px_rgba(107,113,82,0.12)] hover:bg-[#FAF6EE] hover:border-[#6B7152] transition-all duration-300 cursor-pointer text-left"
                id={`treatment-card-${treatment.id}`}
              >
                <div>
                  {/* Icon & Pricing Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-[#D4A5A5]/10 text-[#4A7C7C] border border-[#D4A5A5]/20 group-hover:bg-[#4A7C7C] group-hover:text-cream transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-lg font-bold text-[#4A7C7C] bg-[#4A7C7C]/5 px-4 py-1.5 rounded-full border border-[#4A7C7C]/10">
                      {treatment.priceRange}
                    </span>
                  </div>

                  {/* Title & Static Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-950 mb-2 group-hover:text-[#4A7C7C] transition-colors duration-200">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed font-normal">
                    {treatment.description}
                  </p>

                  {/* Benefits checklist */}
                  <div className="space-y-2 mb-8 select-none">
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7152] font-semibold">Key Benefits:</p>
                    {treatment.benefits.slice(0, 3).map((benefit: string, bIdx: number) => (
                      <div key={bIdx} className="flex items-start text-xs text-gray-700">
                        <span className="text-[#6B7152] mr-2 font-bold font-sans">✓</span>
                        <span className="leading-tight truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <span className="text-xs text-gray-500 font-mono flex items-center">
                    ⏱ {treatment.duration}
                  </span>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onSelectTreatment(treatment)}
                      className="text-xs font-semibold text-gray-500 hover:text-[#4A7C7C] transition-colors flex items-center space-x-1"
                      title="View Procedure Details"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">Details</span>
                    </button>
                    
                    <button
                      onClick={() => onBookTreatment(treatment.id)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-cream bg-[#4A7C7C] hover:bg-[#375E5E] transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom notes */}
        <div className="mt-16 text-center select-none">
          <p className="text-xs text-[#6B7152] max-w-lg mx-auto leading-relaxed">
            *Custom dual-therapy combination plans available upon individual assessment. Speak with our clinical specialist about pairing laser skin rejuvenation with custom vascular or pigmentation protocols.
          </p>
        </div>
      </div>
    </section>
  );
}

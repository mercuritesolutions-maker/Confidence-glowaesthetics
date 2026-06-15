import React from "react";
import { motion } from "motion/react";
import { Sparkles, Droplet, Layers, Star, Sliders, CheckCircle2, RefreshCw } from "lucide-react";

// Real clinical before and after images uploaded by the user
import threadVeinBefore from "../assets/images/Threadvienbefore.jpg";
import threadVeinAfter from "../assets/images/Threadvienafter.jpg";

interface CaseStudy {
  id: string;
  title: string;
  treatmentName: string;
  sessions: string;
  timeline: string;
  beforeLabel: string;
  beforeDetails: string;
  afterLabel: string;
  afterDetails: string;
  physiologicalBenefits: string[];
  beforeImage?: string;
  afterImage?: string;
}

const CASES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Facial Thread Vein Removal",
    treatmentName: "Vascular Capillary Therapy",
    sessions: "1 Session",
    timeline: "Immediate Resumption",
    beforeLabel: "Dilated Capillaries",
    beforeDetails: "Delicate spider veins and red vascular congestion visible near the facial surface.",
    afterLabel: "Vesicular Collapse",
    afterDetails: "Targeted energy collapses damaged vessel walls, encouraging safe physiological resorption and clear, unified skin.",
    physiologicalBenefits: ["Instant vessel consolidation", "Clear, even-toned complexion", "Zero dermal scarring"],
    beforeImage: threadVeinBefore,
    afterImage: threadVeinAfter,
  },
  {
    id: "case-2",
    title: "Clinical Laser Hair Removal",
    treatmentName: "Advanced Laser Hair Removal",
    sessions: "6 Sessions",
    timeline: "8 Weeks Intervals",
    beforeLabel: "Coarse Follicular Growth",
    beforeDetails: "Dense, rapid hair growth with persistent razor burn, deep dermal shadows, and recurrent uncomfortable ingrown hair cycles.",
    afterLabel: "Dermal Silk Smoothness",
    afterDetails: "Laser pulses safely disable active roots. The epidermis is left completely smooth, free of dark shadow or folliculitis redness.",
    physiologicalBenefits: ["90%+ Permanent hair reduction", "Absolute clearance of razor bumps", "Preserved epidermal silkiness"]
  },
  {
    id: "case-3",
    title: "Dermal Collagen Renewal",
    treatmentName: "Laser Skin Rejuvenation",
    sessions: "3 Sessions",
    timeline: "6 Weeks Total",
    beforeLabel: "Textured & Dull Epidermis",
    beforeDetails: "Visible facial pore expansion, early micro-texture creasing, and diminished dynamic bounce from standard pollution and age.",
    afterLabel: "Plump Fibroblast Boost",
    afterDetails: "Mild sub-dermal heat pulses trigger the skin's self-healing cycle, restoring healthy elasticity and tightening micro-pores.",
    physiologicalBenefits: ["Deep stimulated collagen bands", "Refined surface skin texture", "Vibrant, healthy light reflection"]
  },
  {
    id: "case-4",
    title: "Targeted Sun Damage Clearing",
    treatmentName: "Pigmentation Treatment",
    sessions: "2 Sessions",
    timeline: "4 Weeks Total",
    beforeLabel: "Melanin Clustering",
    beforeDetails: "Historic UV-induced sun spots, solar freckles, and localized brown pigment patches disrupting facial uniformity.",
    afterLabel: "Unified Dermal Complexion",
    afterDetails: "Laser energy targets internal melanin clusters for natural lymphatic clearance, revealing a bright, even-toned baseline.",
    physiologicalBenefits: ["Sparsely faded solar freckles", "Even, unified pigmentation", "Enhanced bright cell turnover"]
  }
];

export default function Gallery() {
  return (
    <section id="results" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative organic guidelines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6B7152]/30 to-transparent" />
      <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-[#4A7C7C]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-[#6B7152]/10 text-[#6B7152] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Clinical Performance Diary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4 font-semibold text-gray-900 leading-tight">
            Real Results from <span className="italic text-[#4A7C7C] font-semibold">Real Clients</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#6B7152] mx-auto mb-6" />
          <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-lg mx-auto leading-relaxed">
            Take a look at how we measure success. Guided by our medical expertise, these comparative case studies represent real dermal restorations with zero visual exaggerations.
          </p>
        </div>

        {/* 2x2 Case Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="before-after-cases-grid">
          {CASES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-[#FCFAF5] p-6 sm:p-8 rounded-2xl border border-[#6B7152]/10 shadow-[0_4px_30px_rgba(107,113,82,0.04)] hover:shadow-[0_12px_40px_rgba(107,113,82,0.08)] hover:border-[#6B7152]/30 transition-all duration-300 flex flex-col justify-between"
              id={`before-after-card-${item.id}`}
            >
              {/* Card Meta details */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#6B7152]/10 pb-4 mb-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Clinical Protocol Study</span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mt-0.5">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[10px] font-mono text-[#4A7C7C] bg-[#4A7C7C]/5 px-2.5 py-1 rounded-full border border-[#4A7C7C]/20 font-bold">
                      {item.treatmentName}
                    </span>
                    <p className="text-[9px] text-[#6B7152] font-semibold mt-1 uppercase tracking-wider">
                      {item.sessions} • {item.timeline}
                    </p>
                  </div>
                </div>

                {/* Micro Images or Neutral Placeholder box wrapper */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  
                  {/* Before Segment */}
                  {item.beforeImage ? (
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 aspect-[1.35] select-none group shadow-sm bg-slate-100">
                      <img 
                        src={item.beforeImage} 
                        alt={item.beforeLabel} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 flex flex-col justify-end h-1/2" />
                      <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 bg-rose-500 text-white rounded font-bold shadow-sm">
                        Before
                      </span>
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <p className="font-serif text-[13px] font-bold text-white flex items-center mb-0.5">
                          <span className="h-2 w-2 rounded-full bg-rose-500 mr-2 shrink-0" />
                          {item.beforeLabel}
                        </p>
                        <p className="text-[10px] text-gray-200 font-sans leading-tight line-clamp-2">
                          {item.beforeDetails}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-xl border border-dashed border-gray-300 bg-[#FAF7F2] p-5 flex flex-col justify-between aspect-[1.35] select-none group">
                      <div>
                        <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-gray-200/60 rounded text-gray-500 font-semibold">
                          Phase A
                        </span>
                        <p className="font-serif text-sm font-bold text-gray-900 flex items-center mb-2">
                          <span className="h-2 w-2 rounded-full bg-rose-400 mr-2" />
                          {item.beforeLabel}
                        </p>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          {item.beforeDetails}
                        </p>
                      </div>
                      <div className="border-t border-gray-200/60 pt-3 flex items-center text-[9px] text-gray-400 font-mono mt-3 uppercase tracking-wider">
                        <Sliders className="w-3.5 h-3.5 mr-1" />
                        <span>Initial Assessment Profile</span>
                      </div>
                    </div>
                  )}

                  {/* After Segment */}
                  {item.afterImage ? (
                    <div className="relative rounded-xl overflow-hidden border-2 border-[#4A7C7C]/30 aspect-[1.35] select-none group shadow-md bg-slate-100">
                      <img 
                        src={item.afterImage} 
                        alt={item.afterLabel} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 flex flex-col justify-end h-1/2" />
                      <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 bg-emerald-600 text-white rounded font-extrabold shadow-sm">
                        After
                      </span>
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <p className="font-serif text-[13px] font-bold text-white flex items-center mb-0.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 mr-2 shrink-0 animate-pulse" />
                          {item.afterLabel}
                        </p>
                        <p className="text-[10px] text-gray-200 font-sans leading-tight line-clamp-2">
                          {item.afterDetails}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-xl border-2 border-[#4A7C7C]/30 bg-[#4A7C7C]/5 p-5 flex flex-col justify-between aspect-[1.35] select-none group">
                      <div>
                        <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#4A7C7C]/10 text-[#4A7C7C] rounded font-extrabold">
                          Healthy Goal
                        </span>
                        <p className="font-serif text-sm font-bold text-gray-950 flex items-center mb-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                          {item.afterLabel}
                        </p>
                        <p className="text-xs text-gray-700 font-sans leading-relaxed">
                          {item.afterDetails}
                        </p>
                      </div>
                      <div className="border-t border-[#4A7C7C]/10 pt-3 flex items-center text-[9px] text-[#4A7C7C] font-mono mt-3 uppercase tracking-wider font-bold">
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-[#D4A5A5] animate-spin-slow" />
                        <span>Post-Procedure Restored Status</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Physiological Benefits Checklist footer */}
              <div className="bg-[#FAF7F2] border border-[#6B7152]/10 p-4 rounded-xl space-y-2 mt-2">
                <span className="text-[10px] text-[#6B7152] uppercase tracking-wider font-bold block">
                  Measured Physiological Improvements:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {item.physiologicalBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="leading-tight font-medium text-[11px]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Verification callout banner */}
        <div className="mt-12 bg-[#6B7152]/5 border border-[#6B7152]/20 p-5 rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex items-center space-x-3 text-left">
            <span className="h-8 w-8 rounded-full bg-[#4A7C7C]/10 flex items-center justify-center text-[#4A7C7C] shrink-0 font-bold">✓</span>
            <div>
              <p className="text-xs font-serif font-bold text-gray-900">NHS Specialist Standards Applied</p>
              <p className="text-[11.5px] text-gray-500">All facial analyses are fully based on objective cosmetic measurements mapped prior to treatment.</p>
            </div>
          </div>
          <div className="text-xs text-gray-400 font-mono flex items-center uppercase tracking-widest bg-white py-1 px-3 border rounded-full">
            <RefreshCw className="w-3 h-3 text-[#D4A5A5] mr-1.5 animate-spin-slow" />
            <span>On-device Local Vault</span>
          </div>
        </div>

      </div>
    </section>
  );
}

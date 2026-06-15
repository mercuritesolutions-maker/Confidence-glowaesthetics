import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock, HelpCircle, Check, ArrowRight, Shield, Layers, Sparkles, Droplet, Grid, ShieldCheck, Smile } from "lucide-react";
import { Treatment } from "../types";

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatmentId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Droplet,
  Grid,
  Layers,
  ShieldCheck,
  Smile,
};

export default function TreatmentDetailModal({
  treatment,
  onClose,
  onBook,
}: TreatmentDetailModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (treatment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [treatment]);

  if (!treatment) return null;

  const IconComponent = iconMap[treatment.iconName] || HelpCircle;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative w-full max-w-4xl bg-[#F5F0E8] rounded-2xl shadow-2xl overflow-hidden border border-[#6B7152]/20 z-10 max-h-[90vh] flex flex-col"
          id="treatment-detail-modal"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 bg-[#FAF7F2] border-b border-[#6B7152]/10 shrink-0">
            <div className="flex items-center space-x-3.5">
              <div className="p-2.5 rounded-xl bg-[#4A7C7C]/10 text-[#4A7C7C]">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest block text-[#6B7152] uppercase font-bold">Clinical Menu Item</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">{treatment.title}</h3>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200/50 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close modal"
              id="close-treatment-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-sans">
            
            {/* Split row - Introduction & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <h4 className="font-serif text-lg font-semibold text-gray-950 mb-3">Clinical Overview</h4>
                <p className="text-sm leading-relaxed text-gray-700">
                  {treatment.longDescription}
                </p>
              </div>
              
              <div className="md:col-span-4 bg-[#FAF7F2] p-5 rounded-xl border border-[#D4A5A5]/20 space-y-4">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-[#6B7152]/10">
                  <span className="text-gray-500 uppercase font-bold">Investments</span>
                  <span className="font-mono font-bold text-sm text-[#4A7C7C]">{treatment.priceRange}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-[#6B7152]/10">
                  <span className="text-gray-500 uppercase font-bold">Duration</span>
                  <span className="font-mono font-bold text-gray-800 flex items-center">
                    <Clock className="w-3.5 h-3.5 text-[#6B7152] mr-1" />
                    {treatment.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 uppercase font-bold">Oversight</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider">
                    NHS Professional
                  </span>
                </div>
              </div>
            </div>

            {/* Split layout - Procedure steps vs suited candidate criteria */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#6B7152]/10">
              
              {/* Left Column: Staggered Steps */}
              <div>
                <h4 className="font-serif text-lg font-semibold text-gray-955 mb-4 flex items-center text-[#4A7C7C]">
                  <Layers className="w-5 h-5 mr-2" />
                  <span>The Clinical Procedure Steps</span>
                </h4>
                <div className="space-y-4">
                  {treatment.procedureSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#6B7152]/10 text-[#6B7152] text-xs font-mono font-bold mr-3 shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Benefits Checklist & Who It's Best Suited For */}
              <div className="space-y-6">
                
                {/* Benefits */}
                <div>
                  <h4 className="font-serif text-base font-bold text-gray-950 mb-3 uppercase tracking-wider text-[#6B7152]">
                    Key Physiological Benefits
                  </h4>
                  <div className="space-y-2.5">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Suited For */}
                <div className="p-5 rounded-xl bg-orange-50/20 border border-orange-100 space-y-3">
                  <h4 className="font-serif text-base font-semibold text-gray-950 flex items-center">
                    <Shield className="w-4 h-4 text-orange-600 mr-2" />
                    <span>Who This Is Best Suited For</span>
                  </h4>
                  <ul className="space-y-2">
                    {treatment.bestSuitedFor.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-orange-500 mr-2 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>

          {/* Action Bar footer */}
          <div className="p-6 bg-[#FAF7F2] border-t border-[#6B7152]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 mr-1.5" />
              <span>Free detailed skin face consultation included with booking</span>
            </div>
            
            <button
              onClick={() => {
                onBook(treatment.id);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#F5F0E8] bg-[#4A7C7C] hover:bg-[#375E5E] transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              id="modal-book-trigger-btn"
            >
              <span>Book This Treatment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

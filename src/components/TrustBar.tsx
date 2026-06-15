import { Star } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-[#EFEAE2] py-4 border-y border-[#6B7152]/10" id="trustbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12">
          
          {/* Rating Block */}
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-sans font-semibold text-gray-800 text-sm tracking-wide">
              5.0 ★ Rating on Google
            </span>
          </div>

          {/* Elegant Divider (visible on desktop) */}
          <div className="hidden sm:block h-6 w-[1px] bg-[#6B7152]/30" />

          {/* Core Stat Block */}
          <div className="text-center sm:text-left">
            <span className="font-serif text-base text-gray-700 font-medium">
              Trusted by <span className="text-[#4A7C7C] font-semibold">54+ Patients</span> across Morley, Leeds &amp; West Yorkshire
            </span>
          </div>

          {/* Elegant Divider (visible on desktop) */}
          <div className="hidden sm:block h-6 w-[1px] bg-[#6B7152]/30" />

          {/* Security Indicator */}
          <div className="flex items-center space-x-2 text-xs text-[#6B7152] font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>100% Sterile Medical Protocols</span>
          </div>

        </div>
      </div>
    </div>
  );
}

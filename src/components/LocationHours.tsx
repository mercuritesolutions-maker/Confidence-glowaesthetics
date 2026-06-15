import { motion } from "motion/react";
import { Phone, MapPin, Clock, Calendar, Compass } from "lucide-react";
import { WORKING_HOURS } from "../types";

export default function LocationHours() {
  const addressQuery = "BBstylehouse, Queen St, Morley, Leeds LS27 8DX";
  const mapUrl = `https://maps.google.com/maps?q=BBstylehouse,%20Queen%20St,%20Morley,%20Leeds%20LS27%208DX&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=BBstylehouse+Queen+St+Morley+Leeds+LS27+8DX`;

  return (
    <section id="location" className="py-24 bg-[#F5F0E8] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6B7152]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6B7152] font-semibold">Visit Our Sanctuary</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4 font-medium text-gray-900 leading-tight">
            Location <span className="italic text-[#4A7C7C] font-semibold">&amp; Opening Hours</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#6B7152] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Centrally situated inside the elegant <strong className="text-gray-900">BBstylehouse</strong> on Queen Street in Morley. Free local parking available nearby.
          </p>
        </div>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="location-grid">
          
          {/* Column 1: Clinic Details & Opening Hours (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#6B7152]/10 shadow-sm flex-1 flex flex-col justify-between">
              
              {/* Contact Card Details */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-semibold text-gray-950 mb-6">Contact Details</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="p-3.5 rounded-xl bg-[#4A7C7C]/10 text-[#4A7C7C] mr-4 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-gray-950">Clinic Address</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">
                        Confidence &amp; Glow Aesthetics <br />
                        BBstylehouse, Queen St, <br />
                        Morley, Leeds, LS27 8DX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3.5 rounded-xl bg-[#D4A5A5]/10 text-[#6B7152] mr-4 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-gray-950">Telephone Booking</h4>
                      <p className="text-sm text-gray-600 mt-1">Direct Clinic Line (Click to call):</p>
                      <a
                        href="tel:+447404106477"
                        className="text-base sm:text-lg font-mono font-bold text-[#4A7C7C] hover:text-[#375E5E] transition-colors inline-block mt-0.5"
                        id="phone-call-link"
                      >
                        +44 (0) 7404 106477
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking & Directions Buttons */}
              <div className="pt-6 border-t border-[#6B7152]/10 space-y-3">
                <a
                  href="tel:+447404106477"
                  className="flex w-full items-center justify-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-[#4A7C7C] hover:bg-[#375E5E] transition-all shadow-sm"
                  id="direct-call-btn"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Speak to Practitioner</span>
                </a>
                
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-gray-700 bg-white hover:bg-gray-55/10 border-2 border-[#D4A5A5] transition-all"
                  id="view-directions-btn"
                >
                  <Compass className="w-4 h-4 text-[#D4A5A5]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          {/* Column 2: Hours / Map Grid Split (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
              
              {/* Working Hours Table */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#6B7152]/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-5 h-5 text-[#6B7152]" />
                    <h3 className="font-serif text-xl font-semibold text-gray-950">Opening Hours</h3>
                  </div>
                  
                  <div className="divide-y divide-gray-200/50">
                    {WORKING_HOURS.map((entry) => (
                      <div
                        key={entry.day}
                        className="py-2.5 flex justify-between items-center text-xs"
                      >
                        <span className="font-medium text-gray-700">{entry.day}</span>
                        <span
                          className={`font-mono font-medium ${
                            entry.closed ? "text-rose-500 italic" : "text-gray-900"
                          }`}
                        >
                          {entry.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200/50 flex items-center space-x-2 text-[11px] text-[#6B7152]">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Late evening appointments on Wednesday &amp; Thursday</span>
                </div>
              </div>

              {/* Map embed container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 min-h-[300px] md:min-h-0 relative">
                <iframe
                  title="Confidence &amp; Glow Aesthetics Location Morley Leeds BBstylehouse"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                  className="absolute inset-0 w-full h-full"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

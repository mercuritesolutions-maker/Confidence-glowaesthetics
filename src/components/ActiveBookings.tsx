import React, { useState, useEffect } from "react";
import { Calendar, Clock, Trash2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Booking } from "../types";

export default function ActiveBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const loadBookings = () => {
    try {
      const active = JSON.parse(localStorage.getItem("active_bookings") || "[]");
      setBookings(active);
    } catch {
      setBookings([]);
    }
  };

  useEffect(() => {
    loadBookings();
    
    // Listen for custom bookings updated event
    window.addEventListener("bookings_updated", loadBookings);
    return () => {
      window.removeEventListener("bookings_updated", loadBookings);
    };
  }, []);

  const handleCancel = (id: string) => {
    if (confirm("Are you sure you want to cancel this booking? This will immediately release your reserved clinical time slot.")) {
      const updated = bookings.filter((b) => b.id !== id);
      localStorage.setItem("active_bookings", JSON.stringify(updated));
      setBookings(updated);
    }
  };

  if (bookings.length === 0) return null;

  return (
    <div className="bg-[#FAF7F2] border-b border-[#6B7152]/20 py-6" id="active-bookings-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Header */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] tracking-wider uppercase font-bold text-gray-500">Your Clinical Space</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
              Your Reserved Treatments ({bookings.length})
            </h3>
            <p className="text-xs text-gray-500 font-sans">
              These details are safely stored on-device. Show your Appointment ID upon arriving at BBstylehouse.
            </p>
          </div>

          {/* Bookings horizontal scroll or stack list */}
          <div className="flex-1 max-w-2xl w-full flex flex-col sm:flex-row gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm flex-1 min-w-[280px] flex justify-between items-start"
              >
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-black text-[#4A7C7C] bg-[#4A7C7C]/5 px-2 py-0.5 rounded border border-[#4A7C7C]/10">
                      {b.id}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 rounded">
                      Approved
                    </span>
                  </div>
                  
                  <h4 className="font-serif text-sm font-bold text-gray-900 truncate">
                    {b.treatmentTitle}
                  </h4>
                  
                  <p className="text-[11px] text-gray-500 flex items-center">
                    <Calendar className="w-3.5 h-3.5 text-[#6B7152] mr-1" />
                    {new Date(b.date).toLocaleDateString("en-GB", { month: "short", day: "numeric" })} • {b.timeSlot.split(" (")[0]}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between h-full pl-2">
                  <button
                    onClick={() => handleCancel(b.id)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                    title="Cancel Appointment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <a
                    href={`https://wa.me/447404106477?text=Hi%20Confidence%20and%20Glow!%20Reporting%20for%20appointment%20${b.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#4A7C7C] font-semibold hover:underline flex items-center space-x-0.5"
                  >
                    <span>Check-in</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

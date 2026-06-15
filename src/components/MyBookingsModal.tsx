import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Trash2, ShieldCheck, MailCheck, ExternalLink } from "lucide-react";
import { Booking } from "../types";

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MyBookingsModal({ isOpen, onClose }: MyBookingsModalProps) {
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
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

  useEffect(() => {
    // Listen for custom bookings updated event
    window.addEventListener("bookings_updated", loadBookings);
    return () => {
      window.removeEventListener("bookings_updated", loadBookings);
    };
  }, []);

  const handleCancelBooking = (id: string) => {
    if (window.confirm("Are you sure you want to cancel this booking? This will remove it from your device records.")) {
      const updated = bookings.filter((b) => b.id !== id);
      localStorage.setItem("active_bookings", JSON.stringify(updated));
      setBookings(updated);
      
      // Dispatch event to inform other parts of the app
      window.dispatchEvent(new Event("bookings_updated"));

      // Dispatch status toast
      window.dispatchEvent(new CustomEvent("show-app-toast", {
        detail: {
          message: "Appointment removed from active records successfully.",
          type: "success"
        }
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#F5F0E8] rounded-2xl shadow-2xl overflow-hidden border border-[#6B7152]/20 z-10 max-h-[85vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-white border-b border-[#6B7152]/10 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <span>My Active Consultations</span>
                </h3>
                <p className="text-xs text-gray-500 font-sans mt-0.5">
                  Securely stored booking certificates sent to practitioner email
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition"
                title="Close Portal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List and View Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {bookings.length === 0 ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#6B7152]/10 text-[#6B7152] flex items-center justify-center mx-auto">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-bold text-gray-800">No Sent Bookings Recorded</h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Any aesthetic treatment reservation that is successfully processed and transmitted to the clinician will show here.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((b) => (
                    <div
                      key={b.id}
                      className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm relative flex flex-col space-y-3"
                    >
                      {/* Header row */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs font-bold text-[#4A7C7C] bg-[#4A7C7C]/5 px-2 py-0.5 rounded border border-[#4A7C7C]/10">
                              {b.id}
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center space-x-1">
                              <MailCheck className="w-3 h-3 text-emerald-600 mr-0.5" />
                              <span>Emailed &amp; Sent</span>
                            </span>
                          </div>
                          <h4 className="font-serif text-base font-bold text-gray-950 mt-1">
                            {b.treatmentTitle}
                          </h4>
                        </div>

                        {/* Action cancel */}
                        <button
                          onClick={() => handleCancelBooking(b.id)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                          title="Cancel Booking"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>

                      {/* Detail metadata table */}
                      <div className="grid grid-cols-2 gap-2 text-xs border-t border-gray-100 pt-3 text-gray-600">
                        <div>
                          <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Scheduled Date</span>
                          <span className="font-medium text-gray-900">
                            {new Date(b.date).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Hours Slot</span>
                          <span className="font-medium text-gray-900">
                            {b.timeSlot.split(" (")[0]}
                          </span>
                        </div>
                        <div className="col-span-2 pt-1">
                          <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Patient Name</span>
                          <span className="font-semibold text-gray-900">{b.patientName}</span>
                        </div>
                      </div>

                      {/* Bottom action bar */}
                      <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs font-semibold">
                        <span className="text-[10px] text-gray-400 lowercase font-mono">
                          {b.email}
                        </span>
                        
                        <a
                          href={`https://wa.me/447404106477?text=Hi%20Confidence%20and%20Glow!%20Checking%20in%20for%20my%20confirmed%20appointment%20${b.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4A7C7C] hover:underline flex items-center space-x-1"
                        >
                          <span>WhatsApp Check-In</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-[#6B7152]/10 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-[#6B7152] hover:bg-[#4A4E38] text-[#F5F0E8] rounded-full text-xs font-bold uppercase tracking-widest transition"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

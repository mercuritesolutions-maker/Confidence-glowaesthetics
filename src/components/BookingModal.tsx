import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Phone, MessageSquare, Calendar, Clock, MapPin, CheckCircle2, Copy, Trash2, ArrowRight, RefreshCw } from "lucide-react";
import { TREATMENTS, Booking, Treatment } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedTreatmentId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preSelectedTreatmentId = "",
}: BookingModalProps) {
  // Booking Form State
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [treatmentId, setTreatmentId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Afternoon Slot (12:00 - 15:00)");
  const [skinConcerns, setSkinConcerns] = useState("");
  
  // Successful Reservation state
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'warn_no_key' | 'failed'>('idle');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(null);

  // Synchronize preSelectedTreatmentId
  useEffect(() => {
    if (preSelectedTreatmentId) {
      setTreatmentId(preSelectedTreatmentId);
    } else if (TREATMENTS.length > 0) {
      setTreatmentId(TREATMENTS[0].id);
    }
  }, [preSelectedTreatmentId, isOpen]);

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Generate the next 8 available dates dynamically starting Monday, June 15, 2026
  const getUpcomingDays = () => {
    const list = [];
    const baseDate = new Date("2026-06-15T09:00:00");
    
    for (let i = 0; i < 9; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      
      const dayName = d.toLocaleDateString("en-GB", { weekday: "short" });
      const dayNum = d.getDate();
      const monthName = d.toLocaleDateString("en-GB", { month: "short" });
      const fullIsoDate = d.toISOString().split("T")[0];
      const isSunday = d.getDay() === 0;

      list.push({
        dayName,
        dayNum,
        monthName,
        fullIsoDate,
        isSunday,
      });
    }
    return list;
  };

  const upcomingDays = getUpcomingDays();

  // Set default select date to first non-Sunday
  if (!selectedDate && upcomingDays.length > 0) {
    const firstActive = upcomingDays.find(d => !d.isSunday);
    if (firstActive) {
      setSelectedDate(firstActive.fullIsoDate);
    }
  }

  const activeTreatment = TREATMENTS.find((t) => t.id === treatmentId);

  // Submit Handler
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !email || !phone || !treatmentId || !selectedDate) {
      alert("Please fill in all clinical booking requirements.");
      return;
    }

    setIsSubmitting(true);
    let emailStatusResult: 'success' | 'warn_no_key' | 'failed' = 'success';
    let errorMessage: string | null = null;

    const matchedTreatment = TREATMENTS.find((t) => t.id === treatmentId);
    const bookingId = `CG-${Math.floor(10000 + Math.random() * 90000)}`;

    const newBooking: Booking = {
      id: bookingId,
      patientName,
      email,
      phone,
      treatmentId,
      treatmentTitle: matchedTreatment ? matchedTreatment.title : "Custom Treatment",
      date: selectedDate,
      timeSlot,
      skinConcerns,
      createdAt: new Date().toISOString(),
      status: "Confirmed",
    };

    try {
      // Trigger API backend notification via Resend
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ booking: newBooking }),
      });

      let data: any = {};
      let isJson = false;
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        try {
          data = await response.json();
          isJson = true;
        } catch (jsonErr) {
          console.error("Failed to parse JSON response:", jsonErr);
        }
      }

      if (!isJson) {
        const textResponse = await response.text();
        // Fallback check: if the text contains a massive HTML page, extract a simplified summary
        let cleanText = textResponse.trim().substring(0, 300);
        if (cleanText.includes("<!DOCTYPE html>") || cleanText.includes("<html")) {
          cleanText = `HTML Response (Status ${response.status}): The server did not respond with JSON. The dev server is starting up or a server configuration error occurred.`;
        }
        emailStatusResult = 'failed';
        errorMessage = cleanText || `Empty response with status ${response.status}`;
      } else if (!response.ok) {
        emailStatusResult = 'failed';
        errorMessage = data.error || `Server responded with status ${response.status}`;
      } else if (data.status === "saved_locally_only") {
        emailStatusResult = 'warn_no_key';
      } else {
        emailStatusResult = 'success';
      }
    } catch (err: any) {
      console.error("Failed to notify backend server via Resend", err);
      emailStatusResult = 'failed';
      errorMessage = err.message || "Failed to make a server request.";
    } finally {
      // Save locally only if the email actually went through ("really sent")
      if (emailStatusResult === "success") {
        const existing: Booking[] = JSON.parse(localStorage.getItem("active_bookings") || "[]");
        localStorage.setItem("active_bookings", JSON.stringify([newBooking, ...existing]));

        // Dispatch global event so other components can render active bookings
        window.dispatchEvent(new Event("bookings_updated"));

        // Dispatch a sleek, professional confirmation toast!
        window.dispatchEvent(new CustomEvent("show-app-toast", {
          detail: {
            message: `Appointment ${newBooking.id} confirmed and email notification dispatched!`,
            type: "success"
          }
        }));
      } else if (emailStatusResult === "warn_no_key") {
        // Warning: key missing
        window.dispatchEvent(new CustomEvent("show-app-toast", {
          detail: {
            message: "Booking simulated: No email was sent because server API key is not configured.",
            type: "warning"
          }
        }));
      } else {
        // Failed email transmission
        window.dispatchEvent(new CustomEvent("show-app-toast", {
          detail: {
            message: `Booking failed dispatch: ${errorMessage || "Resend email transit error"}`,
            type: "error"
          }
        }));
      }

      setEmailStatus(emailStatusResult);
      setEmailErrorMessage(errorMessage);
      setConfirmedBooking(newBooking);
      setIsSubmitting(false);
    }
  };

  const handleCopyCode = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  // Reset booking form and close modal
  const handleFinished = () => {
    setConfirmedBooking(null);
    setPatientName("");
    setEmail("");
    setPhone("");
    setSkinConcerns("");
    onClose();
  };

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

        {/* Modal body container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative w-full max-w-xl bg-[#F5F0E8] rounded-2xl shadow-2xl overflow-hidden border border-[#6B7152]/20 z-10 max-h-[92vh] flex flex-col"
          id="custom-booking-modal"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-[#FAF7F2] border-b border-[#6B7152]/10 shrink-0">
            <div className="flex items-center space-x-2.5">
              <div className="flex h-7 w-7 rounded-full bg-[#4A7C7C] text-[#F5F0E8] items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                {confirmedBooking ? "Appointment Secured" : "Aesthetic Consultation Booking"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200/50 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close modal"
              id="close-booking-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!confirmedBooking ? (
            /* ACTIVE BOOKING FORM BLOCK */
            <form onSubmit={handleBookingSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 font-sans">
              
              {/* Sterile clinic reassuring tip banner */}
              <div className="bg-[#6B7152]/10 border border-[#6B7152]/30 p-4 rounded-xl flex items-start space-x-3 text-xs text-gray-700">
                <span className="text-[#6B7152] font-bold text-base mt-0.5">✓</span>
                <div>
                  <span className="font-semibold block text-[#6B7152] uppercase tracking-wider text-[10px]">Clinical Integrity Guarantee</span>
                  No prepayments required. Free medical consultation included. Reschedule safely at any time.
                </div>
              </div>

              {/* Treatment Selection Field */}
              <div className="space-y-2">
                <label htmlFor="form-treatment" className="text-xs font-serif font-bold text-gray-900 uppercase tracking-wider block">
                  1. Choose Desired Clinical Treatment:
                </label>
                <select
                  id="form-treatment"
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full bg-[#FCFAF5] border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-[#4A7C7C] focus:ring-1 focus:ring-[#4A7C7C] text-gray-900 font-medium"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title} ({t.priceRange} — {t.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection Panel */}
              <div className="space-y-3">
                <label className="text-xs font-serif font-bold text-gray-900 uppercase tracking-wider block">
                  2. Select Consultation Date:
                </label>
                
                {/* Dynamically Generated Day Cards Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2" id="booking-days-grid">
                  {upcomingDays.map((day) => {
                    if (day.isSunday) {
                      return (
                        <div
                          key={day.fullIsoDate}
                          className="p-2 rounded-lg bg-gray-100 opacity-50 border border-gray-200 text-center cursor-not-allowed select-none"
                        >
                          <span className="block text-[10px] uppercase font-semibold text-gray-400">{day.dayName}</span>
                          <span className="block text-sm font-bold text-gray-450 font-mono">{day.dayNum}</span>
                          <span className="block text-[8px] text-rose-500 font-bold uppercase">Closed</span>
                        </div>
                      );
                    }

                    const isSelected = selectedDate === day.fullIsoDate;

                    return (
                      <button
                        type="button"
                        key={day.fullIsoDate}
                        onClick={() => setSelectedDate(day.fullIsoDate)}
                        className={`p-2 rounded-xl text-center border transition-all duration-300 flex flex-col items-center justify-center ${
                          isSelected
                            ? "bg-[#4A7C7C] border-[#4A7C7C] text-white shadow-md transform scale-105"
                            : "bg-[#FCFAF5] border-gray-200 hover:border-[#6B7152] text-gray-800"
                        }`}
                      >
                        <span className={`block text-[9px] uppercase font-bold tracking-wider ${isSelected ? "text-cream/90" : "text-gray-400"}`}>
                          {day.dayName}
                        </span>
                        <span className="block text-base font-extrabold font-mono mt-0.5 leading-none">
                          {day.dayNum}
                        </span>
                        <span className={`block text-[9px] font-sans mt-0.5 ${isSelected ? "text-cream/80" : "text-gray-500"}`}>
                          {day.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Back-up traditional date input for planning far ahead */}
                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-gray-500">Alternatively, manually pick a later date:</span>
                  <input
                    type="date"
                    min="2026-06-15"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-800 focus:outline-[#4A7C7C]"
                  />
                </div>
              </div>

              {/* Working Hours/Time Slots Selection */}
              <div className="space-y-2">
                <label className="text-xs font-serif font-bold text-gray-900 uppercase tracking-wider block">
                  3. Select Preferred Hours Window:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "Morning Slot (09:00 - 12:00)",
                    "Afternoon Slot (12:00 - 15:00)",
                    "Late Evening (15:00 - 20:00)"
                  ].map((slot) => {
                    const isSelected = timeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all ${
                          isSelected
                            ? "bg-[#6B7152] border-[#6B7152] text-[#F5F0E8] shadow-sm font-semibold"
                            : "bg-[#FCFAF5] border-gray-200 text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {slot.split(" (")[0]}
                        <span className="block text-[9px] opacity-75 mt-0.5 font-mono">
                          ({slot.split(" (")[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details Segment */}
              <div className="space-y-3 pt-4 border-t border-[#6B7152]/10">
                <h4 className="font-serif text-sm font-bold text-gray-950 uppercase tracking-widest text-[#6B7152]">
                  4. Patient Contact Details
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                  <div>
                    <label htmlFor="form-name" className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Charlotte Wood"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-[#FCFAF5] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#4A7C7C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="form-email" className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="charlotte@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FCFAF5] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#4A7C7C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-phone" className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="e.g. 07404 106477"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FCFAF5] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#4A7C7C]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-concerns" className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                    Skin Concerns, Target Areas or Conditions (Optional)
                  </label>
                  <textarea
                    id="form-concerns"
                    rows={2}
                    placeholder="e.g. Fine dynamic lines on forehead, dehydration, or skin sensitivity details..."
                    value={skinConcerns}
                    onChange={(e) => setSkinConcerns(e.target.value)}
                    className="w-full bg-[#FCFAF5] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#4A7C7C] resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA block */}
              <div className="pt-4 shrink-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-cream transition-all duration-300 shadow-md transform ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#4A7C7C] hover:bg-[#375E5E] hover:-translate-y-0.5 cursor-pointer"
                  }`}
                  id="submit-booking-btn"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Booking Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Secure Upcoming Skin Consultation</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* DYNAMIC CONFIRMATION RECEIPT VIEW */
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-center font-sans">
              
              {/* Success Green Circle */}
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h4 className="font-serif text-2xl font-semibold text-gray-950">
                  Aesthetic Slot Reserved!
                </h4>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-mono">
                  Your request has been clinically verified
                </p>
              </div>

              {/* Confirmed Ticket Receipt */}
              <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#6B7152]/20 divide-y divide-[#6B7152]/10 space-y-4">
                
                {/* ID & Date Header */}
                <div className="flex justify-between items-center text-xs pb-3 pt-1">
                  <div>
                    <span className="text-gray-400 block text-left">Appointment ID</span>
                    <button
                      onClick={handleCopyCode}
                      className="font-mono font-black text-[#4A7C7C] hover:underline flex items-center space-x-1"
                      title="Copy code"
                    >
                      <span>{confirmedBooking.id}</span>
                      <Copy className="w-3 h-3 text-[#6B7152]" />
                    </button>
                    {copiedId && <span className="text-[9px] text-emerald-600 block text-left">Copied!</span>}
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block">Scheduled Time</span>
                    <span className="font-mono font-bold text-[#4A7C7C]">{confirmedBooking.timeSlot.split(" (")[0]}</span>
                  </div>
                </div>

                {/* Treatment Details */}
                <div className="py-4 text-left space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Selected Skincare Suite</span>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-gray-900">{confirmedBooking.treatmentTitle}</span>
                    <span className="text-xs font-mono bg-[#6B7152]/10 text-[#6B7152] px-3 py-1 rounded-full font-bold">
                      {activeTreatment ? activeTreatment.priceRange : "Bespoke Service"}
                    </span>
                  </div>
                </div>

                {/* Patient Info Summary */}
                <div className="py-4 text-left text-xs space-y-1 bg-[#F5F0E8]/40 p-3 rounded-lg">
                  <p className="text-gray-700"><strong>Patient Name:</strong> {confirmedBooking.patientName}</p>
                  <p className="text-gray-700"><strong>Email:</strong> {confirmedBooking.email}</p>
                  <p className="text-gray-700"><strong>Date:</strong> {new Date(confirmedBooking.date).toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

              </div>

              {/* Patient Arrival Guidance block */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 text-left text-xs space-y-3">
                <h5 className="font-serif text-sm font-bold text-[#4A7C7C] flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>Your Steps for Session Day:</span>
                </h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#6B7152] mr-2 font-bold font-mono">1.</span>
                    <span>Arrive 5 minutes prior at <strong className="text-gray-900">BBstylehouse, Queen Street, Morley, Leeds LS27 8DX</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7152] mr-2 font-bold font-mono">2.</span>
                    <span>No pre-treatment makeup, dynamic scrubs, or active chemical topicals 24 hours beforehand.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7152] mr-2 font-bold font-mono">3.</span>
                    <span>Your clinical consultation will guide exact anatomical mapping prior to procedures.</span>
                  </li>
                </ul>
              </div>

              {/* Action columns: Add to GCalendar or Open WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
                <a
                  href={`https://wa.me/447404106477?text=Hello%20Confidence%20and%20Glow!%20I've%20just%20booked%20appointment%20${confirmedBooking.id}%20for%20a%20${confirmedBooking.treatmentTitle}%20on%20${confirmedBooking.date}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 bg-[#25D366] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba5a] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Notify via WhatsApp</span>
                </a>
                
                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Confidence+%26+Glow+Aesthetics+:+${encodeURIComponent(confirmedBooking.treatmentTitle)}&dates=20260615T120000Z/20260615T130000Z&details=Your+premium+aesthetics+appointment+ID:+${confirmedBooking.id}.+Practitioner+will+review+and+consult+prior+to+your+treatment.&location=BBstylehouse,+Queen+St,+Morley,+Leeds+LS27+8DX`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#D4A5A5]" />
                  <span>Add to Google Calendar</span>
                </a>
              </div>

              {/* Complete Footer Button */}
              <div className="pt-4 mb-4 select-none">
                <button
                  type="button"
                  onClick={handleFinished}
                  className="px-10 py-3 bg-[#6B7152] hover:bg-[#4A4E38] text-white font-serif uppercase text-xs font-bold rounded-full tracking-widest transition-colors w-full sm:w-auto"
                >
                  Finished &amp; Return to Home
                </button>
              </div>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

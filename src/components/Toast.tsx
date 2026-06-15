import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

interface ToastItem {
  id: string;
  message: string;
  type: "success" | "warning" | "error";
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleShowToast = (event: Event) => {
      const customEvent = event as CustomEvent<{ message: string; type: "success" | "warning" | "error" }>;
      if (!customEvent.detail) return;

      const newToast: ToastItem = {
        id: Math.random().toString(36).substring(2, 9),
        message: customEvent.detail.message,
        type: customEvent.detail.type || "success",
      };

      setToasts((prev) => [...prev, newToast]);

      // Auto-remove after 4.5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 4500);
    };

    window.addEventListener("show-app-toast", handleShowToast);
    return () => {
      window.removeEventListener("show-app-toast", handleShowToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          let bgColor = "bg-[#FAF7F2]";
          let borderColor = "border-[#6B7152]/30";
          let iconColor = "text-[#4A7C7C]";
          let Icon = CheckCircle2;

          if (toast.type === "warning") {
            bgColor = "bg-amber-50";
            borderColor = "border-amber-200";
            iconColor = "text-amber-600";
            Icon = AlertTriangle;
          } else if (toast.type === "error") {
            bgColor = "bg-rose-50";
            borderColor = "border-rose-200";
            iconColor = "text-rose-600";
            Icon = XCircle;
          }

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`pointer-events-auto p-4 rounded-xl border ${bgColor} ${borderColor} shadow-lg flex items-start space-x-3 text-left`}
            >
              <div className={`${iconColor} mt-0.5 shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1 space-y-0.5">
                <p className="text-xs font-bold font-sans uppercase tracking-wider text-gray-400">
                  {toast.type === "success" ? "System Confirmed" : toast.type === "warning" ? "Notice" : "System Alert"}
                </p>
                <p className="text-xs font-medium text-gray-800 leading-relaxed font-sans">
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 p-0.5 rounded transition-colors"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

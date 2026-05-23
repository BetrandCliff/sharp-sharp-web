// components/BetaBadge.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BetaBadge() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed the badge
    const hasDismissed = localStorage.getItem("betaBadgeDismissed");

    if (!hasDismissed) {
      setShowBadge(true);

      // Auto-hide after 10 minutes
      const timer = setTimeout(() => {
        hideBadge();
      }, 10 * 60 * 1000); // 10 minutes

      return () => clearTimeout(timer);
    }
  }, []);

  const hideBadge = () => {
    setShowBadge(false);
    localStorage.setItem("betaBadgeDismissed", "true");
  };

  return (
    <AnimatePresence>
      {showBadge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: 40, 
            scale: 0.95 
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 mb-6 mx-auto relative group"
        >
          <span className="text-orange-400 text-sm font-medium pr-6">
            🚀 Now in Beta
          </span>

          {/* Close Button */}
          <button
            onClick={hideBadge}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
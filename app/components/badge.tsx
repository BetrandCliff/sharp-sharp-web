// components/BetaBadge.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BetaBadge() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    setShowBadge(true);

    // Hide automatically after 5 seconds
    const timer = setTimeout(() => {
      setShowBadge(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showBadge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="inline-flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full px-5 py-2 mx-auto transition-colors duration-300"
        >
          <span className="text-orange-500 dark:text-orange-400 text-sm font-medium">
            Powered By CRITH
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
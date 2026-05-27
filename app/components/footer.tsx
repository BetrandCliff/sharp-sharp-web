// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950 text-slate-700 dark:text-zinc-400 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* RIGHT */}
        <div className="text-sm text-slate-500 dark:text-zinc-500 text-center md:text-right">
          © {new Date().getFullYear()} Sharp-Sharp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
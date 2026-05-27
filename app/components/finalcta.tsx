// components/CTA.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative overflow-hidden text-slate-900 dark:text-white">
      
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[11px] text-slate-500 dark:text-zinc-400 mb-6">
          Logistics Management Platform
        </div>

        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
          Ready to modernize your logistics?
        </h2>

        <p className="text-sm text-slate-500 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-6">
          Join fast-growing logistics companies using Sharp-Sharp to
          simplify fleet management, track operations, and improve delivery efficiency.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold text-sm rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Free Trial
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 border border-slate-200 dark:border-zinc-700 hover:border-zinc-400 text-sm rounded-lg text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition"
          >
            Contact Sales
          </Link>
        </div>

        <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 dark:text-zinc-500 mt-8 flex-wrap">
          <span>Takes less than 2 minutes</span>
          <span className="hidden sm:block">•</span>
          <span>No credit card needed</span>
          <span className="hidden sm:block">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
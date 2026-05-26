"use client";

import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import Link from "next/link";
import BetaBadge from "./badge";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">

      {/* 🎬 BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/logistics2.mp4" type="video/mp4" />
      </video>

      {/* 🖤 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <BetaBadge />

        <h1 className="text-xl font-bold tracking-tighter mb-6">
          Logistics, <span className="text-orange-500">Simplified.</span>
        </h1>

        <p className="text-md text-zinc-400 max-w-2xl mx-auto mb-10">
          Connect companies, drivers, and administrators in one platform.
          Manage deliveries and operations with ease.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          {/* CTA BUTTON */}
          <Link
            href="/auth/register"
            className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-md text-sm flex items-center gap-2 transition"
          >
            <ArrowRight className="w-4 h-4" />
            Start Free Trial
          </Link>

          {/* WATCH DEMO BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-3 border border-zinc-700 hover:border-zinc-500 rounded-md flex items-center gap-2 text-sm transition"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </button>

        </div>

        <p className="text-sm text-zinc-500 mt-6">
          No credit card required • 14-day free trial
        </p>

      </div>

      {/* 🎥 MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-4 text-white hover:text-orange-500 z-[1000]"
            >
              <X size={28} />
            </button>

            {/* VIDEO */}
            <video
              className="w-full rounded-xl border border-zinc-800"
              controls
              autoPlay
            >
              <source src="/videos/logistics2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      )}

    </section>
  );
}
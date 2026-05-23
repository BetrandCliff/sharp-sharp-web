// components/CTA.tsx
"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold tracking-tight mb-6">
          Ready to modernize your logistics?
        </h2>
        <p className="text-xl text-zinc-400 mb-10">
          Join growing logistics companies using SharpLogistics to streamline operations.
        </p>

        <Link
          href="/auth/register"
          className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold text-xl rounded-2xl transition hover:scale-105"
        >
          Start Your Free Trial
        </Link>

        <p className="text-sm text-zinc-500 mt-6">
          Takes less than 2 minutes • No credit card needed
        </p>
      </div>
    </section>
  );
}
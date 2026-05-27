// app/contact/page.tsx
"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import BetaBadge from "./badge";

export default function ContactPage() {
  return (
    <>
      <main
        id="contactPage"
        className="bg-white text-zinc-900 dark:bg-black dark:text-white min-h-screen transition-colors duration-300"
      >
        {/* HERO */}
        <section className="relative py-20 border-b border-zinc-200 dark:border-zinc-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_40%)]" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
              Contact us
            </div>

            <h1 className="text-xl md:text-xl font-bold tracking-tight mb-6 leading-tight">
              We’d love to hear from you
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-7">
              Questions about Sharp-Sharp, pricing, support,
              partnerships, or enterprise solutions? Our team is
              ready to help.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT SIDE */}
            <div>
              <p className="text-orange-500 text-sm font-medium mb-3">
                Get in touch
              </p>

              <h2 className="text-sm font-bold mb-6">
                Contact our team
              </h2>

              <p className="text-zinc-500 dark:text-zinc-400 leading-7 text-sm mb-10 max-w-md">
                We usually respond within a few hours. Reach out
                anytime and we’ll gladly assist you.
              </p>

              <div className="space-y-5">

                {/* EMAIL */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/40 transition">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>

                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white mb-1">
                      Email
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      support@sharp-sharp.com
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/40 transition">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>

                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white mb-1">
                      Phone
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      +237 6XX XXX XXX
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/40 transition">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>

                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white mb-1">
                      Location
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Yaoundé, Cameroon
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <form className="relative bg-white dark:bg-zinc-900/70 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl">
              <div>
                <label className="block mb-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-orange-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition-all duration-300"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <div className="flex justify-center py-10">
        <BetaBadge />
      </div>
    </>
  );
}
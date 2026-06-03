// // app/about/page.tsx
// "use client";

// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <main
//       id="aboutPage"
//       className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white min-h-screen transition-colors duration-300"
//     >
//       <section className="py-20 border-b border-zinc-200 dark:border-zinc-800">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           {/* <p className="text-orange-500 text-sm font-medium mb-4">
//             About Sharp-Sharp
//           </p> */}

//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[11px] text-zinc-500 dark:text-zinc-400 mb-5">
//             About Us
//           </div>

//           <h1 className="text-xl md:text-xl font-bold tracking-tight mb-6">
//             Modern logistics management built for fast-growing companies
//           </h1>

//           <p className="text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed text-[12px]">
//             Sharp-Sharp helps logistics companies simplify operations,
//             manage fleets, track deliveries, monitor drivers, and improve
//             efficiency — all from one powerful platform.
//           </p>
//         </div>
//       </section>

//       <section className="py-10">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
//             <h2 className="text-lg font-semibold mb-4">Our Mission</h2>
//             <p className="text-[12px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
//               We aim to modernize logistics operations by providing reliable,
//               scalable, and easy-to-use digital tools for transport businesses.
//             </p>
//           </div>

//           <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
//             <h2 className="text-lg font-semibold mb-4">What We Offer</h2>
//             <p className="text-[12px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
//               Fleet management, driver tracking, analytics dashboards,
//               shipment monitoring, and operational automation designed
//               for modern businesses.
//             </p>
//           </div>

//           <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
//             <h2 className="text-lg font-semibold mb-4">Why Sharp-Sharp</h2>
//             <p className="text-[12px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
//               Fast setup, intuitive experience, scalable infrastructure,
//               and real-time visibility that keeps your logistics business
//               running efficiently.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-18 border-t border-zinc-200 dark:border-zinc-800">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-md font-bold tracking-tight mb-6">
//             Ready to grow your logistics business?
//           </h2>

//           <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-[12px]">
//             Start using Sharp-Sharp today and simplify your operations.
//           </p>

//           <Link
//             href="/auth/register"
//             className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-md transition hover:scale-105 text-[12px]"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* HERO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[11px] text-muted-foreground mb-5">
            About Us
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Modern logistics management built for fast-growing companies
          </h1>

          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Sharp-Sharp helps logistics companies simplify operations,
            manage fleets, track deliveries, monitor drivers, and improve
            efficiency — all from one powerful platform.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-card border border-border rounded-3xl p-8 transition-colors">
            <h2 className="text-lg font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              We aim to modernize logistics operations by providing reliable,
              scalable, and easy-to-use digital tools for transport businesses.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 transition-colors">
            <h2 className="text-lg font-semibold mb-4">
              What We Offer
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Fleet management, driver tracking, analytics dashboards,
              shipment monitoring, and operational automation designed
              for modern businesses.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 transition-colors">
            <h2 className="text-lg font-semibold mb-4">
              Why Sharp-Sharp
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Fast setup, intuitive experience, scalable infrastructure,
              and real-time visibility that keeps your logistics business
              running efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Ready to grow your logistics business?
          </h2>

          <p className="text-muted-foreground mb-10 text-sm md:text-base">
            Start using Sharp-Sharp today and simplify your operations.
          </p>

          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Link>

        </div>
      </section>

    </main>
  );
}
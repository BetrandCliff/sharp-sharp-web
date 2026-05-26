import Image from "next/image";

export default function AppShowcase() {
  return (
    <section className="py-24 bg-black border-t border-zinc-800 relative overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-[11px] text-zinc-400 mb-5">
            Mobile Experience
          </div>

          <h2 className="text-xl font-bold mb-5 tracking-tight">
            Manage deliveries directly from your phone
          </h2>

          <p className="text-sm text-zinc-400 leading-6 mb-6">
            Drivers and customers can track, book, and manage logistics in real-time.
            Everything is optimized for speed, simplicity, and reliability.
          </p>

          <ul className="text-sm text-zinc-400 space-y-2">
            <li>✔ Real-time tracking</li>
            <li>✔ Instant booking system</li>
            <li>✔ Driver notifications</li>
            <li>✔ Seamless delivery updates</li>
          </ul>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          
          {/* glow */}
          <div className="absolute -inset-6 bg-orange-500/10 blur-3xl rounded-full" />

          <div className="relative border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero/sharp-sharp.png"
              alt="User using Sharp-Sharp app"
              width={900}
              height={900}
              className="w-full h-[520px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
// app/contact/page.tsx
"use client";

export default function ContactPage() {
  return (
    <main id="contactPage" className="bg-black text-white min-h-screen">
      <section className="py-24 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* <p className="text-orange-500 text-sm font-medium mb-4">
            Contact Us
          </p> */}

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-[11px] text-zinc-400 mb-5">
            Contact us
          </div>


          <h1 className="text-xl md:text-5xl font-bold tracking-tight mb-6">
            We'd love to hear from you
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto text-[12px]">
            Have questions about Sharp-Sharp, pricing, partnerships,
            or support? Reach out and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-md font-semibold mb-6">
              Get in touch
            </h2>

            <div className="space-y-6 text-sm text-zinc-400">
              <div>
                <p className="text-white font-medium mb-1 text-sm">Email</p>
                <p className="text-[12px]">support@sharp-sharp.com</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1 text-sm">Phone</p>
                <p className="text-[12px]">+237 6XX XXX XXX</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1 text-sm">Location</p>
                <p className="text-[12px]">Yaoundé, Cameroon</p>
              </div>
            </div>
          </div>

          <form className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
            <div>
              <label className="block  mb-2 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
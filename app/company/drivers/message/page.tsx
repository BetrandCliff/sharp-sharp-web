"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import { Mail, Send, User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MessageDriverPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/driver/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* <Sidebar role="company" /> */}

      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="mb-10 flex items-center gap-4">
          
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            className="p-2 rounded-xl border border-border hover:border-orange-500 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <h1 className="text-xl font-black">Message Driver</h1>
            <p className="text-muted-foreground text-sm mt-2">
              Send a direct message to a driver via email
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={sendMessage}
          className="max-w-2xl bg-background border border-border rounded-3xl p-6 md:p-10 space-y-6"
        >

          {/* EMAIL */}
          <div>
            <label className="text-sm mb-2 flex items-center gap-2">
              <Mail size={14} /> Driver Email
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="driver@example.com"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-border focus:border-orange-500 outline-none"
            />
          </div>

          {/* SUBJECT */}
          <div>
            <label className="text-sm mb-2 flex items-center gap-2">
              <User size={14} /> Subject
            </label>

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Delivery Update"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-border focus:border-orange-500 outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm mb-2">Message</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-border focus:border-orange-500 outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-xl transition"
          >
            <Send size={16} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </main>
    </div>
  );
}
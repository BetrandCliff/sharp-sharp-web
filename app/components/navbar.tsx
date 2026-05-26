// components/Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-orange-500 rounded-xl flex items-center justify-center">
            <Truck className="w-3 h-3 text-black" />
          </div>
          <h1 className="text-md font-bold tracking-tight">Sharp-Sharp</h1>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="hover:text-orange-400 transition text-sm">Home</a>
          <a href="#features" className="hover:text-orange-400 transition text-sm">Services</a>
          <a href="#testimonials" className="hover:text-orange-400 transition text-sm">Testimonials</a>
          <a href="#features" className="hover:text-orange-400 transition text-sm">About</a>
          <a href="#features" className="hover:text-orange-400 transition text-sm">Contact Us</a>
          {/* <a href="#how" className="hover:text-orange-400 transition text-sm">How it Works</a> */}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="hidden md:block px-6 py-2.5 text-sm font-medium hover:text-orange-400 transition">
            Login
          </Link>
          <Link 
            href="/auth/register"
            className="px-3 py-1 bg-orange-500 text-sm  hover:bg-orange-600 text-black font-normal rounded-xl transition"
          >
            Get Started
          </Link>

          <button 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Truck } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "services",
        "testimonials",
        "aboutPage",
        "contactPage",
      ];

      let current = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 120;

          if (window.scrollY >= sectionTop) {
            current = sectionId;
          }
        }
      });

      if (window.scrollY < 100) {
        current = "home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "#",
      id: "home",
    },
    {
      label: "Services",
      href: "#services",
      id: "services",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
      id: "testimonials",
    },
    {
      label: "About",
      href: "#aboutPage",
      id: "aboutPage",
    },
    {
      label: "Contact Us",
      href: "#contactPage",
      id: "contactPage",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800">

      {/* CONTAINER */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* NAV CONTENT */}
        <div className="h-20 flex items-center justify-between gap-6">

          {/* LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Truck className="w-5 h-5 text-black" />
            </div>

            <h1 className="text-md font-bold tracking-tight text-white whitespace-nowrap">
              Sharp-Sharp
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative text-sm transition whitespace-nowrap
                  
                  ${
                    isActive
                      ? "text-orange-400"
                      : "text-zinc-300 hover:text-orange-400"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-white hover:text-orange-400 transition whitespace-nowrap"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-black text-sm font-medium rounded-lg transition whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-3 bg-zinc-950 border-t border-zinc-800">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition
                  
                  ${
                    isActive
                      ? "text-orange-400"
                      : "text-zinc-300 hover:text-orange-400"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* MOBILE BUTTONS */}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/auth/login"
                className="w-full text-center border border-zinc-700 py-3 rounded-lg text-white hover:border-orange-500 transition"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="w-full text-center bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-lg font-medium transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}